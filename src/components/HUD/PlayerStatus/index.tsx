import { AnimatedBar } from "../AnimatedBar"

export interface IPlayerStatus {
    level: number,
    maxHealth: number,
    currentHealth: number,
    nextLevelXp: number,
    currentXP: number
} 

export function PlayerStatusComponent ({ level, currentHealth, maxHealth, currentXP, nextLevelXp }: IPlayerStatus) {
    return (
        <div className="px-5 py-2">

            <p className="text-white text-xl">
                Level: { level }
            </p>

            <AnimatedBar 
                left={20}
                top={40}
                curentValue={currentHealth}
                maxValue={maxHealth}
                height={20}
                width={200}
                minColor="#FF5555"
                maxColor="#55FF55"
            />

            <AnimatedBar 
                left={20}
                top={70}
                curentValue={currentXP}
                maxValue={nextLevelXp}
                height={20}
                width={200}
                minColor="#5555FF"
                maxColor="#AAAAFF"
            />
        </div>
    )
}