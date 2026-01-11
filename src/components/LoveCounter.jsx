import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const LoveCounter = () => {
    const START_DATE = new Date('2024-01-11T00:00:00'); // Assuming start of the day or just the date
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            const diffMs = now - START_DATE;
            const diffMins = Math.floor(diffMs / (1000 * 60));
            setMinutes(diffMins);
        };

        calculateTime();
        const interval = setInterval(calculateTime, 10000); // Update every 10s

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-white/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm text-rose-900">
            <Clock className="w-3 h-3 text-rose-600" />
            <span className="text-xs font-bold font-mono tracking-tighter">
                {minutes.toLocaleString()} min insieme
            </span>
        </div>
    );
};
