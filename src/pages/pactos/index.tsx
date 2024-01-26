import { PactComponent } from "@/components/menus/PactComponent";
import { pactList } from "@/database/pacts/mock";
import Layout from "@/layout";
import { useAnimation } from "@/store/AnimationContext";
import { useEffect } from "react";

export default function Pacts() {

    const { setAnimationState } = useAnimation();

    useEffect(() => {
        setAnimationState({ className: 'video-zoom-pacts' })
    }, [])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen`}>
            <div className="flex-col z-0 h-[640px] max-h-[78vh] md:h-[870px] sm:max-h-full overflow-scroll pb-32 pt-8 absolute bottom-8 md:left-32">
                {
                    pactList.map((pact) => {
                        return (
                            <PactComponent
                                title={pact.title}
                                subtitle={pact.subtitle}
                                done={pact.done}
                            />
                        )
                    })
                }
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