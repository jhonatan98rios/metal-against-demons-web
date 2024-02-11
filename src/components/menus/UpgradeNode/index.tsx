import { UpgradeNode as UpgradeNodeEntity } from "@/application/entities/UpgradeTree"
import { UpgradeNodeView } from "./view";
import { UpgradeNodeModel } from "./model";

interface IUpgradeNode {
    upgrade: UpgradeNodeEntity
}

export function UpgradeNode({ upgrade }: IUpgradeNode) {

    const { handleClick, playerState } = UpgradeNodeModel({ upgrade })

    return (
        <UpgradeNodeView
            handleClick={handleClick}
            playerState={playerState}
            upgrade={upgrade}
        />
    )
}