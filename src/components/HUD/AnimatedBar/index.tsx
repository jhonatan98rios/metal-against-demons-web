import { CSSProperties } from "react"

interface IAnimatedBar {
    curentValue: number,
    maxValue: number,
    minColor: string,
    maxColor: string,
    left: number,
    top: number,
    width: number,
    height: number
}

export function AnimatedBar({ curentValue, maxValue, minColor, maxColor, height, width, left, top }: IAnimatedBar) {

    const containerStyle: CSSProperties = {
        width,
        height,
        top,
        left,
    }

    const fillStyle: CSSProperties = {
        backgroundColor: curentValue > maxValue * 0.5 ? maxColor : minColor,
        width: curentValue ? (curentValue / maxValue) * width : 0
    }

    return (
        <div className="absolute border border-white" style={containerStyle}>
            <div className="h-full" style={fillStyle} />
        </div>
    )

}