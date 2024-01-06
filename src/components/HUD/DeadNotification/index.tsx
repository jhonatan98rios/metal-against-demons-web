import { Modal } from "../Modal";

export function DeadNotification() {

    return (
        <Modal>
            <div className="w-full h-full flex flex-col justify-center items-center text-white border border-white">

                <p className="my-2 text-2xl"> Tu morreu! </p>

                <button className="border border-white py-1 px-4 my-2" onClick={() => { location.reload() }}>
                    Tentar novamente
                </button>

                <button className="border border-white py-1 px-4 my-2" onClick={() => { location.href = "/" }}>
                    Voltar ao inicio
                </button>

            </div>    
        </Modal>
    )
}