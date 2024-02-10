import { AbstractSkillManager } from "@/application/entities/skills/Managers/AbstractSkillManager"
import { EventManager } from "@/application/event/EventManager"


interface SkillProps {
    skillManager: AbstractSkillManager
}

export function Skill(props: SkillProps) {
    const { name, spritesheet, speed, damage, interval } = props.skillManager

    function handleClick() {
        const eventManager = EventManager.getInstance()
        eventManager.emit("skill:upgrade", props.skillManager)
    }

    return (
        <div className="flex items-center w-full h-[30%] md:h-full p-4 my-2 border border-white" onClick={handleClick}>
            <div className="flex justify-center items-center mr-6 min-w-20 h-full">
                <img src={spritesheet.src} alt="" className="h-16 w-16 object-cover object-left" />
            </div>
            <div className="flex flex-col mt-2 h-full justify-center">
                <p className="font-bold whitespace-nowrap"> { name } </p>

                <p> Dano: { damage.toFixed(2) } </p>
                <p> Velocidade: { speed.toFixed(2) } </p>
                <p> Frequencia: { (1000 / interval).toFixed(2) }/s </p>
            </div>
        </div>
    )
}