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
        //const scrollHeight = document.querySelector("#scroll").clientHeight
        document.querySelector("#scroll").scrollTo({ top: 10000, behavior: 'smooth' })
    }, [])


    return (
        <div id="scroll" className={`
            w-[120vw] md:w-full h-[760px] md:max-h-[84vh] lg:h-[900px] sm:max-h-full absolute bottom-12
            overflow-scroll pb-32 md:pb-48 pt-8 scale-75 lg:scale-100 z-10 mx-auto
        `}>
            <div className="flex justify-between max-w-[430px] mx-auto">

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