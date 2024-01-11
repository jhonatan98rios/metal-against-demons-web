import { Game, GameStatus } from "@/application/entities/Game"
import { AbstractSkillkManager } from "@/application/entities/skills/Managers/AbstractSkillManager"
import { SkillService } from "@/application/services/SkillService"


export function Skill(props: AbstractSkillkManager) {

    const { name, category, spritesheet, speed, damage, interval } = props

    function handleClick() {
        const game = Game.getInstance()
        SkillService.getInstance().upgrade(category, game)
        game.state.status = GameStatus.running
    }

    return (
        <div className="flex md:flex-col items-center md:items-start w-full md:max-w-[30%] h-[30%] md:h-full p-4 my-2 md:my-0 md:mx-2 border border-white" onClick={handleClick}>
            <div className="flex justify-center mr-6 md:mr-0 md:w-full">
                <img src={spritesheet.src} alt="" className="h-16 w-16 object-cover object-left" />
            </div>
            <div className="flex-col md:h-full mt-2 md:mt-4">
                <p className="font-bold whitespace-nowrap"> { name } </p>

                <p> Damage: { damage.toFixed(2) } </p>
                <p> Speed: { speed.toFixed(2) } </p>
                <p> Fire rate: { (1000 / interval).toFixed(2) }/s </p>
            </div>
        </div>
    )
}