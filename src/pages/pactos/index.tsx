'use client';

import Layout from "@/layout";
import { usePlayer } from "@/store/PlayerContext";
import { useAnimation } from "@/store/AnimationContext";
import { useEffect } from "react";

export default function Pacts() {

    const { setAnimationState } = useAnimation();

    useEffect(() => {
        setAnimationState({
            zoom: 2.2,
            translateX: -280,
            translateY: -450,
        })
        /* setAnimationState({
            zoom: 3,
            translateX: 480,
            translateY: -840,
        }) */
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen`}>
            <div>
                
            </div>
        </main>
    )
}

Pacts.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}