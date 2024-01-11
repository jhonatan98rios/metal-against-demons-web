import { Modal } from "../../Modal"
import { SoundAttackManager2 } from "@/application/entities/skills/Managers/SoundAttack/SoundAttackManager2"
import { Skill } from "../Skill"

const listSkills = [
    new SoundAttackManager2(),
    new SoundAttackManager2(),
    new SoundAttackManager2(),
]

export function UpgradeModal() {

    return (
        <Modal className="w-4/5 max-w-3xl h-[54%] md:h-64 py-6 md:top-56">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center text-white">
                {
                    listSkills &&
                    listSkills.map((skill, index) => <Skill {...skill as any} key={index} />)
                }
            </div>
        </Modal>
    )
}