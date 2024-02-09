import { usePlayer } from "@/store/PlayerContext";

export default function CurrentStatus() {

    const { playerState } = usePlayer();
    const { money, maxHealth, baseAttack } = playerState

    return (
        <div className="w-[400px] border-4 border-gray-300 bg-black absolute top-32 lg:top-32 lg:left-12 rounded-xl text-white text-xl font-bold p-6 z-20">

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Almas condenadas:</p>
                <p className="text-[#D26968]">{money} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Saúde maxima:</p>
                <p className="text-[#D26968]">{maxHealth} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Ataque base:</p>
                <p className="text-[#D26968]">{baseAttack} </p>
            </div>
        </div>
    )
}