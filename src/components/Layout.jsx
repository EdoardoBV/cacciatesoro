import React from 'react';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-slate-800 font-sans selection:bg-primary selection:text-white overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen px-4 py-6 max-w-md mx-auto">
                {children}
            </div>
        </div>
    );
};
