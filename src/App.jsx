import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { ClueCard } from './components/ClueCard';
import { UnlockOverlay } from './components/UnlockOverlay';
import { useScavengerHunt } from './hooks/useScavengerHunt';
import { AlertCircle } from 'lucide-react';

function App() {
  const {
    currentStep,
    currentStageData,
    unlockedMedia,
    closeMediaViewer,
    error,
    setError,
    validateCode,
    resetProgress
  } = useScavengerHunt();

  return (
    <Layout>
      <Header currentStep={currentStep} />

      <main className="flex-1 flex flex-col items-center justify-center relative">
        <ClueCard stage={currentStageData} onUnlock={validateCode} />

        {/* Error Toast */}
        {error && (
          <div className="absolute bottom-6 left-0 right-0 mx-auto w-max max-w-[90%] bg-rose-500/80 text-white px-6 py-4 rounded-2xl backdrop-blur-xl border border-rose-400/50 shadow-xl flex items-center gap-3 animate-bounce cursor-pointer z-50 hover:bg-rose-600/90 transition-colors" onClick={() => setError(null)}>
            <AlertCircle className="w-6 h-6" />
            <span className="text-sm font-bold font-heading tracking-wide">{error}</span>
          </div>
        )}
      </main>

      <footer className="w-full text-center py-6">
        <button
          onClick={resetProgress}
          className="text-xs font-bold text-rose-800/40 hover:text-rose-600 transition-colors uppercase tracking-widest hover:scale-105 transform duration-300"
        >
          Ricomincia da capo
        </button>
      </footer>



      <UnlockOverlay
        stage={unlockedMedia}
        onClose={closeMediaViewer}
      />
    </Layout>
  );
}

export default App;
