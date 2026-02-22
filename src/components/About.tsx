"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiDocker,
    SiScikitlearn,
    SiNumpy,
} from "react-icons/si";
import { FiDatabase, FiCode, FiCpu, FiMessageSquare, FiLayers, FiZap } from "react-icons/fi";

const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Machine Learning", icon: FiZap, color: "#22d3ee" },
    { name: "Deep Learning", icon: FiCpu, color: "#a855f7" },
    { name: "NLP", icon: FiMessageSquare, color: "#3b82f6" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    { name: "Data Structures", icon: FiDatabase, color: "#10b981" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "NumPy", icon: SiNumpy, color: "#013243" },
    { name: "DSA", icon: FiCode, color: "#f59e0b" },
    { name: "Neural Networks", icon: FiLayers, color: "#ec4899" },
];

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="mx-auto max-w-6xl px-6">
                <SectionWrapper>
                    <h2 className="font-heading text-3xl font-bold text-center sm:text-4xl">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-center text-muted leading-relaxed">
                        I&apos;m an aspiring AI Engineer with a deep passion for building
                        intelligent systems. My journey began with curiosity about how
                        machines learn and evolved into hands-on expertise in machine
                        learning, deep learning, and NLP. I love turning complex data into
                        actionable insights and building models that make a real-world
                        impact.
                    </p>
                </SectionWrapper>

                {/* Skills Grid */}
                <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {skills.map((skill, i) => (
                        <SectionWrapper key={skill.name} delay={i * 0.05}>
                            <motion.div
                                whileHover={{ y: -6, scale: 1.05 }}
                                className="glass group flex flex-col items-center gap-3 rounded-2xl p-5 transition-shadow hover:glow-cyan cursor-default"
                            >
                                <skill.icon
                                    size={32}
                                    style={{ color: skill.color }}
                                    className="transition-transform group-hover:scale-110"
                                />
                                <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
