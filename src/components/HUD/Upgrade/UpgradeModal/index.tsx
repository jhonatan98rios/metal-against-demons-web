import { Modal } from "../../Modal"
import { Skill } from "../Skill"
import { Game } from "@/application/entities/Game"

export function UpgradeModal() {

    const skillsUpgrade = Game.getInstance().skillService.availableSkills.map(skill => skill.upgrade())
    const listSkills = [...skillsUpgrade]

    return (
        <Modal className="w-4/5 max-w-4xl min-h-[54%] h-fit py-6 ">
            <div className="w-full h-full flex flex-col justify-center items-center text-white">
                {
                    listSkills &&
                    listSkills.map((skill, index) => <Skill {...skill as any} key={index} />)
                }
            </div>
        </Modal>
    )
}