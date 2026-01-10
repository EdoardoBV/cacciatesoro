import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = ({ src, shouldPlay }) => {
    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set default volume to 50%
        }
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        // If src changes, load the new track
        if (src) {
            const currentSrc = audio.src.replace(window.location.origin, '');
            // Check if src actually changed to avoid reloading same track
            if (!currentSrc.endsWith(src)) {
                audio.src = src;
                audio.load();
            }
        }

        if (shouldPlay && !isMuted) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => setIsPlaying(true))
                    .catch(error => {
                        console.log("Audio play failed (user interaction needed):", error);
                        setIsPlaying(false);
                    });
            }
        } else {
            audio.pause();
            setIsPlaying(false);
        }

    }, [src, shouldPlay, isMuted]);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    if (!src) return null;

    return (
        <div className="fixed top-4 right-4 z-50">
            <audio ref={audioRef} loop />
            <button
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-all shadow-lg active:scale-95 group"
                aria-label={isMuted ? "Attiva audio" : "Disattiva audio"}
            >
                {isMuted ? (
                    <VolumeX className="w-6 h-6 group-hover:text-rose-200 transition-colors" />
                ) : (
                    <Volume2 className="w-6 h-6 group-hover:text-rose-200 transition-colors" />
                )}
            </button>
        </div>
    );
};
