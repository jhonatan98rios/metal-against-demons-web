import { Player } from "@/application/entities/Player";
import { Modal } from "../Modal";
import { useEffect } from "react";
import { usePlayer } from "@/store/PlayerContext";

export function DeadNotification() {

    const { setPlayerState } = usePlayer();

    useEffect(() => {
        setPlayerState((prevState) => ({ ...prevState, money: prevState.money += (Player.getInstance().status.totalXP / 10) }));
    }, [])

    return (
        <Modal>
            <div className="w-full h-full flex flex-col justify-center items-center text-white border border-white">

                <p className="my-2 text-4xl font-bold"> Tu morreu! </p>

                <div className="mb-6">
                    Almas condenadas obtidas: { (Player.getInstance().status.totalXP / 10) }
                </div>

                <button className="border border-white py-1 px-4 my-1 w-48" onClick={() => { location.reload() }}>
                    Tentar novamente
                </button>

                <button className="border border-white py-1 px-4 my-1 w-48" onClick={() => { location.href = "/" }}>
                    Voltar ao inicio
                </button>

            </div>    
        </Modal>
    )
}