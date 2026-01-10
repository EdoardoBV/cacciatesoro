import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, MapPin, Camera } from 'lucide-react';
import { QRScanner } from './QRScanner';

export const ClueCard = ({ stage, onUnlock }) => {
    const [showScanner, setShowScanner] = useState(false);

    if (!stage) return null;

    return (
        <>
            <motion.div
                key={stage.id} // Re-animate on stage change
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full"
            >
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl" />

                <div className="relative p-8 flex flex-col items-center text-center z-10">


                    <h2 className="text-4xl font-heading font-bold text-rose-600 mb-6 drop-shadow-sm">
                        Tappa {stage.id}
                    </h2>

                    {/* Clue Text with preserving newlines */}
                    <p className="text-slate-800 text-xl leading-relaxed font-sans font-medium mb-8 whitespace-pre-line">
                        {stage.clue}
                    </p>

                    {stage.id < 13 && (
                        <button
                            onClick={() => setShowScanner(true)}
                            className="mb-8 flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-heading font-semibold tracking-wide shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 transition-all active:scale-95 group"
                        >
                            <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            <span>Scansiona Codice</span>
                        </button>
                    )}

                    <div className="flex items-center gap-2 text-xs font-bold text-rose-500/80 font-mono border border-rose-200/50 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm">
                        <Lock className="w-3 h-3" />
                        <span>IN ATTESA DI SBLOCCO</span>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showScanner && (
                    <QRScanner
                        onScan={(code) => {
                            const success = onUnlock(code);
                            if (success) {
                                setShowScanner(false);
                            }
                        }}
                        onClose={() => setShowScanner(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
