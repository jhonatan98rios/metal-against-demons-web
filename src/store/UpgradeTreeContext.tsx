import { UpgradeTree } from '@/application/entities/UpgradeTree';
import { abilityNodeTree } from '@/database/upgradeTree/mock/AbilityNodeTree';
import { healthNodeTree } from '@/database/upgradeTree/mock/HealthNodeTree';
import { strengthNodeTree } from '@/database/upgradeTree/mock/StrengthNodeTree';
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface UpgradeTreeContextProps {
    children: ReactNode;
}

export interface UpgradeTreeState {
    healthTree: UpgradeTree
    strengthTree: UpgradeTree
    abilityTree: UpgradeTree
}

interface UpgradeTreeContextType {
    upgradeTreeState: UpgradeTreeState;
    setUpgradeTreeState: React.Dispatch<React.SetStateAction<UpgradeTreeState>>;
}

const UpgradeTreeContext = createContext<UpgradeTreeContextType | undefined>(undefined);

const UpgradeTreeProvider: React.FC<UpgradeTreeContextProps> = ({ children }) => {
    const [upgradeTreeState, setUpgradeTreeState] = useState<UpgradeTreeState>(() => {
        const storedState = (typeof window !== 'undefined') ? localStorage.getItem('upgradeTreeState') : undefined

        return storedState ? JSON.parse(storedState) : {
            healthTree: healthNodeTree,
            strengthTree: strengthNodeTree,
            abilityTree: abilityNodeTree
        }
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('upgradeTreeState', JSON.stringify(upgradeTreeState));
        }
    }, [upgradeTreeState]);

    return (
        <UpgradeTreeContext.Provider value={{ upgradeTreeState, setUpgradeTreeState }}>
            {children}
        </UpgradeTreeContext.Provider>
    );
};

const useUpgradeTree = (): UpgradeTreeContextType => {
    const context = useContext(UpgradeTreeContext);
    if (!context) {
        throw new Error('useUpgradeTree must be used within a UpgradeTreeProvider');
    }
    return context;
};

export { UpgradeTreeProvider, useUpgradeTree };
