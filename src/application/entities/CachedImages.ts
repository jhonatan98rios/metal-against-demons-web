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
    soundAttackLevel_5: HTMLImageElement

    forceFieldLevel_1: HTMLImageElement
    forceFieldLevel_2: HTMLImageElement
    forceFieldLevel_3: HTMLImageElement
    forceFieldLevel_4: HTMLImageElement
    forceFieldLevel_5: HTMLImageElement

    batAttackLevel_1: HTMLImageElement
    batAttackLevel_2: HTMLImageElement
    batAttackLevel_3: HTMLImageElement
    batAttackLevel_4: HTMLImageElement
    batAttackLevel_5: HTMLImageElement


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
        this.soundAttackLevel_1.src = "img/skills/sound_attack_1.png"

        this.soundAttackLevel_2 = new Image()
        this.soundAttackLevel_2.src = "img/skills/sound_attack_2.png"

        this.soundAttackLevel_3 = new Image()
        this.soundAttackLevel_3.src = "img/skills/sound_attack_3.png"

        this.soundAttackLevel_4 = new Image()
        this.soundAttackLevel_4.src = "img/skills/sound_attack_4.png"

        this.soundAttackLevel_5 = new Image()
        this.soundAttackLevel_5.src = "img/skills/sound_attack_5.png"

        /* Force Field */
        this.forceFieldLevel_1 = new Image()
        this.forceFieldLevel_1.src = "img/skills/force_field_1.png"

        this.forceFieldLevel_2 = new Image()
        this.forceFieldLevel_2.src = "img/skills/force_field_2.png"

        this.forceFieldLevel_3 = new Image()
        this.forceFieldLevel_3.src = "img/skills/force_field_3.png"

        this.forceFieldLevel_4 = new Image()
        this.forceFieldLevel_4.src = "img/skills/force_field_4.png"

        this.forceFieldLevel_5 = new Image()
        this.forceFieldLevel_5.src = "img/skills/force_field_5.png"

        /* Bat Attack */
        this.batAttackLevel_1 = new Image()
        this.batAttackLevel_1.src = "img/skills/bat_attack_1.png"

        this.batAttackLevel_2 = new Image()
        this.batAttackLevel_2.src = "img/skills/bat_attack_2.png"

        this.batAttackLevel_3 = new Image()
        this.batAttackLevel_3.src = "img/skills/bat_attack_3.png"

        this.batAttackLevel_4 = new Image()
        this.batAttackLevel_4.src = "img/skills/bat_attack_4.png"

        this.batAttackLevel_5 = new Image()
        this.batAttackLevel_5.src = "img/skills/bat_attack_5.png"
    }

    public static getInstance(): CachedImages {
        if (!CachedImages.instance) {
            CachedImages.instance = new CachedImages();
        }

        return CachedImages.instance;
    }
}