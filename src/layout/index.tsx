import Header from "@/components/menus/Header";
import Navbar from "@/components/menus/Navbar";
import VideoWallpaper from "@/components/menus/VideoWallpaper";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 w-screen`}>
            <VideoWallpaper />
            <Header />

            { children }

            <Navbar />
        </main>
    )
}