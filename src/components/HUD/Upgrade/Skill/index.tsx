import { Game, GameStatus } from "@/application/entities/Game"
import { AbstractSkillkManager } from "@/application/entities/skills/Managers/AbstractSkillManager"
import { SkillService } from "@/application/services/SkillService"


export function Skill(props: AbstractSkillkManager) {

    const { name, spritesheet, speed, damage, interval } = props

    function handleClick() {
        const game = Game.getInstance()
        SkillService.getInstance().upgrade(name, game)
        game.state.status = GameStatus.running
    }

    return (
        <div className="flex md:flex-col items-center md:items-start w-full h-full p-4 my-2 md:my-0 md:mx-2 border border-white" onClick={handleClick}>
            <div className="flex justify-center mr-6 md:mr-0">
                <img src={spritesheet.src} alt="" className="h-16 w-16 object-cover object-left" />
            </div>
            <div className="flex-col md:h-full mt-2 md:mt-4">
                <p className="font-bold"> { name } </p>

                <p> Damage: { damage } </p>
                <p> Speed: { speed } </p>
                <p> Fire rate: { (1000 / interval).toFixed(2) }/s </p>
            </div>
        </div>
    )
}