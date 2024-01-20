'use client';

import { CurrentStatus } from "@/components/menus/CurrentStatus";
import { UpgradeTree } from "@/components/menus/UpgradeTree";
import Layout from "@/layout";
import { useAnimation } from "@/store/AnimationContext";
import { usePlayer } from "@/store/PlayerContext";
import { useEffect } from "react";

export default function Evolution() {

    const { playerState } = usePlayer();
    const { setAnimationState } = useAnimation();

    useEffect(() => {
        /* setAnimationState({
            zoom: 3,
            translateX: 1440,
            translateY: -840,
        }) */
        setAnimationState({
            zoom: 3,
            translateX: 480,
            translateY: -840,
        })
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