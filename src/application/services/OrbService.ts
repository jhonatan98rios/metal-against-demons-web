import { Player } from "../entities/Player";
import { IXPOrb, XPOrb } from "../entities/XPOrb";
import { EventClient } from "../event/EventClient";

export class OrbService extends EventClient {

    private static instance: OrbService;

    player: Player
    xpOrbs: XPOrb[]

    constructor() {
        super()
        this.player = Player.getInstance()
        this.xpOrbs = []
    }

    spawnXpOrb({ x, y, value }: IXPOrb) {
        this.xpOrbs.push(
            new XPOrb({ x, y, value })
        )       
        this.sortOrbs()        
    }

    sortOrbs() {
        this.xpOrbs.sort((a, b) => {
            const distanceToA = Math.sqrt(Math.pow(this.player.x - a.x, 2) + Math.pow(this.player.y - a.y, 2));
            const distanceToB = Math.sqrt(Math.pow(this.player.x - b.x, 2) + Math.pow(this.player.y - b.y, 2));
            return distanceToA - distanceToB;
        });
    }

    remove(id: string) {
        this.xpOrbs = this.xpOrbs.filter(orb => orb.id != id)
    }

    createEventListeners(): void {
        this.eventManager.on('orb:spawn', (props) => {
            this.spawnXpOrb(props)
        });
    }

    public static getInstance(): OrbService {
        if (!OrbService.instance) {
            OrbService.instance = new OrbService()
        }
    
        return OrbService.instance
    } 
}