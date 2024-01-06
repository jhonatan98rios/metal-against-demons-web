import dynamic from "next/dynamic";

const GamePlay = dynamic(
    () => import("@/components/gameplay"),
    { ssr: false }
)

export default function Play() {

    return (
        <GamePlay />
    )
}
