import React, { createContext, useContext, ReactNode, useState } from 'react';

interface AnimationContextProps {
    children: ReactNode;
}

interface AnimationState {
    zoom: number
    translateX: number
    translateY: number
}

interface AnimationContextType {
    animationState: AnimationState;
    setAnimationState: React.Dispatch<React.SetStateAction<AnimationState>>;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

const AnimationProvider: React.FC<AnimationContextProps> = ({ children }) => {
    const [animationState, setAnimationState] = useState<AnimationState>(() => {
        return {
            zoom: 1,
            translateX: 0,
            translateY: 0,
        };
    });

    return (
        <AnimationContext.Provider value={{ animationState, setAnimationState }}>
            {children}
        </AnimationContext.Provider>
    );
};

const useAnimation = (): AnimationContextType => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within a AnimationProvider');
    }
    return context;
};

export { AnimationProvider, useAnimation };
