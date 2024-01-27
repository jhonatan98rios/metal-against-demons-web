'use client';

import { useEffect } from "react";
import Layout from "@/layout";
import { usePlayer } from "@/store/PlayerContext";
import { useAnimation } from "@/store/AnimationContext";
import { UpgradeTree } from "@/components/menus/UpgradeTree";
import { CurrentStatus } from "@/components/menus/CurrentStatus";

export default function Evolution() {

    const { playerState } = usePlayer();
    const { setAnimationState } = useAnimation();

    useEffect(() => {
        setAnimationState({ className: 'video-zoom-evolution' })
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen z-10 relative`}>
            <CurrentStatus status={playerState}  />

            <UpgradeTree />
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