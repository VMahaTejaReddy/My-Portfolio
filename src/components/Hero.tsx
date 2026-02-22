"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ParticlesBackground from "./ParticlesBackground";
import { FiArrowDown, FiDownload } from "react-icons/fi";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Particles BG */}
            <ParticlesBackground />

            {/* Radial gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.08)_0%,_transparent_70%)]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="mb-4 text-sm font-medium tracking-widest uppercase text-cyan-glow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <h1 className="font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="text-gradient-animated">Mahi</span>
                    </h1>

                    <div className="mt-4 h-10 text-lg text-muted sm:text-xl">
                        <TypeAnimation
                            sequence={[
                                "Aspiring AI Engineer",
                                2000,
                                "Machine Learning Enthusiast",
                                2000,
                                "Deep Learning Explorer",
                                2000,
                                "Building Intelligent Systems",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                        />
                    </div>

                    <motion.p
                        className="mx-auto mt-6 max-w-xl text-base text-muted leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Passionate about transforming data into intelligent solutions.
                        Specializing in Machine Learning, Deep Learning, and Natural
                        Language Processing to solve real-world problems.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-blue-glow px-7 py-3 text-sm font-semibold text-navy transition-all hover:shadow-lg hover:shadow-cyan-glow/25 active:scale-95"
                        >
                            View Projects
                            <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-navy-lighter px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-cyan-glow/40 hover:bg-navy-light active:scale-95"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="h-9 w-5 rounded-full border-2 border-navy-lighter flex items-start justify-center p-1">
                        <motion.div
                            className="h-2 w-1 rounded-full bg-cyan-glow"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
