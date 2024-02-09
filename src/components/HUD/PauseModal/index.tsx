import { Game, GameStatus } from "@/application/entities/Game";
import { Modal } from "../Modal";

export function PauseModal() {

    function handlePlay() {
        Game.getInstance().state.status = GameStatus.running
    }

    return (
        <Modal>
            <div className="w-full h-full flex flex-col justify-center items-center text-white border border-white">
                <p className="my-2 text-4xl font-bold"> Paused </p>

                <button className="border border-white py-1 px-4 my-2" onClick={handlePlay}>
                    Continuar
                </button>

                <button className="border border-white py-1 px-4 my-2" onClick={() => { location.href = "/combate" }}>
                    Voltar ao inicio
                </button>
            </div>    
        </Modal>
    )
}