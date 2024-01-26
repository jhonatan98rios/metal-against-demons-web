import { useAnimation } from "@/store/AnimationContext";
import { usePlayer } from "@/store/PlayerContext";

export default function VideoWallpaper() {

    const { animationState, setAnimationState } = useAnimation();
    const { className } = animationState

    return (
        <div className="video-bg absolute bottom-0 left-0 w-full h-full">
            <video 
                autoPlay muted loop id="bg"
                className={`
                    fixed z-0 bottom-0 -left-[calc(540px-50vw)] lg:left-0 lg:right-0 mx-auto 
                    h-screen max-w-max min-w-full min-h-full lg:h-auto
                    ${className}
                `}
            >
                <source src="./video/background-4k.mp4" type="video/mp4" />
            </video>
        </div>
    )
}



/* 
transform: translate3d(480px, -840px, 0px) scale(3);
*/