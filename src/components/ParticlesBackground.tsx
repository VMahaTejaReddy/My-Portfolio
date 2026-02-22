"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: false,
            fpsLimit: 60,
            particles: {
                number: { value: 80, density: { enable: true } },
                color: { value: ["#22d3ee", "#3b82f6", "#a855f7"] },
                shape: { type: "circle" },
                opacity: { value: { min: 0.3, max: 0.7 } },
                size: { value: { min: 1, max: 3 } },
                links: {
                    enable: true,
                    distance: 160,
                    color: "#22d3ee",
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none" as const,
                    outModes: { default: "bounce" as const },
                },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    onClick: { enable: true, mode: "push" },
                },
                modes: {
                    grab: { distance: 180, links: { opacity: 0.4 } },
                    push: { quantity: 3 },
                },
            },
            detectRetina: true,
        }),
        []
    );

    if (!init) return null;

    return (
        <Particles
            id="hero-particles"
            className="absolute inset-0 z-0"
            options={options}
        />
    );
}
