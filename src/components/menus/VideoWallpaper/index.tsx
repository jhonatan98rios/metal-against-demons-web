export default function VideoWallpaper() {

    return (
        <div className="video-bg absolute bottom-0 left-0 w-full h-full">
            <video autoPlay muted loop id="bg" className="fixed z-0 bottom-0 -left-[calc(540px-50vw)] lg:left-0 lg:right-0 mx-auto h-screen max-w-max min-w-full min-h-full lg:h-auto">
                <source src="./video/background.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

