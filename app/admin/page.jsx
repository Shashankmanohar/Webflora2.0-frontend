"use client";

import React, { useEffect, useState } from "react";
import {
  adminLogin,
  adminGetForms,
  adminDeleteForm,
} from "@/lib/api";

const AdminPage = () => {
  const [token, setToken] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [forms, setForms] = useState([]);
  const [isLoadingForms, setIsLoadingForms] = useState(false);
  const [formsError, setFormsError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("webflora_admin_token");
    if (stored) {
      setToken(stored);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    fetchForms();
  }, [token]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setLoginError("");
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email.trim() || !loginData.password.trim()) {
      setLoginError("Email and password are required.");
      return;
    }
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const res = await adminLogin({
        email: loginData.email.trim(),
        password: loginData.password.trim(),
      });
      if (res?.token) {
        setToken(res.token);
        if (typeof window !== "undefined") {
          window.localStorage.setItem("webflora_admin_token", res.token);
        }
      } else {
        setLoginError("Login failed. No token received.");
      }
    } catch (error) {
      setLoginError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const fetchForms = async () => {
    if (!token) return;
    setIsLoadingForms(true);
    setFormsError("");
    try {
      const res = await adminGetForms(token);
      setForms(res?.data || []);
    } catch (error) {
      setFormsError(error.message || "Failed to load forms.");
    } finally {
      setIsLoadingForms(false);
    }
  };

  const handleDeleteForm = async (id) => {
    if (!token) return;
    const ok = window.confirm("Are you sure you want to delete this form?");
    if (!ok) return;
    try {
      await adminDeleteForm(id, token);
      setForms((prev) => prev.filter((f) => f._id !== id));
    } catch (error) {
      alert(error.message || "Failed to delete form.");
    }
  };

  const handleLogout = () => {
    setToken(null);
    setForms([]);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("webflora_admin_token");
    }
  };

  if (!token) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Admin Login
          </h1>
          {loginError && (
            <div className="mb-4 p-3 rounded-lg bg-red-900/30 border border-red-600/60 text-red-300 text-sm">
              {loginError}
            </div>
          )}
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-xs tracking-[0.18em] uppercase text-zinc-400"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full bg-transparent border-b-2 border-zinc-700 py-2 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-xs tracking-[0.18em] uppercase text-zinc-400"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full bg-transparent border-b-2 border-zinc-700 py-2 text-sm md:text-base text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full mt-4 bg-orange-600 text-black font-semibold tracking-[0.15em] uppercase py-3 rounded-full text-sm md:text-base hover:bg-white hover:text-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 md:py-16">
      <div className="max-w-5xl mx-auto py-20 md:py-30">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Contact Forms</h1>
            <p className="text-zinc-400 text-sm md:text-base mt-1">
              View and manage all contact form submissions.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchForms}
              disabled={isLoadingForms}
              className="px-4 py-2 rounded-full border border-orange-600 text-orange-500 text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-orange-600 hover:text-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoadingForms ? "Refreshing..." : "Refresh"}
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-xs md:text-sm uppercase tracking-[0.18em] hover:bg-zinc-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {formsError && (
          <div className="mb-4 p-3 rounded-lg bg-red-900/30 border border-red-600/60 text-red-300 text-sm">
            {formsError}
          </div>
        )}

        {isLoadingForms && forms.length === 0 ? (
          <p className="text-zinc-400 text-sm">Loading forms...</p>
        ) : forms.length === 0 ? (
          <p className="text-zinc-400 text-sm">No form submissions found yet.</p>
        ) : (
          <div className="space-y-4">
            {forms.map((item) => (
              <div
                key={item._id}
                className="border border-zinc-800 rounded-xl p-4 md:p-5 bg-zinc-900/40 flex flex-col gap-3"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold">
                      {item.name || "Unnamed"}
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleString()
                        : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteForm(item._id)}
                    className="self-start md:self-auto px-3 py-1.5 rounded-full border border-red-600 text-red-400 text-[11px] md:text-xs uppercase tracking-[0.18em] hover:bg-red-600 hover:text-black transition-colors"
                  >
                    Delete
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <p className="text-zinc-300">
                    <span className="text-zinc-500 mr-1">Email:</span>
                    {item.email || "-"}
                  </p>
                  <p className="text-zinc-300">
                    <span className="text-zinc-500 mr-1">Contact:</span>
                    {item.contactNumber || "-"}
                  </p>
                </div>

                <div className="text-sm text-zinc-200 mt-2">
                  <span className="text-zinc-500 block mb-1">Message:</span>
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPage;

