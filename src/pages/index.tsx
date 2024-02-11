import Link from "next/link";
import Layout from "../layout";
import { useEffect } from "react";
import { useAnimation } from "@/store/AnimationContext";


export default function Combat() {

    const { setAnimationState } = useAnimation();

    useEffect(() => {
        setAnimationState({ className: 'video-without-zoom' })
    }, [])

    return (
        <>
            <Link
                href="play"
                className={`
                    bg-gradient-to-b from-orange-400 to-red-600
                    fixed bottom-40 left-0 right-0 mx-auto w-60 py-2 flex justify-center 
                    items-center rounded-xl font-extrabold text-white text-2xl
                `}
            > JOGAR </Link>
        </>
    )
}

Combat.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}