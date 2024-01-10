//@ts-nocheck
export class CachedImages {

    private static instance: CachedImages;

    player: HTMLImageElement
    cyclop: HTMLImageElement
    spirit: HTMLImageElement
    dragon: HTMLImageElement
    crawler: HTMLImageElement

    soundAttackLevel_1: HTMLImageElement
    soundAttackLevel_2: HTMLImageElement
    soundAttackLevel_3: HTMLImageElement
    soundAttackLevel_4: HTMLImageElement

    constructor() {
        this.createEnemies()
        this.createSkills()
    }
    
    createEnemies() {
        this.player = new Image()
        this.player.src = "img/players/standard/spritesheet.png"
        this.spirit = new Image()
        this.spirit.src = "img/enemies/spirit.png"
        this.cyclop = new Image()
        this.cyclop.src = "img/enemies/cyclope.png"
        this.dragon = new Image()
        this.dragon.src = "img/enemies/dragon.png"
        this.crawler = new Image()
        this.crawler.src = "img/enemies/crawler.png"
    }

    createSkills() {
        this.soundAttackLevel_1 = new Image()
        this.soundAttackLevel_1.src = "img/skills/sound_attack_level_1.png"

        this.soundAttackLevel_2 = new Image()
        this.soundAttackLevel_2.src = "img/skills/sound_attack_level_2.png"

        this.soundAttackLevel_3 = new Image()
        this.soundAttackLevel_3.src = "img/skills/sound_attack_level_3.png"

        this.soundAttackLevel_4 = new Image()
        this.soundAttackLevel_4.src = "img/skills/sound_attack_level_4.png"
    }

    public static getInstance(): CachedImages {
        if (!CachedImages.instance) {
            CachedImages.instance = new CachedImages();
        }

        return CachedImages.instance;
    }
}