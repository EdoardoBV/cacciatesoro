import React, { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';

export const LoveCounter = () => {
    const START_DATE = new Date('2024-01-11T00:00:00');
    const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const diff = now - START_DATE;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTime({ days, hours, minutes, seconds });
        };

        calculateTime();
        const interval = setInterval(calculateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-2 left-2 z-50 flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/50 shadow-lg shadow-rose-500/10">
                <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse" />
                <div className="flex gap-2 text-xs font-bold font-mono tracking-tight text-rose-900 leading-none pt-0.5">
                    <div className="flex flex-col items-center">
                        <span>{time.days}</span>
                        <span className="text-[0.5rem] opacity-60 font-sans">GIORNI</span>
                    </div>
                    <span className="opacity-40 -mt-0.5">:</span>
                    <div className="flex flex-col items-center">
                        <span>{time.hours.toString().padStart(2, '0')}</span>
                        <span className="text-[0.5rem] opacity-60 font-sans">ORE</span>
                    </div>
                    <span className="opacity-40 -mt-0.5">:</span>
                    <div className="flex flex-col items-center">
                        <span>{time.minutes.toString().padStart(2, '0')}</span>
                        <span className="text-[0.5rem] opacity-60 font-sans">MIN</span>
                    </div>
                    <span className="opacity-40 -mt-0.5">:</span>
                    <div className="flex flex-col items-center w-4">
                        <span>{time.seconds.toString().padStart(2, '0')}</span>
                        <span className="text-[0.5rem] opacity-60 font-sans">SEC</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
