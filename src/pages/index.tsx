import Link from "next/link";
import { CSSProperties } from "react";


export default function Home() {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 main-bg w-screen`}>
      <Link href="/play" className="border-red-500 text-center border-8 py-2 px-8 text-6xl mt-[30%] text-red-500 font-black rotate-12">
        JOGAR
      </Link>
    </main>
  )
}
