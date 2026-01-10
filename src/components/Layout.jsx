import React from 'react';

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-background text-slate-800 font-sans selection:bg-primary selection:text-white overflow-hidden relative">
            {/* Background Effects */}
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-rose-400/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-pink-400/20 rounded-full blur-[100px] animate-bounce" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-rose-300/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen px-4 py-6 max-w-md mx-auto">
                {children}
            </div>
        </div>
    );
};
