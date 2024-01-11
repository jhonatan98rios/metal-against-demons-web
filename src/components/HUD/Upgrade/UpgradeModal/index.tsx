import { Modal } from "../../Modal"
import { Skill } from "../Skill"
import { Game } from "@/application/entities/Game"

export function UpgradeModal() {
    
    const skillsUpgrade = Game.getInstance().skillService.availableSkills.map(skill => skill.update())
    const listSkills = [...skillsUpgrade]

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