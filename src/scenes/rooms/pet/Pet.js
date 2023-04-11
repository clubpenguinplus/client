import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Animation, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class Pet extends RoomScene {
    constructor() {
        super('Pet')

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 384, 619),
            hotel: () => this.triggerRoom(430, 1370, 490),
            park: () => this.triggerGame('puffleroundup', 925),
            adopt: () => this.interface.loadExternal('Adopt'),
            scape: () => null,
            launch: () => this.triggerGame('pufflelaunch', 928),
        }
        this.music = 659
        this.loadSfx = ['pet-plazadooropen', 'pet-plazadoorclose', 'pet-parkdooropen', 'pet-parkdoorclose', 'pet-hoteldooropen', 'pet-hoteldoorclose', 'pet-pufflebounce']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('pet-pack', 'client/media/rooms/pet/pet-pack.json')
    }

    /** @returns {void} */
    _create() {
        // outsidebgs
        this.add.image(787, 200, 'pet', 'outsidebgs')

        // scapebg
        this.add.image(972, 186, 'pet', 'scapebg')

        // scapeanim
        const scapeanim = this.add.sprite(981.5900268554688, 331.94525780789996, 'pet', 'scapeanim0001')
        scapeanim.setOrigin(0.4689440156816471, 0.8225152757837617)

        // scapetubefront
        this.add.image(992, 121, 'pet', 'scapetubefront')

        // launchwindow
        const launchwindow = this.add.sprite(1187, 153, 'pet', 'launchwindow0001')

        // launchbg
        this.add.image(1211, 277, 'pet', 'launchbg')

        // launchcannon
        const launchcannon = this.add.sprite(1168.9594774838056, 413.1620268785253, 'pet', 'launchcannon0001')
        launchcannon.setOrigin(0.20545231686031068, 1.007214184440187)

        // petbg
        this.add.image(760, 480, 'pet', 'petbg')

        // plazadoor
        const plazadoor = this.add.image(753.8012542920723, 303.05017168288964, 'pet', 'plazadoor')
        plazadoor.setOrigin(0.5116718928836345, 1.1089683243635304)

        // launchtube
        this.add.image(1209, 186, 'pet', 'launchtube')

        // parkdoor_en
        const parkdoor_en = this.add.image(1382.1940872839104, 511.05890273762463, 'pet', 'parkdoor_en')
        parkdoor_en.setOrigin(0.03377041211446366, 0.9972320668753666)

        // adoptbg
        this.add.image(302, 339, 'pet', 'adoptbg')

        // white_lookaround
        const white_lookaround = this.add.sprite(366, 270, 'pet', 'white_lookaround0001')

        // adoptsillright
        this.add.image(395, 248, 'pet', 'adoptsillright')

        // arch
        this.add.image(1228, 237, 'pet', 'arch')

        // arch_1
        this.add.image(1454, 226, 'pet', 'parkdoor-arch')

        // pufflesanim
        const pufflesanim = this.add.container(0, 0)

        // parkdoor_bottom
        const parkdoor_bottom = this.add.image(1448, 343, 'pet', 'parkdoor-bottom')

        // tubesagain
        this.add.image(750, 480, 'pet', 'tubesagain')

        // purplepuffle
        const purplepuffle = this.add.container(285, 276)

        // purplepuffbody
        const purplepuffbody = this.add.sprite(-6.681768928523127, -0.38986315154176054, 'pet', 'purppuffbody')
        purplepuffle.add(purplepuffbody)

        // purplepuffblink
        const purplepuffblink = this.add.sprite(-6, 0, 'pet', 'purplepuffblink0001')
        purplepuffle.add(purplepuffblink)

        // purplepuffmouth
        const purplepuffmouth = this.add.image(-5, 17, 'pet', 'purppuffmouth')
        purplepuffle.add(purplepuffmouth)

        // purplepuffjump
        const purplepuffjump = this.add.sprite(-6, -25, 'pet', 'purplepuffjump0001')
        purplepuffjump.visible = false
        purplepuffle.add(purplepuffjump)

        // pufflecareholder
        const pufflecareholder = this.add.sprite(560, 177, 'pet', 'pufflecareholder0001')

        // launchrail
        this.add.image(1205, 86, 'pet', 'launchrail')

        // tubes
        this.add.image(1075, 471, 'pet', 'tubes')

        // leftplazarail
        this.add.image(642, 345, 'pet', 'leftplazarail')

        // exittext_en
        this.add.image(1454, 140, 'pet', 'exittext_en')

        // fgtubebg
        this.add.image(825, 200, 'pet', 'fgtubebg')

        // adopthitlight
        const adopthitlight = this.add.sprite(281, 311, 'pet', 'adopthitlight')
        adopthitlight.visible = false

        // pufflecarefoot
        this.add.image(535, 379, 'pet', 'pufflecarefoot')

        // adoptholder
        this.add.image(212, 292, 'pet', 'adoptholder')

        // adoptledge
        this.add.image(324, 216, 'pet', 'adoptledge')

        // fgtubes
        const fgtubes = this.add.image(-21.48598668872944, 986.2663606360335, 'pet', 'fgtubes')
        fgtubes.setOrigin(-0.007458432914759377, 2.3961196214632623)

        // hoteldoorouter
        this.add.image(91, 552, 'pet', 'hoteldoorouter')

        // hoteldoor
        const hoteldoor = this.add.image(116.68995030429409, 698.6241548569319, 'pet', 'hoteldoor')
        hoteldoor.setOrigin(0.7680652017695832, 0.7019890430962736)

        // floorholder
        this.add.image(760, 688, 'pet', 'floorholder')

        // floorpuffle_blue
        this.add.image(760, 894, 'pet', 'floorpuffle_blue')

        // adoptbottom
        this.add.image(303, 457, 'pet', 'adoptbottom')

        // adoptbookbase
        const adoptbookbase = this.add.sprite(235.62287079326646, 471.0063253004727, 'pet', 'adoptbookbase')
        adoptbookbase.setOrigin(0.43714293255948317, 0.2937895331279545)

        // adopttext_en
        const adopttext_en = this.add.image(48.33995048475995, 1036.7531711265651, 'pet', 'adopttext_en')
        adopttext_en.setOrigin(-0.9552002829442289, 1.9512385444077311)

        // ball
        const ball = this.add.image(466, 406.1737224759599, 'pet', 'ball')
        ball.setOrigin(0.5, 0.4187347913804749)

        // hotelholder
        this.add.image(7, 555, 'pet', 'hotelholder')

        // art
        const art = this.add.image(269.2754258413467, 579.1737224759598, 'pet', 'art')
        art.setOrigin(0.5116688504684447, 0.4671813580574992)

        // pinkbowl
        const pinkbowl = this.add.image(208.86228707932665, 645.485157872593, 'pet', 'pinkbowl')
        pinkbowl.setOrigin(0.4859541614731685, 0.29814770762246856)

        // bed
        const bed = this.add.image(348.3575134277344, 802.6494362135142, 'pet', 'bed')
        bed.setOrigin(0.5674908283121518, 0.18901087183319448)

        // foodbowl
        const foodbowl = this.add.image(1022, 849.8948606130384, 'pet', 'foodbowl')
        foodbowl.setOrigin(0.5, 0.32941839833070014)

        // parkrailright
        const parkrailright = this.add.image(1418, 566, 'pet', 'parkrailright')

        // surf
        const surf = this.add.image(1429, 611, 'pet', 'surf')

        // bluebackpost
        const bluebackpost = this.add.image(1322, 690, 'pet', 'bluebackpost')

        // bluefrontpost
        const bluefrontpost = this.add.image(1324.3319091796875, 740.3404767357516, 'pet', 'bluefrontpost')
        bluefrontpost.setOrigin(0.5264688634931882, 0.17431535438945286)

        // petfg
        const petfg = this.add.image(766.0552024192884, 1082.5857631910912, 'pet', 'petfg')
        petfg.setOrigin(0.5381963125129007, 1.2860131045015724)

        // post
        const post = this.add.image(564.7219403215181, 790.5699787963789, 'pet', 'post')
        post.setOrigin(0.40905694472304527, 0.18885584235753775)

        // postright
        const postright = this.add.image(601.1986825179283, 862.2777314422309, 'pet', 'postright')
        postright.setOrigin(0.4927152956175302, 0.9006587410358551)

        // skateboard
        const skateboard = this.add.image(995.574909512421, 755.0842636581053, 'pet', 'skateboard')
        skateboard.setOrigin(0.5955979543128237, 0.17195270453297884)

        // petcat_en
        const petcat_en = this.add.image(1403.558936402699, 1112.6047147940585, 'pet', 'petcat_en')
        petcat_en.setOrigin(0.5167250745274439, 3.7487366503831177)

        // adoptbutton
        const adoptbutton = this.add.image(1464.3840460404854, 1125.893640269903, 'pet', 'adoptbutton')
        adoptbutton.setOrigin(0.8146233282006998, 2.8476480758706697)

        // greenwagonback
        const greenwagonback = this.add.image(1222.7927663161865, 419.84860032892414, 'pet', 'greenwagonback')
        greenwagonback.setOrigin(0.5886805691116538, 0.26258745277194984)

        // greenwagonfront
        const greenwagonfront = this.add.image(1185.8826904296875, 495.6616107610942, 'pet', 'greenwagonfront')
        greenwagonfront.setOrigin(0.4450143343997173, 0.32577998529755736)

        // parkrailleft
        const parkrailleft = this.add.image(1289.3217652178835, 512.3086573362336, 'pet', 'parkrailleft')
        parkrailleft.setOrigin(0.33916145544598203, 0.758206646017315)

        // pufflecarebutton
        const pufflecarebutton = this.add.sprite(243, 431, 'pet', 'pufflecarebutton0001')

        // goldtube
        const goldtube = this.add.sprite(474, 299, 'pet', 'goldtube0001')

        // adoptsign
        this.add.image(423, 297, 'pet', 'adoptsign')

        // rightplazarails
        this.add.image(856, 346, 'pet', 'rightplazarails')

        // rightbackplazarails
        this.add.image(878, 311, 'pet', 'rightbackplazarails')

        // plazarail
        this.add.image(791, 194, 'pet', 'plazarail')

        // adopthit
        const adopthit = this.add.image(363.540089674106, 466.1703010487845, 'pet', 'adopthit')
        adopthit.setOrigin(0.717132413864551, 0.9940416906618529)
        adopthit.alphaTopLeft = 0
        adopthit.alphaTopRight = 0
        adopthit.alphaBottomLeft = 0
        adopthit.alphaBottomRight = 0

        // blackpuffblink
        const blackpuffblink = this.add.sprite(398, 161, 'pet', 'blackpuffblink0001')

        // greenpuffle
        const greenpuffle = this.add.container(224, 348)

        // greenpuffbody
        const greenpuffbody = this.add.sprite(-6.681768928523127, -0.38986315154176054, 'pet', 'greenpuffbody')
        greenpuffle.add(greenpuffbody)

        // greenpuffblink
        const greenpuffblink = this.add.sprite(-6, 0, 'pet', 'greenpuffblink0001')
        greenpuffle.add(greenpuffblink)

        // greenpuffmouth
        const greenpuffmouth = this.add.image(-5, 17, 'pet', 'greenpuffmouth')
        greenpuffle.add(greenpuffmouth)

        // greenpuffjump
        const greenpuffjump = this.add.sprite(-7, -26, 'pet', 'greenpuffjump0001')
        greenpuffjump.visible = false
        greenpuffle.add(greenpuffjump)

        // brownpuffle
        const brownpuffle = this.add.container(287, 332)

        // brownpuffbody
        const brownpuffbody = this.add.sprite(-6.681768928523127, -0.38986315154176054, 'pet', 'brownpuffbody')
        brownpuffle.add(brownpuffbody)

        // brownpuffblink
        const brownpuffblink = this.add.sprite(-1, 0, 'pet', 'brownpuffblink0001')
        brownpuffle.add(brownpuffblink)

        // brownpuffmouth
        const brownpuffmouth = this.add.image(1, 17, 'pet', 'brownpuffmouth')
        brownpuffle.add(brownpuffmouth)

        // brownpuffjump
        const brownpuffjump = this.add.sprite(-1, -25, 'pet', 'brownpuffjump0001')
        brownpuffjump.visible = false
        brownpuffle.add(brownpuffjump)

        // yellowpuffle
        const yellowpuffle = this.add.container(345, 330)

        // yellowpuffbody
        const yellowpuffbody = this.add.sprite(-6.681768928523127, -0.38986315154176054, 'pet', 'yellowpuffbody')
        yellowpuffle.add(yellowpuffbody)

        // yellowpuffblink
        const yellowpuffblink = this.add.sprite(-1, 0, 'pet', 'yellowpuffblink0001')
        yellowpuffle.add(yellowpuffblink)

        // yellowpuffmouth
        const yellowpuffmouth = this.add.image(1, 17, 'pet', 'yellowpuffmouth')
        yellowpuffle.add(yellowpuffmouth)

        // yellowpuffjump
        const yellowpuffjump = this.add.sprite(-1, -26, 'pet', 'yellowpuffjump0001')
        yellowpuffjump.visible = false
        yellowpuffle.add(yellowpuffjump)

        // bluedogblink
        const bluedogblink = this.add.sprite(260, 377, 'pet', 'bluedogblink0001')

        // bluedogjump
        const bluedogjump = this.add.sprite(260, 345, 'pet', 'bluedogjump0001')
        bluedogjump.visible = false

        // bluepuffle
        const bluepuffle = this.add.container(218.7750712280227, 406.2965608520422)

        // bluepuffbody
        const bluepuffbody = this.add.sprite(-2.7750712280227106, -4.296560852042205, 'pet', 'bluepuffbody')
        bluepuffle.add(bluepuffbody)

        // bluepuffblink
        const bluepuffblink = this.add.sprite(2.2249287719772894, -5.296560852042205, 'pet', 'bluepuffblink0001')
        bluepuffle.add(bluepuffblink)

        // bluepuffmouth
        const bluepuffmouth = this.add.image(6.224928771977289, 12.703439147957795, 'pet', 'bluepuffmouth')
        bluepuffle.add(bluepuffmouth)

        // bluepuffjump
        const bluepuffjump = this.add.sprite(2, -29, 'pet', 'bluepuffjump0001')
        bluepuffjump.visible = false
        bluepuffle.add(bluepuffjump)

        // orangecatblink
        const orangecatblink = this.add.sprite(321, 383, 'pet', 'orangecatblink0001')

        // orangecatjump
        const orangecatjump = this.add.sprite(323, 350, 'pet', 'orangecatjump0001')
        orangecatjump.visible = false

        // redpuffle
        const redpuffle = this.add.container(377, 368)

        // redpuffbody
        const redpuffbody = this.add.sprite(-6.681768928523127, -0.38986315154176054, 'pet', 'redpuffbody')
        redpuffle.add(redpuffbody)

        // redpuffblink
        const redpuffblink = this.add.sprite(-6, 0, 'pet', 'redpuffeyes0001')
        redpuffle.add(redpuffblink)

        // redpuffmouth
        const redpuffmouth = this.add.image(-5, 17, 'pet', 'redpuffmouth')
        redpuffle.add(redpuffmouth)

        // redpuffjump
        const redpuffjump = this.add.sprite(-7, -26, 'pet', 'redpuffjump0001')
        redpuffjump.visible = false
        redpuffle.add(redpuffjump)

        // pinkpuffle
        const pinkpuffle = this.add.container(243.00000424592668, 1334.8267444114267)

        // pinkpuffbody
        const pinkpuffbody = this.add.sprite(-2.7750712280227106, -1146.1232608809748, 'pet', 'pinkpuffbody')
        pinkpuffle.add(pinkpuffbody)

        // pinkpuffblink
        const pinkpuffblink = this.add.sprite(2.2249287719772894, -1147.1232608809748, 'pet', 'pinkpuffblink0001')
        pinkpuffle.add(pinkpuffblink)

        // pinkpuffmouth
        const pinkpuffmouth = this.add.image(6.224928771977289, -1129.1232608809748, 'pet', 'pinkpuffmouth')
        pinkpuffle.add(pinkpuffmouth)

        // pinkpuffjump
        const pinkpuffjump = this.add.sprite(-1, -1171.8267000289327, 'pet', 'pinkpuffjump0001')
        pinkpuffjump.visible = false
        pinkpuffle.add(pinkpuffjump)

        // orangepuffjump
        const orangepuffjump = this.add.sprite(349.41949588941077, 1298.6193671185615, 'pet', 'orangepuffjump0001')
        orangepuffjump.setOrigin(0.8607830143632086, 11.467803636641548)

        // discoball
        const discoball = this.add.image(63, 1195.838477738851, 'pet', 'discoball')
        discoball.setOrigin(0.5, 5.735363235450404)

        // foodbowlgreen
        this.add.image(888, 402, 'pet', 'foodbowlgreen')

        // foodbowlyellow
        this.add.image(926, 438, 'pet', 'foodbowlyellow')

        // lists
        const sort = [fgtubes, adopttext_en, ball, adoptbookbase, art, pinkbowl, petfg, bed, post, postright, foodbowl, bluefrontpost, skateboard, petcat_en, adoptbutton, bluebackpost, surf, parkrailright, parkrailleft, greenwagonfront, greenwagonback, discoball, orangepuffjump, pinkpuffle]

        // scapeanim (components)
        const scapeanimSimpleButton = new SimpleButton(scapeanim)
        scapeanimSimpleButton.hoverCallback = () => this.onScapeOver()
        scapeanimSimpleButton.hoverOutCallback = () => this.onScapeOut()
        new MoveTo(scapeanim)

        // launchcannon (components)
        const launchcannonSimpleButton = new SimpleButton(launchcannon)
        launchcannonSimpleButton.hoverCallback = () => this.onLaunchOver()
        launchcannonSimpleButton.hoverOutCallback = () => this.onLaunchOut()
        new MoveTo(launchcannon)

        // plazadoor (components)
        const plazadoorButton = new Button(plazadoor)
        plazadoorButton.spriteName = 'plazadoor'
        plazadoorButton.hoverCallback = () => this.onPlazaDoorOver()
        plazadoorButton.hoverOutCallback = () => this.onPlazaDoorOut()
        plazadoorButton.activeFrame = false
        new MoveTo(plazadoor)

        // parkdoor_en (components)
        const parkdoor_enButton = new Button(parkdoor_en)
        parkdoor_enButton.spriteName = 'parkdoor_en'
        parkdoor_enButton.hoverCallback = () => this.onParkDoorOver()
        parkdoor_enButton.hoverOutCallback = () => this.onParkDoorOut()
        parkdoor_enButton.activeFrame = false
        new MoveTo(parkdoor_en)
        new LocalisedSprite(parkdoor_en)

        // hoteldoor (components)
        const hoteldoorButton = new Button(hoteldoor)
        hoteldoorButton.spriteName = 'hoteldoor'
        hoteldoorButton.hoverCallback = () => this.onHotelDoorOver()
        hoteldoorButton.hoverOutCallback = () => this.onHotelDoorOut()
        hoteldoorButton.activeFrame = false
        new MoveTo(hoteldoor)

        // adoptbookbase (components)
        const adoptbookbaseSimpleButton = new SimpleButton(adoptbookbase)
        adoptbookbaseSimpleButton.hoverCallback = () => this.onAdoptBookOver()
        adoptbookbaseSimpleButton.hoverOutCallback = () => this.onAdoptBookOut()

        // adopttext_en (components)
        new LocalisedSprite(adopttext_en)

        // petcat_en (components)
        const petcat_enButton = new Button(petcat_en)
        petcat_enButton.spriteName = 'petcat_en'
        petcat_enButton.activeFrame = false
        new LocalisedSprite(petcat_en)

        // adoptbutton (components)
        const adoptbuttonButton = new Button(adoptbutton)
        adoptbuttonButton.spriteName = 'adoptbutton'
        adoptbuttonButton.activeFrame = false

        // adopthit (components)
        const adopthitSimpleButton = new SimpleButton(adopthit)
        adopthitSimpleButton.hoverCallback = () => this.onAdoptOver()
        adopthitSimpleButton.hoverOutCallback = () => this.onAdoptOut()
        new MoveTo(adopthit)

        this.scapeanim = scapeanim
        this.launchwindow = launchwindow
        this.launchcannon = launchcannon
        this.white_lookaround = white_lookaround
        this.pufflesanim = pufflesanim
        this.parkdoor_bottom = parkdoor_bottom
        this.purplepuffle = purplepuffle
        this.purplepuffbody = purplepuffbody
        this.purplepuffblink = purplepuffblink
        this.purplepuffmouth = purplepuffmouth
        this.purplepuffjump = purplepuffjump
        this.pufflecareholder = pufflecareholder
        this.adopthitlight = adopthitlight
        this.adoptbookbase = adoptbookbase
        this.pufflecarebutton = pufflecarebutton
        this.goldtube = goldtube
        this.blackpuffblink = blackpuffblink
        this.greenpuffle = greenpuffle
        this.greenpuffbody = greenpuffbody
        this.greenpuffblink = greenpuffblink
        this.greenpuffmouth = greenpuffmouth
        this.greenpuffjump = greenpuffjump
        this.brownpuffle = brownpuffle
        this.brownpuffbody = brownpuffbody
        this.brownpuffblink = brownpuffblink
        this.brownpuffmouth = brownpuffmouth
        this.brownpuffjump = brownpuffjump
        this.yellowpuffle = yellowpuffle
        this.yellowpuffbody = yellowpuffbody
        this.yellowpuffblink = yellowpuffblink
        this.yellowpuffmouth = yellowpuffmouth
        this.yellowpuffjump = yellowpuffjump
        this.bluedogblink = bluedogblink
        this.bluedogjump = bluedogjump
        this.bluepuffle = bluepuffle
        this.bluepuffbody = bluepuffbody
        this.bluepuffblink = bluepuffblink
        this.bluepuffmouth = bluepuffmouth
        this.bluepuffjump = bluepuffjump
        this.orangecatblink = orangecatblink
        this.orangecatjump = orangecatjump
        this.redpuffle = redpuffle
        this.redpuffbody = redpuffbody
        this.redpuffblink = redpuffblink
        this.redpuffmouth = redpuffmouth
        this.redpuffjump = redpuffjump
        this.pinkpuffle = pinkpuffle
        this.pinkpuffbody = pinkpuffbody
        this.pinkpuffblink = pinkpuffblink
        this.pinkpuffmouth = pinkpuffmouth
        this.pinkpuffjump = pinkpuffjump
        this.orangepuffjump = orangepuffjump
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Sprite} */
    scapeanim
    /** @type {Phaser.GameObjects.Sprite} */
    launchwindow
    /** @type {Phaser.GameObjects.Sprite} */
    launchcannon
    /** @type {Phaser.GameObjects.Sprite} */
    white_lookaround
    /** @type {Phaser.GameObjects.Container} */
    pufflesanim
    /** @type {Phaser.GameObjects.Image} */
    parkdoor_bottom
    /** @type {Phaser.GameObjects.Container} */
    purplepuffle
    /** @type {Phaser.GameObjects.Sprite} */
    purplepuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    purplepuffblink
    /** @type {Phaser.GameObjects.Image} */
    purplepuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    purplepuffjump
    /** @type {Phaser.GameObjects.Sprite} */
    pufflecareholder
    /** @type {Phaser.GameObjects.Sprite} */
    adopthitlight
    /** @type {Phaser.GameObjects.Sprite} */
    adoptbookbase
    /** @type {Phaser.GameObjects.Sprite} */
    pufflecarebutton
    /** @type {Phaser.GameObjects.Sprite} */
    goldtube
    /** @type {Phaser.GameObjects.Sprite} */
    blackpuffblink
    /** @type {Phaser.GameObjects.Container} */
    greenpuffle
    /** @type {Phaser.GameObjects.Sprite} */
    greenpuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    greenpuffblink
    /** @type {Phaser.GameObjects.Image} */
    greenpuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    greenpuffjump
    /** @type {Phaser.GameObjects.Container} */
    brownpuffle
    /** @type {Phaser.GameObjects.Sprite} */
    brownpuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    brownpuffblink
    /** @type {Phaser.GameObjects.Image} */
    brownpuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    brownpuffjump
    /** @type {Phaser.GameObjects.Container} */
    yellowpuffle
    /** @type {Phaser.GameObjects.Sprite} */
    yellowpuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    yellowpuffblink
    /** @type {Phaser.GameObjects.Image} */
    yellowpuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    yellowpuffjump
    /** @type {Phaser.GameObjects.Sprite} */
    bluedogblink
    /** @type {Phaser.GameObjects.Sprite} */
    bluedogjump
    /** @type {Phaser.GameObjects.Container} */
    bluepuffle
    /** @type {Phaser.GameObjects.Sprite} */
    bluepuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    bluepuffblink
    /** @type {Phaser.GameObjects.Image} */
    bluepuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    bluepuffjump
    /** @type {Phaser.GameObjects.Sprite} */
    orangecatblink
    /** @type {Phaser.GameObjects.Sprite} */
    orangecatjump
    /** @type {Phaser.GameObjects.Container} */
    redpuffle
    /** @type {Phaser.GameObjects.Sprite} */
    redpuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    redpuffblink
    /** @type {Phaser.GameObjects.Image} */
    redpuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    redpuffjump
    /** @type {Phaser.GameObjects.Container} */
    pinkpuffle
    /** @type {Phaser.GameObjects.Sprite} */
    pinkpuffbody
    /** @type {Phaser.GameObjects.Sprite} */
    pinkpuffblink
    /** @type {Phaser.GameObjects.Image} */
    pinkpuffmouth
    /** @type {Phaser.GameObjects.Sprite} */
    pinkpuffjump
    /** @type {Phaser.GameObjects.Sprite} */
    orangepuffjump
    /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
    sort

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        let animvid = this.add.video(760, 480, 'pet-puffles-video')
        this.pufflesanim.add(animvid)
        animvid.play(true)

        this.white_lookaround.play('pet-white-lookaround')
        this.bluepuffblink.play('pet-bluepuffblink')
        this.greenpuffblink.play('pet-greenpuffblink')
        this.brownpuffblink.play('pet-brownpuffblink')
        this.yellowpuffblink.play('pet-yellowpuffblink')
        this.redpuffblink.play('pet-redpuffblink')
        this.pinkpuffblink.play('pet-pinkpuffblink')
        this.blackpuffblink.play('pet-blackpuffblink')
        this.orangecatblink.play('pet-orangecatblink')
        this.bluedogblink.play('pet-bluedogblink')
        this.purplepuffblink.play('pet-purplepuffblink')
        this.white_lookaround.play('pet-whitepufflook')
    }

    onPlazaDoorOver() {
        this.shell.musicController.addSfx('pet-plazadooropen')
    }

    onPlazaDoorOut() {
        this.shell.musicController.addSfx('pet-plazadoorclose')
    }

    onParkDoorOver() {
        this.shell.musicController.addSfx('pet-parkdooropen')
        this.parkdoor_bottom.setFrame('parkdoor-bottom-hover')
    }

    onParkDoorOut() {
        this.shell.musicController.addSfx('pet-parkdoorclose')
        this.parkdoor_bottom.setFrame('parkdoor-bottom')
    }

    onHotelDoorOver() {
        this.shell.musicController.addSfx('pet-hoteldooropen')
    }

    onHotelDoorOut() {
        this.shell.musicController.addSfx('pet-hoteldoorclose')
    }

    onScapeOver() {
        this.scapeanim.play('pet-scapeanim')
    }

    onScapeOut() {
        this.scapeanim.stop()
        this.scapeanim.setFrame('scapeanim0001')
    }

    onLaunchOver() {
        this.launchwindow.play('pet-launchwindow')
        this.launchcannon.play('pet-launchcannon')
    }

    onLaunchOut() {
        this.launchwindow.stop()
        this.launchcannon.stop()
        this.launchwindow.setFrame('launchwindow0001')
        this.launchcannon.setFrame('launchcannon0001')
    }

    onAdoptOver() {
        this.shell.musicController.addSfx('pet-pufflebounce')
        this.adopthitlight.visible = true
        this.redpuffjump.visible = true
        this.redpuffjump.playAfterDelay('pet-redpuffjump', Math.random() * 1000)
        this.redpuffbody.visible = false
        this.redpuffblink.visible = false
        this.redpuffmouth.visible = false
        this.greenpuffjump.visible = true
        this.greenpuffjump.playAfterDelay('pet-greenpuffjump', Math.random() * 1000)
        this.greenpuffbody.visible = false
        this.greenpuffblink.visible = false
        this.greenpuffmouth.visible = false
        this.yellowpuffjump.visible = true
        this.yellowpuffjump.playAfterDelay('pet-yellowpuffjump', Math.random() * 1000)
        this.yellowpuffbody.visible = false
        this.yellowpuffblink.visible = false
        this.yellowpuffmouth.visible = false
        this.brownpuffjump.visible = true
        this.brownpuffjump.playAfterDelay('pet-brownpuffjump', Math.random() * 1000)
        this.brownpuffbody.visible = false
        this.brownpuffblink.visible = false
        this.brownpuffmouth.visible = false
        this.bluepuffjump.visible = true
        this.bluepuffjump.playAfterDelay('pet-bluepuffjump', Math.random() * 1000)
        this.bluepuffbody.visible = false
        this.bluepuffblink.visible = false
        this.bluepuffmouth.visible = false
        this.pinkpuffjump.visible = true
        this.pinkpuffjump.playAfterDelay('pet-pinkpuffjump', Math.random() * 1000)
        this.pinkpuffbody.visible = false
        this.pinkpuffblink.visible = false
        this.pinkpuffmouth.visible = false
        this.purplepuffjump.visible = true
        this.purplepuffjump.playAfterDelay('pet-purplepuffjump', Math.random() * 1000)
        this.purplepuffbody.visible = false
        this.purplepuffblink.visible = false
        this.purplepuffmouth.visible = false
        this.orangecatjump.visible = true
        this.orangecatjump.playAfterDelay('pet-orangecatjump', Math.random() * 1000)
        this.orangecatblink.visible = false
        this.bluedogjump.visible = true
        this.bluedogjump.playAfterDelay('pet-bluedogjump', Math.random() * 1000)
        this.bluedogblink.visible = false
        this.orangepuffjump.playAfterDelay('pet-orangepuffjump', Math.random() * 1000)
    }

    onAdoptOut() {
        this.shell.musicController.stopSfx('pet-pufflebounce')
        this.adopthitlight.visible = false
        this.redpuffjump.stop()
        this.redpuffjump.setFrame('redpuffjump0001')
        this.redpuffjump.visible = false
        this.redpuffbody.visible = true
        this.redpuffblink.visible = true
        this.redpuffmouth.visible = true
        this.greenpuffjump.stop()
        this.greenpuffjump.setFrame('greenpuffjump0001')
        this.greenpuffjump.visible = false
        this.greenpuffbody.visible = true
        this.greenpuffblink.visible = true
        this.greenpuffmouth.visible = true
        this.yellowpuffjump.stop()
        this.yellowpuffjump.setFrame('yellowpuffjump0001')
        this.yellowpuffjump.visible = false
        this.yellowpuffbody.visible = true
        this.yellowpuffblink.visible = true
        this.yellowpuffmouth.visible = true
        this.brownpuffjump.stop()
        this.brownpuffjump.setFrame('brownpuffjump0001')
        this.brownpuffjump.visible = false
        this.brownpuffbody.visible = true
        this.brownpuffblink.visible = true
        this.brownpuffmouth.visible = true
        this.bluepuffjump.stop()
        this.bluepuffjump.setFrame('bluepuffjump0001')
        this.bluepuffjump.visible = false
        this.bluepuffbody.visible = true
        this.bluepuffblink.visible = true
        this.bluepuffmouth.visible = true
        this.pinkpuffjump.stop()
        this.pinkpuffjump.setFrame('pinkpuffjump0001')
        this.pinkpuffjump.visible = false
        this.pinkpuffbody.visible = true
        this.pinkpuffblink.visible = true
        this.pinkpuffmouth.visible = true
        this.purplepuffjump.stop()
        this.purplepuffjump.setFrame('purplepuffjump0001')
        this.purplepuffjump.visible = false
        this.purplepuffbody.visible = true
        this.purplepuffblink.visible = true
        this.purplepuffmouth.visible = true
        this.orangecatjump.stop()
        this.orangecatjump.setFrame('orangecatjump0001')
        this.orangecatjump.visible = false
        this.orangecatblink.visible = true
        this.bluedogjump.stop()
        this.bluedogjump.setFrame('bluedogjump0001')
        this.bluedogjump.visible = false
        this.bluedogblink.visible = true
        this.orangepuffjump.stop()
        this.orangepuffjump.setFrame('orangepuffjump0001')
    }

    onAdoptBookOver() {
        this.adoptbookbase.play('pet-adoptbook')
    }

    onAdoptBookOut() {
        this.adoptbookbase.stop()
        this.adoptbookbase.setFrame('adoptbookbase')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
