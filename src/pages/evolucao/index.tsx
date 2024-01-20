'use client';

import Layout from "@/layout";
import { usePlayer } from "@/store/PlayerContext";

export default function Evolution() {

    const { playerState, setPlayerState } = usePlayer();

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen z-10`}>
            <div>
                <h1>Player Status</h1>
                <p>Level: {playerState.level}</p>
                <p>Money: {playerState.money}</p>
                <p>Life: {playerState.life}</p>
                <p>Attack: {playerState.baseAttack} </p>
                <p>Speed: {playerState.speed}</p>
            </div>
        </main>
    )
}

Evolution.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}