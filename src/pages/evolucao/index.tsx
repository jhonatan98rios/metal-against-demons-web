'use client';

import { useEffect } from "react";
import Layout from "@/layout";
import { useAnimation } from "@/store/AnimationContext";
import { UpgradeTreeComponent } from "@/components/menus/UpgradeTree";
import dynamic from "next/dynamic";

export default function Evolution() {

    const { setAnimationState } = useAnimation();

    const CurrentStatus = dynamic(
        () => import('../../components/menus/CurrentStatus'),
        { ssr: false }
    )

    useEffect(() => {
        setAnimationState({ className: 'video-zoom-evolution' })
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between md:p-24 w-screen z-10 relative`}>
            <CurrentStatus  />

            <UpgradeTreeComponent />
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