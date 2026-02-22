"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface Project {
    title: string;
    description: string;
    tags: string[];
    category: string;
    github: string;
    demo?: string;
}

const projects: Project[] = [
    {
        title: "Sentiment Analysis Engine",
        description:
            "Real-time sentiment analysis tool using BERT transformers for social media monitoring with 94% accuracy.",
        tags: ["Python", "BERT", "Flask", "NLP"],
        category: "NLP",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Image Classification CNN",
        description:
            "Deep learning model for multi-class image classification using ResNet architecture with transfer learning.",
        tags: ["PyTorch", "CNN", "OpenCV", "Python"],
        category: "CV",
        github: "https://github.com",
    },
    {
        title: "Stock Price Predictor",
        description:
            "LSTM-based time series forecasting model for stock price prediction with interactive dashboard.",
        tags: ["TensorFlow", "LSTM", "Pandas", "Streamlit"],
        category: "ML",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Chatbot with RAG",
        description:
            "Conversational AI chatbot using Retrieval Augmented Generation with vector database integration.",
        tags: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
        category: "NLP",
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Object Detection System",
        description:
            "Real-time object detection using YOLOv8 with custom training on industrial equipment dataset.",
        tags: ["YOLOv8", "OpenCV", "Python", "Docker"],
        category: "CV",
        github: "https://github.com",
    },
    {
        title: "Recommendation Engine",
        description:
            "Collaborative filtering recommendation system using matrix factorization and neural embeddings.",
        tags: ["Scikit-learn", "TensorFlow", "Flask", "Redis"],
        category: "ML",
        github: "https://github.com",
        demo: "https://demo.com",
    },
];

const categories = ["All", "ML", "NLP", "CV"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filtered =
        filter === "All" ? projects : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="section-padding">
            <div className="mx-auto max-w-6xl px-6">
                <SectionWrapper>
                    <h2 className="font-heading text-3xl font-bold text-center sm:text-4xl">
                        My <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-center text-muted">
                        A selection of projects showcasing my expertise in AI, ML, and data science.
                    </p>
                </SectionWrapper>

                {/* Filter Tabs */}
                <SectionWrapper delay={0.15}>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === cat
                                        ? "bg-gradient-to-r from-cyan-glow to-blue-glow text-navy shadow-lg shadow-cyan-glow/20"
                                        : "glass text-muted hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                            >
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="glass group flex h-full flex-col rounded-2xl p-6 transition-shadow hover:glow-cyan"
                                >
                                    {/* Category badge */}
                                    <span className="mb-3 self-start rounded-full bg-cyan-glow/10 px-3 py-1 text-xs font-semibold text-cyan-glow">
                                        {project.category}
                                    </span>

                                    <h3 className="font-heading text-lg font-bold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-navy-lighter/60 px-2 py-1 text-xs text-muted"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="mt-5 flex gap-4 border-t border-navy-lighter/40 pt-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-sm text-muted hover:text-cyan-glow transition-colors"
                                        >
                                            <FiGithub size={16} />
                                            Code
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm text-muted hover:text-cyan-glow transition-colors"
                                            >
                                                <FiExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
