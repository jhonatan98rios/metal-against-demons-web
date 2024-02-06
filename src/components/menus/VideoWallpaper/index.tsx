import { useAnimation } from "@/store/AnimationContext";
import { Suspense } from "react";

export default function VideoWallpaper() {

    const { animationState } = useAnimation();

    return (
        <div className="video-bg absolute bottom-0 left-0 w-full h-full">
            <Suspense key={animationState.className}>
                <video 
                    autoPlay muted loop id="bg"
                    className={`
                        fixed z-0 bottom-0 -left-[calc(540px-50vw)] lg:left-0 lg:right-0 mx-auto 
                        h-screen max-w-max min-w-full min-h-full lg:h-auto
                        ${animationState.className}
                    `}
                >
                    <source src="./video/background-4k-resized.mp4" type="video/mp4" className="hidden md:block" />
                    <source src="./video/mobile.mp4" type="video/mp4" className="block md:hidden" />
                </video>
            </Suspense>
        </div>
    )
}



/* 
transform: translate3d(480px, -840px, 0px) scale(3);
*/