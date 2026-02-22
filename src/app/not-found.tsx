"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "@/components/ParticlesBackground";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
            <ParticlesBackground />

            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-heading text-8xl font-bold text-gradient-animated sm:text-9xl">
                        404
                    </h1>
                    <p className="mt-4 text-xl text-muted font-medium">
                        Neural pathway not found
                    </p>
                    <p className="mt-2 text-sm text-muted/70">
                        The AI couldn&apos;t locate this page in the network.
                    </p>

                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-blue-glow px-7 py-3 text-sm font-semibold text-navy transition-shadow hover:shadow-lg hover:shadow-cyan-glow/25"
                    >
                        <FiHome size={16} />
                        Return Home
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
