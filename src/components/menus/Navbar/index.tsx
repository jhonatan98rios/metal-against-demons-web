import Link from "next/link";
import { CSSProperties } from "react";

export default function Navbar() {

  const buttonStyle = "m-1 md:mx-3 text-md md:text-2xl font-extrabold text-white h-10 md:h-14 w-60 md:px-8 bg-slate-950 flex items-center justify-center rounded-xl"
  const blueButtonTexture: CSSProperties = {
    background: "linear-gradient(180deg, #4683AF 0%, #4683AF 0.01%, #76B7D9 6.5%, #4683AF 41.5%, #193E56 100%)"
  }

  const redButtonTexture: CSSProperties = {
    background: "linear-gradient(180deg, #4F1A2A 0%, #682843 0.01%, #A16A8A 7.5%, #61253F 32%, #5B2138 77.5%, #390814 100%)"
  }

  return (
    <nav className="w-screen h-20 bg-header-menu bg-no-repeat bg-cover bg-center z-10 fixed bottom-0 flex justify-center items-start border-t-4 border-t-gray-500">
      <div className="max-w-screen-lg mx-a md:w-4/5 w-full -mt-10 bg-gradient-to-r from-gray-600 to-gray-300 rounded-xl flex justify-center items-start">

        <div className="flex items-center justify-center h-16 md:h-20 w-[calc(100%-8px)] bg-header-menu my-1 rounded-xl">
          <Link href="evolucao" className={buttonStyle} style={blueButtonTexture}> EVOLUÇÃO </Link>
          <Link href="combate" className={buttonStyle} style={redButtonTexture}> COMBATE </Link>
          <Link href="pactos" className={buttonStyle} style={blueButtonTexture}> PACTOS </Link>
        </div>
      </div>
    </nav>
  )
}
