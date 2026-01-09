import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

export const UnlockOverlay = ({ stage, onClose }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (stage) {
            // Trigger Confetti
            const duration = 3000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#be123c', '#fda4af', '#ffffff']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#be123c', '#fda4af', '#ffffff']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();

            // Delay showing content slightly for dramatic effect
            setTimeout(() => setShowContent(true), 500);
        }
    }, [stage]);

    return (
        <AnimatePresence>
            {stage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-white/90 backdrop-blur-xl overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-full max-w-sm relative my-auto"
                    >
                        {/* Success Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-orange-400 mb-4 shadow-lg shadow-primary/30"
                            >
                                <Sparkles className="w-8 h-8 text-white" />
                            </motion.div>
                            <motion.h2
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-3xl font-serif text-primary mb-2"
                            >
                                Tappa Completata!
                            </motion.h2>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-slate-600 font-medium"
                            >
                                {stage.message}
                            </motion.p>
                        </div>

                        {/* Media Carousel */}
                        {stage.media && stage.media.length > 0 && (
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="aspect-[4/5] w-full mb-8"
                            >
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards, Pagination]}
                                    pagination={{ clickable: true }}
                                    className="w-full h-full rounded-2xl shadow-2xl shadow-rose-900/10"
                                >
                                    {stage.media.map((url, idx) => (
                                        <SwiperSlide key={idx} className="bg-white rounded-2xl overflow-hidden border-4 border-white shadow-sm">
                                            <img
                                                src={url}
                                                alt={`Memory ${idx + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        )}

                        {/* Continue Button */}
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            onClick={onClose}
                            className="w-full py-4 bg-gradient-to-r from-primary to-rose-600 rounded-xl text-white font-bold tracking-wide shadow-lg shadow-rose-500/20 active:scale-95 transition-transform"
                        >
                            PROSEGUI IL VIAGGIO
                        </motion.button>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
