import React from 'react';
import { Heart } from 'lucide-react';
import { stages } from '../data/stages';

export const Header = ({ currentStep }) => {
    const totalSteps = stages.length;
    const progress = Math.min((currentStep / totalSteps) * 100, 100);

    return (
        <header className="mb-8 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 text-primary">
                <Heart className="w-6 h-6 fill-current" />
                <span className="font-serif text-xl tracking-wider">2 anni di piccolate</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/50 border border-white/60 rounded-full overflow-hidden shadow-inner">
                <div
                    className="h-full bg-gradient-to-r from-secondary to-primary transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(190,18,60,0.4)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex justify-between w-full mt-2 text-xs text-primary/60 font-serif font-medium">
                <span>Inizio</span>
                <span>Tappa {currentStep} di {totalSteps}</span>
            </div>
        </header>
    );
};
