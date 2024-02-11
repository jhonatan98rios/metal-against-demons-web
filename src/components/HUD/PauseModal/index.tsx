import { Game } from "@/application/entities/Game";
import { Modal } from "../Modal";
import { GameStatus } from "@/application/entities/GameState";

export function PauseModal() {

    function handlePlay() {
        Game.getInstance().state.status = GameStatus.running
    }

    return (
        <Modal>
            <div className="w-full h-full flex flex-col justify-center items-center text-white border border-white">
                <p className="mb-4 text-4xl font-bold"> Paused </p>

                <button className="border border-white py-1 px-4 my-1 w-48" onClick={handlePlay}>
                    Continuar
                </button>

                <button className="border border-white py-1 px-4 my-1 w-48" onClick={() => { location.href = "/" }}>
                    Voltar ao inicio
                </button>
            </div>    
        </Modal>
    )
}