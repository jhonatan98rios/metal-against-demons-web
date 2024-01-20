

export function CurrentStatus({ status }) {

    const { level, money, life, baseAttack, speed } = status

    return (
        <div className="w-[400px] border-4 border-gray-300 bg-black absolute top-32 left-12 rounded-xl text-white text-xl font-bold p-6">
            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Level:</p>
                <p className="text-[#D26968]">{level} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Money:</p>
                <p className="text-[#D26968]">{money} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Life:</p>
                <p className="text-[#D26968]">{life} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Attack:</p>
                <p className="text-[#D26968]">{baseAttack} </p>
            </div>

            <div className="flex justify-between">
                <p className="text-[#69A8C6]">Speed:</p>
                <p className="text-[#D26968]">{speed} </p>
            </div>
        </div>
    )
}