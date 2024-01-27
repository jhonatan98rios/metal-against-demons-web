import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const healthNodeTree = new UpgradeTree([

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: false,
        isAcquired: true,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: false,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),

    new UpgradeNode({
        name: 'HP +10%',
        cost: 10,
        isLocked: true,
        isAcquired: false,
        effect: (setPlayerState) => {
            setPlayerState(prev => ({
                ...prev,
                life: Math.floor(prev.life * 1.1)
            }))
        }
    }),
])