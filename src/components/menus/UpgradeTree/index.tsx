import { useEffect } from "react";
import { abilityNodeTree } from "@/database/upgradeTree/mock/AbilityNodeTree";
import { healthNodeTree } from "@/database/upgradeTree/mock/HealthNodeTree";
import { strengthNodeTree } from "@/database/upgradeTree/mock/StrengthNodeTree";
import { UpgradeNodeComponent } from "../UpgradeNodeComponent";


export function UpgradeTree() {

    const healthUpgrades = healthNodeTree
    const strengthUpgrades = strengthNodeTree
    const abilityUpgrades = abilityNodeTree

    const columns = [
        healthUpgrades,
        strengthUpgrades,
        abilityUpgrades
    ]

    useEffect(() => {
        const scrollHeight = document.querySelector("#scroll").clientHeight
        document.querySelector("#scroll").scrollTo({ top: scrollHeight, behavior: 'smooth' })
    }, [])


    function unlockNextNode(columnIndex: any, upgradeIndex: any) {
        if (columns[columnIndex].upgradeNodes[upgradeIndex + 1]) {
            columns[columnIndex].upgradeNodes[upgradeIndex + 1].isLocked = false
        }
    }


    return (
        <div id="scroll" className={`
            h-[760px] md:max-h-[84vh] lg:h-[900px] sm:max-h-full 
            absolute top bottom-24 lg:right-32 
            overflow-scroll pb-32 pt-8 scale-75 lg:scale-100 z-10
        `}>
            <div className="flex justify-between">

                {
                    columns.map((column, columnIndex) => (
                        <div className="h-full flex flex-col-reverse" key={columnIndex}>
                            
                            {
                                column.upgradeNodes.map((upgrade, upgradeIndex) => (
                                    <UpgradeNodeComponent 
                                        key={upgradeIndex} 
                                        upgrade={upgrade} 
                                        unlockNextNode={() => unlockNextNode(columnIndex, upgradeIndex)} 
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