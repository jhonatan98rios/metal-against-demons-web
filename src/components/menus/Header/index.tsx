import VideoWallpaper from "@/components/menus/VideoWallpaper";
import Link from "next/link";
import { CSSProperties } from "react";


export default function Header() {

  return (
    <header className="w-screen h-60 bg-header-menu-background bg-no-repeat bg-cover bg-center z-10 fixed top-0 flex justify-center items-start">
        <img src="./img/menu/logo.png" alt="" />
    </header>
  )
}
