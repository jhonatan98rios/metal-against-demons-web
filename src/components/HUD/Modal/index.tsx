import { ReactNode } from "react"

interface IModal  {
    children: ReactNode
}

export function Modal({ children }: IModal) {

    return (
        <div className="max-w-lg w-full h-96 bg-slate-600 m-auto absolute left-0 right-0 top-32 p-4">
            { children }
        </div>
    )
}