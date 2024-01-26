import { abilityNodeTree } from "@/database/upgradeTree/mock/AbilityNodeTree";
import { healthNodeTree } from "@/database/upgradeTree/mock/HealthNodeTree";
import { strengthNodeTree } from "@/database/upgradeTree/mock/StrengthNodeTree";
import { useEffect } from "react";


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
 

    return (
        <div id="scroll" className={`
            h-[760px] md:max-h-[76vh] lg:h-[900px] sm:max-h-full 
            absolute top bottom-24 lg:right-32 
            overflow-scroll pb-32 pt-8 scale-75 lg:scale-100 z-10
        `}>
            <div className="flex justify-between">

                {
                    columns.map(upgrades => (
                        <div className="h-full flex flex-col-reverse">
                            
                            {
                                upgrades.upgradeNodes.map(upgrade => (
                                    <div className="m-2 w-[128px] h-[128px] rounded-full">
                                        <img 
                                            src={
                                                upgrade.isAcquired 
                                                    ? "./img/menu/health-acquired.png" 
                                                    : !upgrade.isLocked
                                                        ? "./img/menu/health.png"
                                                        : "./img/menu/locked-skill.png"
                                            } 
                                            alt={upgrade.name} 
                                        />
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}