import { BatAttackManager1 } from "./BatAttack/BatAttackManager1"
import { FireWalkManager1 } from "./FireWalk/FireWalkManager1"
import { ForceFieldManager1 } from "./ForceField/ForceFieldManager1"
import { SoundAttackManager1 } from "./SoundAttack/SoundAttackManager1"

type BaseSkills = (FireWalkManager1 | SoundAttackManager1 | ForceFieldManager1 | BatAttackManager1)[]

const baseSkillsClasses = [
    FireWalkManager1,
    SoundAttackManager1,
    BatAttackManager1,
    ForceFieldManager1
]

export function selectRandomSkills(amount: number = 3): BaseSkills {
    const shuffledArray = baseSkillsClasses.slice().sort(() => Math.random() - 0.5) // Shuffle
    const selectedSkills = shuffledArray.slice(0, amount) //  Take the 3 firsts
    return selectedSkills.map(selectedSkill => new selectedSkill())
}