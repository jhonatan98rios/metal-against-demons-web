import { UpgradeNode, UpgradeTree } from "@/application/entities/UpgradeTree";


export const strengthNodeTree = new UpgradeTree([

    new UpgradeNode({
        id: 0,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 10,
        isLocked: false,
        isAcquired: false,
    }),
    
    new UpgradeNode({
        id: 1,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),


    new UpgradeNode({
        id: 2,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 30,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 3,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),


    new UpgradeNode({
        id: 4,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 5,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),


    new UpgradeNode({
        id: 6,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),

    new UpgradeNode({
        id: 7,
        category: 'strengthTree',
        name: 'Attack +10%',
        cost: 20,
        isLocked: true,
        isAcquired: false,
    }),   
])