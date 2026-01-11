import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const PARTICLE_COUNT = 50;

export const CelebrationBackground = () => {
    const particles = useMemo(() => {
        return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
            id: i,
            type: Math.random() > 0.6 ? 'star' : 'heart', // More hearts than stars
            left: Math.random() * 100, // %
            scale: 0.5 + Math.random() * 1, // 0.5x to 1.5x
            duration: 3 + Math.random() * 4, // 3s to 7s
            delay: Math.random() * 2, // 0s to 2s
            color: Math.random() > 0.5 ? '#e11d48' : '#fbbf24' // Rose (Hearts) or Amber (Stars)
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ y: '110vh', x: 0, opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 1, 1, 0],
                        x: Math.sin(p.id) * 20 // Slight wave
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: `${p.left}%`,
                    }}
                >
                    {p.type === 'heart' ? (
                        <Heart
                            fill={p.color === '#fbbf24' ? '#e11d48' : p.color}
                            color={p.color === '#fbbf24' ? '#e11d48' : p.color}
                            style={{ width: `${p.scale * 24}px`, height: `${p.scale * 24}px` }}
                        />
                    ) : (
                        <Star
                            fill="#fbbf24"
                            color="#fbbf24"
                            style={{ width: `${p.scale * 24}px`, height: `${p.scale * 24}px` }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};
