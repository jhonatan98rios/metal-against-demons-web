import { useEffect } from "react";
import { UpgradeNodeComponent } from "../UpgradeNodeComponent";
import { useUpgradeTree } from "@/store/UpgradeTreeContext";


export function UpgradeTreeComponent() {

    const { upgradeTreeState } = useUpgradeTree()
    const { healthTree, strengthTree, abilityTree } = upgradeTreeState

    const trees = {
        healthTree,
        strengthTree,
        abilityTree
    }

    useEffect(() => {
        const scrollHeight = document.querySelector("#scroll").clientHeight
        document.querySelector("#scroll").scrollTo({ top: scrollHeight + 500, behavior: 'smooth' })
    }, [])


    return (
        <div id="scroll" className={`
            h-[760px] md:max-h-[84vh] lg:h-[900px] sm:max-h-full 
            absolute top bottom-24 lg:right-32 
            overflow-scroll pb-32 pt-8 scale-75 lg:scale-100 z-10
        `}>
            <div className="flex justify-between">

                {
                    Object.entries(trees).map(([columnIndex, column]) => (
                        <div className="h-full flex flex-col-reverse" key={columnIndex}>
                            
                            {
                                column.upgradeNodes.map((upgrade, upgradeIndex) => (
                                    <UpgradeNodeComponent 
                                        key={upgradeIndex} 
                                        upgrade={upgrade} 
                                    />
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </div>
        
    )
}