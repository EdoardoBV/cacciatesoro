import React from 'react';
import { Heart } from 'lucide-react';
import { stages } from '../data/stages';
import { LoveCounter } from './LoveCounter';

export const Header = ({ currentStep }) => {
    const totalSteps = stages.length;
    const progress = Math.min((currentStep / totalSteps) * 100, 100);

    return (
        <header className="mb-8 flex flex-col items-center w-full relative z-20">
            <LoveCounter />

            <div className="flex items-center gap-3 mb-6 bg-white/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/40 shadow-sm mt-8">
                <Heart className="w-6 h-6 fill-rose-500 text-rose-500 animate-pulse" />
                <span className="font-heading font-bold text-lg tracking-wide text-rose-700">2 anni di piccolate</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-4 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full overflow-hidden shadow-inner p-1">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(225,29,72,0.6)] relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
            </div>
            <div className="flex justify-between w-full mt-2 text-xs font-bold text-rose-800/70 font-sans tracking-wide px-1">
                <span>Inizio</span>
                <span>Tappa {currentStep} di {totalSteps}</span>
            </div>
        </header>
    );
};
