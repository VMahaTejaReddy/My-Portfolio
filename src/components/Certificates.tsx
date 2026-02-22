"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward } from "react-icons/fi";

interface Certificate {
    name: string;
    issuer: string;
    link: string;
}

const certificates: Certificate[] = [
    {
        name: "Deep Learning Specialization",
        issuer: "Coursera — Andrew Ng",
        link: "https://coursera.org",
    },
    {
        name: "Machine Learning A-Z",
        issuer: "Udemy",
        link: "https://udemy.com",
    },
    {
        name: "TensorFlow Developer Certificate",
        issuer: "Google",
        link: "https://tensorflow.org",
    },
    {
        name: "Natural Language Processing",
        issuer: "Coursera — DeepLearning.AI",
        link: "https://coursera.org",
    },
    {
        name: "Python for Data Science",
        issuer: "IBM — Cognitive Class",
        link: "https://cognitiveclass.ai",
    },
    {
        name: "Docker Essentials",
        issuer: "LinkedIn Learning",
        link: "https://linkedin.com/learning",
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="section-padding">
            <div className="mx-auto max-w-6xl px-6">
                <SectionWrapper>
                    <h2 className="font-heading text-3xl font-bold text-center sm:text-4xl">
                        <span className="text-gradient">Certificates</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-center text-muted">
                        Continuous learning through recognized certifications in AI and
                        related technologies.
                    </p>
                </SectionWrapper>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, i) => (
                        <SectionWrapper key={cert.name} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                className="glass group flex flex-col rounded-2xl p-6 transition-shadow hover:glow-blue"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-glow/10">
                                        <FiAward className="text-blue-glow" size={20} />
                                    </div>
                                    <span className="text-xs font-medium text-muted">{cert.issuer}</span>
                                </div>

                                <h3 className="font-heading text-base font-bold text-foreground">
                                    {cert.name}
                                </h3>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-blue-glow transition-colors"
                                >
                                    <FiExternalLink size={14} />
                                    View Certificate
                                </a>
                            </motion.div>
                        </SectionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
