"use client";
import React from "react";

const ProcessSection = () => {
    return (
        <section className="bg-black py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-4">
                    How We Work
                </h2>
                <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-12">
                    Our Process
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600 transition-colors duration-300">
                        <div className="text-orange-600 text-5xl font-bold opacity-30 mb-4">
                            01
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Discovery</h3>
                        <p className="text-gray-400">
                            We analyze your goals, target audience, and market to build a
                            strategic roadmap.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600 transition-colors duration-300">
                        <div className="text-orange-600 text-5xl font-bold opacity-30 mb-4">
                            02
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Design</h3>
                        <p className="text-gray-400">
                            We craft intuitive, high-converting designs that align with your
                            brand identity.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600 transition-colors duration-300">
                        <div className="text-orange-600 text-5xl font-bold opacity-30 mb-4">
                            03
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Development</h3>
                        <p className="text-gray-400">
                            Our dev team brings the design to life with clean, scalable, and
                            efficient code.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-orange-600 transition-colors duration-300">
                        <div className="text-orange-600 text-5xl font-bold opacity-30 mb-4">
                            04
                        </div>
                        <h3 className="text-white text-xl font-bold mb-3">Launch</h3>
                        <p className="text-gray-400">
                            We test rigorously, launch your platform, and provide ongoing
                            support for growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
