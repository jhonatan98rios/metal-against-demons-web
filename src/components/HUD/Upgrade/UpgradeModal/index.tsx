import { SkillService } from "@/application/services/SkillService"
import { Modal } from "../../Modal"
import { Skill } from "../Skill"


export function UpgradeModal() {

    const upgradeOptions = SkillService.getInstance().getUpgradeOptions()

    return (
        <Modal className="w-full md:w-4/5 max-w-4xl h-fit p-4 md:p-6">
            <div className="w-full h-full flex flex-col justify-center items-center text-white">
                {
                    upgradeOptions &&
                    upgradeOptions.map((skill, index) => <Skill skillManager={skill} key={index} />)
                }
            </div>
        </Modal>
    )
}