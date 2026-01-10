import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export const QRScanner = ({ onScan, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4"
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full p-3 hover:bg-rose-500 hover:border-rose-500 transition-all z-50 shadow-lg"
                aria-label="Chiudi scanner"
            >
                <X size={24} />
            </button>

            <div className="w-full max-w-sm aspect-square relative overflow-hidden rounded-[2rem] border-4 border-white/20 shadow-2xl shadow-rose-900/50 bg-black">
                <Scanner
                    onScan={(result) => {
                        if (result && result.length > 0) {
                            onScan(result[0].rawValue);
                        }
                    }}
                    components={{
                        audio: false,
                        finder: false
                    }}
                    styles={{
                        container: { width: '100%', height: '100%' },
                        video: { width: '100%', height: '100%', objectFit: 'cover' }
                    }}
                />

                {/* Custom Overlay / Viewfinder */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Corners */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-t-[6px] border-l-[6px] border-rose-500 rounded-tl-3xl shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
                    <div className="absolute top-8 right-8 w-16 h-16 border-t-[6px] border-r-[6px] border-rose-500 rounded-tr-3xl shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
                    <div className="absolute bottom-8 left-8 w-16 h-16 border-b-[6px] border-l-[6px] border-rose-500 rounded-bl-3xl shadow-[0_0_20px_rgba(244,63,94,0.5)]" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-b-[6px] border-r-[6px] border-rose-500 rounded-br-3xl shadow-[0_0_20px_rgba(244,63,94,0.5)]" />

                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-500/0 via-rose-500/10 to-rose-500/30 animate-scan border-b-2 border-rose-500/80 shadow-[0_4px_20px_rgba(244,63,94,0.5)]" />
                </div>
            </div>

            <p className="mt-10 text-white font-heading font-bold text-2xl tracking-wide drop-shadow-lg">
                Inquadra il codice QR
            </p>
            <p className="mt-3 text-white/70 text-sm text-center font-sans max-w-[80%] leading-relaxed">
                Il codice si trova nel luogo dell'indizio.<br />Avvicinati per scansionare.
            </p>
        </motion.div>
    );
};
