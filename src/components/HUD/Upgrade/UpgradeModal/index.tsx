import { SkillService } from "@/application/services/SkillService"
import { Modal } from "../../Modal"
import { Skill } from "../Skill"


export function UpgradeModal() {

    const upgradeOptions = SkillService.getInstance().getUpgradeOptions()

    return (
        <Modal className="w-4/5 max-w-4xl min-h-[54%] h-fit py-6 ">
            <div className="w-full h-full flex flex-col justify-center items-center text-white">
                {
                    upgradeOptions &&
                    upgradeOptions.map((skill, index) => <Skill skillManager={skill} key={index} />)
                }
            </div>
        </Modal>
    )
}