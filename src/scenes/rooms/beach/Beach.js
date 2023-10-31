import RoomScene from '@scenes/rooms/RoomScene'

import {Animation, MoveTo, SimpleButton, ShowHint, Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Beach extends RoomScene {
    constructor() {
        super('Beach')

        /** @type {Phaser.GameObjects.Image} */
        this.orangebat
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort
        /** @type {Array<any>} */
        this.this_waterZones

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            dock: () => this.triggerRoom(800, 400, 320),
            village: () => this.triggerRoom(200, 1300, 760),
            light: () => this.triggerRoom(410, 456, 492)
            // migrator: () => this.triggerRoom(420, 900, 600)
        }

        this.music = 251

        this.loadSfx = ['beach-LightDoorOpen', 'beach-LightDoorClose']
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('beach-pack', 'client/media/rooms/beach/beach-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'beach', 'bg')

        // orangebat
        const orangebat = this.add.image(646, 399, 'candyhunt', 'orangebat')
        orangebat.scaleX = 0.25
        orangebat.scaleY = 0.25

        // anotherotherpost
        const anotherotherpost = this.add.image(955.1087855674923, 867.5362732940885, 'beach', 'anotherotherpost')
        anotherotherpost.setOrigin(0.6283610431365081, 0.9026419513480088)

        // anotherpost
        const anotherpost = this.add.image(1146.5362732940885, 770.8225294307904, 'beach', 'anotherpost')
        anotherpost.setOrigin(0.7543001797987424, 0.8029401348237399)

        // boat_back
        const boat_back = this.add.image(1437.3588027248788, 819.6794013624394, 'beach', 'boat_back')
        boat_back.setOrigin(0.9456307912663676, 0.8527910430858744)

        // boat_front
        const boat_front = this.add.image(1253.2939106800748, 749.7347423854139, 'beach', 'boat_front')
        boat_front.setOrigin(0.8245354675526808, 0.7799320233181395)

        // cart
        const cart = this.add.image(1032.41604022631, 319.0228950005725, 'beach', 'cart')
        cart.setOrigin(0.6792210790962566, 0.33127384895892964)

        // coffin
        const coffin = this.add.image(1155.7395178963286, 534.3788186929931, 'beach', 'coffin')
        coffin.setOrigin(0.7603549459844268, 0.5556029361385345)

        // crate
        const crate = this.add.image(643.9099073442575, 874.6928238590881, 'beach', 'crate')
        crate.setOrigin(0.42362493923631594, 0.9100966933804863)

        // crateback
        const crateback = this.add.image(636.3007297450789, 811.5502289912205, 'beach', 'crateback')
        crateback.setOrigin(0.41861890616440584, 0.844323164267247)

        // door
        const door = this.add.image(263.11873682476283, 427.2823577074388, 'beach', 'door')
        door.setOrigin(0.5496964740268236, 0.8310320820804719)

        // door2
        const door2 = this.add.image(447.88126317523717, 398.25861034248624, 'beach', 'door2')
        door2.setOrigin(0.44248610309255243, 0.8500555505966854)

        // eyescream
        const eyescream = this.add.image(962.4713812492844, 387.12690505714994, 'beach', 'eyescream')
        eyescream.setOrigin(0.6332048560850555, 0.4022155261011979)

        // fence
        const fence = this.add.image(1457.6059408498072, 683.4713812492844, 'beach', 'fence')
        fence.setOrigin(0.9589512768748731, 0.7109076888013379)

        // fg
        const fg = this.add.image(840.9885457224416, 965.0906606338649, 'beach', 'fg')
        fg.setOrigin(0.5532819424340223, 1.0042611104977444)

        // fishbones
        const fishbones = this.add.image(539.1221295462351, 790.2290186352707, 'beach', 'fishbones')
        fishbones.setOrigin(0.35468561154357575, 0.8221135610784069)

        // frame
        const frame = this.add.image(117.6135267636339, 377.92366045490974, 'beach', 'frame')
        frame.setOrigin(0.07737732023923283, 0.3926288129738643)

        // gravegrave
        const gravegrave = this.add.image(1441.040100565775, 578.5543927837462, 'beach', 'gravegrave')
        gravegrave.setOrigin(0.9480526977406415, 0.6016191591497356)

        // holygrave
        const holygrave = this.add.image(1452.083994088463, 506.76908488627254, 'beach', 'holygrave')
        holygrave.setOrigin(0.9553184171634624, 0.5268427967565339)

        // howmanygravesarethere
        const howmanygravesarethere = this.add.image(1382.1393351114375, 324.5448417619166, 'beach', 'howmanygravesarethere')
        howmanygravesarethere.setOrigin(0.9093021941522615, 0.33702587683532975)

        // isthattheentrancetoamorgue
        const isthattheentrancetoamorgue = this.add.image(1312.194676134412, 193.8587684101057, 'beach', 'isthattheentrancetoamorgue')
        isthattheentrancetoamorgue.setOrigin(0.8632859711410605, 0.20089455042719345)

        // lantern
        const lantern = this.add.image(482.0620130123459, 672.4274877265962, 'beach', 'lantern')
        lantern.setOrigin(0.31714606119233285, 0.6994036330485377)

        // modelgrave
        const modelgrave = this.add.image(1444.7213984066711, 307.97900147788425, 'beach', 'modelgrave')
        modelgrave.setOrigin(0.9504746042149153, 0.3197697932061294)

        // moneygrave
        const moneygrave = this.add.image(1323.2385696571005, 359.5171712504293, 'beach', 'moneygrave')
        moneygrave.setOrigin(0.8705516905638819, 0.3734553867191972)

        // morgleg
        const morgleg = this.add.image(1332.4418142593404, 190.17747056920962, 'beach', 'morgleg')
        morgleg.setOrigin(0.876606456749566, 0.19705986517626)

        // notshadedgrave
        const notshadedgrave = this.add.image(1476.0124300542875, 295.09445903474796, 'beach', 'notshadedgrave')
        notshadedgrave.setOrigin(0.9710608092462418, 0.30634839482786247)

        // othercrate
        const othercrate = this.add.image(603.3773622219957, 777.3256810678905, 'beach', 'othercrate')
        othercrate.setOrigin(0.3969587865193216, 0.8086725887712886)

        // othercrateback
        const othercrateback = this.add.image(614.5887352846048, 735.0095510218296, 'beach', 'othercrateback')
        othercrateback.setOrigin(0.4043346942661874, 0.7645932823144058)

        // otherframe
        const otherframe = this.add.image(638.5171712504293, 324.5448417619166, 'beach', 'otherframe')
        otherframe.setOrigin(0.4200770863489667, 0.33702587683532975)

        // post
        const post = this.add.image(222.53051522917224, 608.0047755109148, 'beach', 'post')
        post.setOrigin(0.14640165475603437, 0.6322966411572029)

        // salegrave
        const salegrave = this.add.image(1352.688952384269, 560.1479035792657, 'beach', 'salegrave')
        salegrave.setOrigin(0.8899269423580717, 0.5824457328950685)

        // sign
        const sign = this.add.image(397.392162671736, 153.36449216024886, 'beach', 'sign')
        sign.setOrigin(0.26144221228403686, 0.1587130126669259)

        // slfacingback
        const slfacingback = this.add.image(1310.354027213964, 486.52194676134417, 'beach', 'slfacingback')
        slfacingback.setOrigin(0.8620750179039236, 0.5057520278764002)

        // spotlight
        const spotlight = this.add.image(1240.4093682369385, 466.2748086364157, 'beach', 'spotlight')
        spotlight.setOrigin(0.8160587948927227, 0.48466125899626633)

        // spotlightagain
        const spotlightagain = this.add.image(1275.3816977254514, 652.1803496016678, 'beach', 'spotlightagain')
        spotlightagain.setOrigin(0.8390669063983233, 0.678312864168404)

        // thatsastool
        const thatsastool = this.add.image(1210.95898550977, 521.4942762498569, 'beach', 'thatsastool')
        thatsastool.setOrigin(0.7966835430985328, 0.5421815377602676)

        // thingy
        const thingy = this.add.image(369.78242886501545, 729.4876042604855, 'beach', 'thingy')
        thingy.setOrigin(0.24327791372698385, 0.7588412544380057)

        // ticketbox
        const ticketbox = this.add.image(364.26048210367134, 339.2700331255009, 'beach', 'ticketbox')
        ticketbox.setOrigin(0.23964505401557326, 0.3523646178390634)

        // triplegrave
        const triplegrave = this.add.image(1354.5296013047168, 444.1870215910392, 'beach', 'triplegrave')
        triplegrave.setOrigin(0.8911378955952084, 0.4616531474906658)

        // tvgrave
        const tvgrave = this.add.image(1295.1554682563856, 430.602501140705, 'beach', 'tvgrave')
        tvgrave.setOrigin(0.8520759514596327, 0.4475025987488804)

        // violin
        const violin = this.add.image(780.5098057929381, 680.4600188396596, 'beach', 'violin')
        violin.setOrigin(0.5134932887246187, 0.7088125484812473)

        // lists
        const sort = [anotherotherpost, violin, tvgrave, triplegrave, ticketbox, thingy, thatsastool, spotlightagain, spotlight, slfacingback, sign, salegrave, post, otherframe, othercrateback, othercrate, notshadedgrave, morgleg, moneygrave, modelgrave, lantern, isthattheentrancetoamorgue, howmanygravesarethere, holygrave, gravegrave, frame, fishbones, fg, fence, eyescream, crateback, crate, coffin, cart, boat_front, boat_back, anotherpost]
        const this_waterZones = []

        // orangebat (components)
        const orangebatSimpleButton = new SimpleButton(orangebat)
        orangebatSimpleButton.callback = () => this.shell.party.findCandy('orangebat')

        // door (components)
        const doorButton = new Button(door)
        doorButton.hoverCallback = () => this.shell.musicController.addSfx('beach-LightDoorOpen')
        doorButton.hoverOutCallback = () => this.shell.musicController.addSfx('beach-LightDoorClose')
        new MoveTo(door)

        // door2 (components)
        const door2Button = new Button(door2)
        door2Button.hoverCallback = () => this.shell.musicController.addSfx('beach-LightDoorOpen')
        door2Button.hoverOutCallback = () => this.shell.musicController.addSfx('beach-LightDoorClose')
        new MoveTo(door2)

        this.orangebat = orangebat
        this.sort = sort
        this.this_waterZones = this_waterZones

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    onBucketOver() {
        let frame = this.bucket.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0346':
                this.bucket.play('beach-bucket1')
                break
            case '0070':
                this.bucket.play('beach-bucket2')
                break
            case '0137':
                this.bucket.play('beach-bucket3')
                break
            case '0210':
                this.bucket.play('beach-bucket4')
                break
            case '0269':
                this.bucket.play('beach-bucket5')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
