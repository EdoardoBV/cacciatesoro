import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Map } from 'lucide-react';

export const LandingPage = ({ onStart }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center relative z-10 p-6">

            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-8 relative"
            >
                <div className="w-32 h-32 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/50 shadow-[0_0_40px_rgba(244,63,94,0.3)]">
                    <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
                </div>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 bg-gradient-to-tr from-yellow-400 to-orange-500 p-3 rounded-full shadow-lg border-2 border-white"
                >
                    <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-heading font-extrabold text-white mb-2 drop-shadow-lg tracking-tight"
            >
                Caccia al <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 drop-shadow-none">
                    Tesoro
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg font-sans font-medium text-rose-900/60 mb-12 tracking-wide"
            >
                2 Anni di Piccolate ❤️
            </motion.p>

            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onStart}
                className="group relative w-full max-w-xs bg-gradient-to-r from-rose-500 to-pink-600 text-white font-heading font-bold text-xl py-5 rounded-2xl shadow-xl shadow-rose-500/30 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
                <span className="relative flex items-center justify-center gap-3">
                    Inizia l'Avventura
                    <Map className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </span>
            </motion.button>

        </div>
    );
};
