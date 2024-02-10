import { useAnimation } from "@/store/AnimationContext";

export default function VideoWallpaper() {

    const { animationState } = useAnimation();

    return (
        <div className="video-bg absolute bottom-0 left-0 w-full h-full flex justify-center items-center">
            <video 
                autoPlay muted loop id="bg"
                className={`
                    fixed z-0 mx-auto video-zoom
                    h-screen max-w-max min-w-full min-h-full lg:h-auto
                    ${animationState.className}
                `}
            >
                <source src="./video/mobile.mp4" type="video/mp4" className="hidden md:block" />
                <source  src="./video/background-4k-resized.mp4" className="block md:hidden" />
            </video>
        </div>
    )
}



/* 
transform: translate3d(480px, -840px, 0px) scale(3);
*/