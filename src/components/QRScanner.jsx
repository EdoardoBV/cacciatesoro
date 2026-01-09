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
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/80 hover:text-rose-500 transition-colors z-50 p-2"
                aria-label="Chiudi scanner"
            >
                <X size={32} />
            </button>

            <div className="w-full max-w-sm aspect-square relative overflow-hidden rounded-3xl border border-white/20 shadow-2xl shadow-rose-500/20 bg-black">
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
                    <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-rose-500 rounded-tl-xl" />
                    <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-rose-500 rounded-tr-xl" />
                    <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-rose-500 rounded-bl-xl" />
                    <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-rose-500 rounded-br-xl" />

                    {/* Scanning Line Animation */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-rose-500/0 to-rose-500/20 animate-scan border-b border-rose-500/50" />
                </div>
            </div>

            <p className="mt-8 text-white/90 text-center font-serif text-lg tracking-wider">
                Inquadra il codice QR
            </p>
            <p className="mt-2 text-white/50 text-xs text-center font-sans">
                Il codice si trova nel luogo dell'indizio
            </p>
        </motion.div>
    );
};
