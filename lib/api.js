import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* =========================
   SUBMIT FORM
========================= */
export const submitForm = async (payload) => {
  try {
    const { data } = await API.post("/form", payload);
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

/* =========================
   GET ALL FORMS
========================= */
export const getAllForm = async () => {
  try {
    const { data } = await API.get("/form");
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

/* =========================
   DELETE FORM
========================= */
export const deleteForm = async (id) => {
  try {
    const { data } = await API.delete(`/form/${id}`);
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

/* =========================
   ADMIN AUTH
========================= */
export const adminLogin = async (payload) => {
  try {
    const { data } = await API.post("/admin/login", payload);
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

/* =========================
   ADMIN: GET ALL FORMS (AUTH)
========================= */
export const adminGetForms = async (token) => {
  try {
    const { data } = await API.get("/form", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

/* =========================
   ADMIN: DELETE FORM (AUTH)
========================= */
export const adminDeleteForm = async (id, token) => {
  try {
    const { data } = await API.delete(`/form/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error?.response?.data || { message: "Server error" };
  }
};

export default API;
