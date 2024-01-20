import Link from "next/link";
import { CSSProperties } from "react";


export default function VideoWallpaper() {

  return (
    <div className="video-bg absolute bottom-0 left-0 w-full h-full">
    <video autoPlay muted loop id="bg" className="fixed z-0 bottom-0 left-0 min-w-full min-h-full">
        <source src="./video/background.mp4" type="video/mp4" />
    </video>
    </div>
  )
}
