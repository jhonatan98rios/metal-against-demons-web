import { Game } from "../../Game"
import { AbstractSkillManager } from "./AbstractSkillManager"
import { BatAttackManager1 } from "./BatAttack/BatAttackManager1"
import { FireWalkManager1 } from "./FireWalk/FireWalkManager1"
import { ForceFieldManager1 } from "./ForceField/ForceFieldManager1"
import { SoundAttackManager1 } from "./SoundAttack/SoundAttackManager1"

const baseSkillsClasses = [
    FireWalkManager1,
    SoundAttackManager1,
    BatAttackManager1,
    ForceFieldManager1
]

export function selectRandomSkillsNotAcquired(amount: number = 2): AbstractSkillManager[] {

    const alreadyAcquiredSkills = Game.getInstance().skillService.availableSkills

    const notAcquiredSkills = baseSkillsClasses.filter(baseSkill => {
        return !alreadyAcquiredSkills.some((acquiredSkill) => acquiredSkill.category === baseSkill.category);
    })

    const randomNotAcquiredSkills = notAcquiredSkills.slice().sort(() => Math.random() - 0.5)
    const selectedSkills = randomNotAcquiredSkills.slice(0, amount)
    return selectedSkills.map(selectedSkill => new selectedSkill())
}



export function selectRandomSkillsAlreadyAcquired(amount: number = 1): AbstractSkillManager[] {

    const alreadyAcquiredSkills = Game.getInstance().skillService.availableSkills

    const randomAlreadyAcquiredSkills = alreadyAcquiredSkills.slice().sort(() => Math.random() - 0.5)
    const selectedSkills = randomAlreadyAcquiredSkills.slice(0, amount)
    return selectedSkills.map(selectedSkill => selectedSkill.upgrade())
}