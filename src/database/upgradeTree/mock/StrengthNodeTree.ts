import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const strengthNodeTree = new UpgradeTree([
    
    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: false,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),


    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),

    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),


    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),

    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),


    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),

    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),


    new UpgradeNode({
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                baseAttack: prev.baseAttack * 1.1
            }))
        }
    }),

    
])