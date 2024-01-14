
import { Game, GameStatus } from "@/application/entities/Game"
import { AbstractSkillManager } from "@/application/entities/skills/Managers/AbstractSkillManager"
import { SkillService } from "@/application/services/SkillService"


export function Skill(props: AbstractSkillManager) {

    const { name, category, spritesheet, speed, damage, interval } = props

    function handleClick() {
        const game = Game.getInstance()
        SkillService.getInstance().upgrade(category, game)
        game.state.status = GameStatus.running
    }

    return (
        <div className="flex items-center md:items-start w-full h-[30%] md:h-full p-4 my-2 border border-white" onClick={handleClick}>
            <div className="flex justify-center items-center mr-6 min-w-20 h-full">
                <img src={spritesheet.src} alt="" className="h-16 w-16 object-cover object-left" />
            </div>
            <div className="flex flex-col mt-2 h-full justify-center">
                <p className="font-bold whitespace-nowrap"> { name } </p>

                <p> Damage: { damage.toFixed(2) } </p>
                <p> Speed: { speed.toFixed(2) } </p>
                <p> Fire rate: { (1000 / interval).toFixed(2) }/s </p>
            </div>
        </div>
    )
}