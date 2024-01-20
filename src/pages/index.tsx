import Header from "@/components/menus/Header";
import VideoWallpaper from "@/components/menus/VideoWallpaper";
import Link from "next/link";
import { CSSProperties } from "react";


export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen`}>
      <VideoWallpaper />
      <Header />

      <Link 
        href="play" 
        className={`
          bg-gradient-to-b from-orange-400 to-red-600 fixed bottom-20 left-0 right-0 mx-auto
          w-60 py-2 flex justify-center items-center rounded-xl font-extrabold text-white text-2xl
        `}
      > JOGAR </Link>
    </main>
  )
}
