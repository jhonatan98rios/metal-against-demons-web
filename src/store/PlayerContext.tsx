import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface PlayerContextProps {
    children: ReactNode;
}

interface PlayerState {
    level: number;
    money: number;
    life: number;
    speed: number;
    baseAttack: number
}

interface PlayerContextType {
    playerState: PlayerState;
    setPlayerState: React.Dispatch<React.SetStateAction<PlayerState>>;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const PlayerProvider: React.FC<PlayerContextProps> = ({ children }) => {
    const [playerState, setPlayerState] = useState<PlayerState>(() => {
        const storedState = (typeof window !== 'undefined') ? localStorage.getItem('playerState') : undefined
        return storedState ? JSON.parse(storedState) : {
            level: 1,
            money: 0,
            life: 100,
            speed: 1,
            baseAttack: 1,
        };
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('playerState', JSON.stringify(playerState));
        }
    }, [playerState]);

    return (
        <PlayerContext.Provider value={{ playerState, setPlayerState }}>
            {children}
        </PlayerContext.Provider>
    );
};

const usePlayer = (): PlayerContextType => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};

export { PlayerProvider, usePlayer };
