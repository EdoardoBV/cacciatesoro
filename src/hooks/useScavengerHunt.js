import { useState, useEffect } from 'react';
import { stages } from '../data/stages';

export const useScavengerHunt = () => {
    // Load initial progress from localStorage or default to 1
    const [currentStep, setCurrentStep] = useState(() => {
        const saved = localStorage.getItem('scavengerHuntStep');
        return saved ? parseInt(saved, 10) : 1;
    });

    const [unlockedMedia, setUnlockedMedia] = useState(null);
    const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
    const [error, setError] = useState(null);

    // Persistence
    useEffect(() => {
        localStorage.setItem('scavengerHuntStep', currentStep.toString());
    }, [currentStep]);

    const validateCode = (code) => {
        if (!code) return false;

        // Find all stages matching the code (needed because we reuse the first code for the last stage)
        const matchingStages = stages.filter(s => s.unlockCode === code);

        // Prioritize finding the NEXT step
        const nextStage = matchingStages.find(s => s.id === currentStep + 1);

        // If not next step, maybe it's an old one?
        const oldStage = matchingStages.find(s => s.id <= currentStep);

        const targetStage = nextStage || oldStage; // Prefer next stage

        if (targetStage) {
            if (targetStage.id === currentStep + 1) {
                handleUnlock(targetStage.id);
                return true;
            } else if (targetStage.id <= currentStep) {
                console.log("Stage already unlocked");
                return true;
            } else {
                setError("Devi ancora completare la tappa precedente!");
                return false;
            }
        } else {
            setError("Codice non valido.");
            return false;
        }
    };

    // URL Sync and Unlock Logic
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const unlockCode = params.get('unlock');

        if (unlockCode) {
            validateCode(unlockCode);
            // Clean URL
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, [currentStep]);

    const handleUnlock = (newStepId) => {
        setShowUnlockAnimation(true);
        const completedStageId = newStepId - 1;
        const completedStage = stages.find(s => s.id === completedStageId);

        if (completedStage) {
            setUnlockedMedia(completedStage);
        }
        setCurrentStep(newStepId);
    };

    const closeMediaViewer = () => {
        setUnlockedMedia(null);
        setShowUnlockAnimation(false);
    };

    const resetProgress = () => {
        if (confirm("Sei sicuro di voler ricominciare da capo?")) {
            setCurrentStep(1);
            setUnlockedMedia(null);
            localStorage.setItem('scavengerHuntStep', '1');
            setError(null);
        }
    };

    return {
        currentStep,
        currentStageData: stages.find(s => s.id === currentStep),
        unlockedMedia, // If non-null, show the celebration/media overlay
        showUnlockAnimation,
        closeMediaViewer,
        error,
        setError,
        validateCode,
        resetProgress
    };
};
