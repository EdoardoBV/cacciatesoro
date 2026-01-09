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
          <div className="absolute bottom-4 left-0 right-0 mx-auto w-max max-w-[90%] bg-rose-500/90 text-white px-4 py-3 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2 animate-bounce cursor-pointer" onClick={() => setError(null)}>
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}
      </main>

      <footer className="w-full text-center py-6 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={resetProgress}
          className="text-xs text-slate-500 font-mono underline hover:text-rose-500 transition-colors"
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
