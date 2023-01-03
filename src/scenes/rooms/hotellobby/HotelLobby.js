import RoomScene from '@scenes/rooms/RoomScene'

import {MoveTo, SimpleButton, ShowHint, Button, LocalisedSprite, Seat} from '@components/components'

/* START OF COMPILED CODE */

export default class HotelLobby extends RoomScene {
    constructor() {
        super('HotelLobby')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = 362

        this.loadSfx = ['']

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('hotellobby-pack', 'client/media/rooms/hotellobby/hotellobby-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_bg
        this.add.image(772, 519, 'hotellobby', 'bg-bg')

        // door
        this.add.image(789, 174, 'hotellobby', 'door')

        // bg_fg
        this.add.image(798, 459, 'hotellobby', 'bg-fg')

        // railings5
        this.add.image(799, 632, 'hotellobby', 'railings5')

        // railings4
        this.add.image(814, 664, 'hotellobby', 'railings4')

        // railings3
        this.add.image(798, 701, 'hotellobby', 'railings3')

        // railings2
        this.add.image(797, 706, 'hotellobby', 'railings2')

        // railings1
        this.add.image(796, 779, 'hotellobby', 'railings1')

        // reception_wall
        this.add.image(234, 220, 'hotellobby', 'reception-wall')

        // backchairs
        this.add.image(331, 685, 'hotellobby', 'backchairs')

        // backleftpanel
        this.add.image(557, 220, 'hotellobby', 'backleftpanel')

        // backpod
        this.add.image(1395, 695, 'hotellobby', 'backpod')

        // toprightwall
        this.add.image(1288, 223, 'hotellobby', 'toprightwall')

        // backrightwall
        this.add.image(1191, 125, 'hotellobby', 'backrightwall')

        // backtable
        this.add.image(333, 725, 'hotellobby', 'backtable')

        // coatcheck_wall
        this.add.image(1308, 279, 'hotellobby', 'coatcheck-wall')

        // midrailings_legs
        this.add.image(798, 486, 'hotellobby', 'midrailings_legs')

        // midrailings
        this.add.image(798, 567, 'hotellobby', 'midrailings')

        // fountain0001
        this.add.image(818, 500, 'hotellobby', 'fountain0001')

        // frontchairs
        this.add.image(396, 800, 'hotellobby', 'frontchairs')

        // fronttable
        this.add.image(381, 847, 'hotellobby', 'fronttable')

        // lamp
        this.add.image(1509, 841, 'hotellobby', 'lamp')

        // leftplant
        this.add.image(669, 225, 'hotellobby', 'leftplant')

        // leftpillar
        this.add.image(613, 189, 'hotellobby', 'leftpillar')

        // petshop_pillar
        this.add.image(1447, 347, 'hotellobby', 'petshop-pillar')

        // coatcheck_sign_en
        this.add.image(1200, 96, 'hotellobby', 'coatcheck-sign-en')

        // petshop_door
        this.add.image(1476, 351, 'hotellobby', 'petshop-door')

        // petshop_sign_en
        this.add.image(1459, 273, 'hotellobby', 'petshop-sign-en')

        // plant
        this.add.image(1523, 497, 'hotellobby', 'plant')

        // reception_chair
        this.add.image(400, 295, 'hotellobby', 'reception-chair')

        // reception_desk
        this.add.image(431, 310, 'hotellobby', 'reception-desk')

        // reception_sign_en
        this.add.image(363, 114, 'hotellobby', 'reception-sign-en')

        // elevator0001
        this.add.image(50, 345, 'hotellobby', 'elevator0001')

        // lanterns_left
        this.add.image(330, 90, 'hotellobby', 'lanterns-left')

        // lanterns_right
        this.add.image(1225, 91, 'hotellobby', 'lanterns-right')

        // rightplant
        this.add.image(901, 225, 'hotellobby', 'rightplant')

        // rightpillar
        this.add.image(961, 189, 'hotellobby', 'rightpillar')

        // sofa
        this.add.image(797, 837, 'hotellobby', 'sofa')

        // tasks
        this.add.image(798, 650, 'hotellobby', 'tasks')

        // frontpod
        this.add.image(1257, 805, 'hotellobby', 'frontpod')

        // bar_sign
        this.add.image(197, 579, 'hotellobby', 'bar-sign')

        // bar_front
        this.add.image(175, 673, 'hotellobby', 'bar-front')

        // bar
        this.add.image(47, 650, 'hotellobby', 'bar')

        // fruitbox
        this.add.image(69, 814, 'hotellobby', 'fruitbox')

        // fruits
        this.add.image(38, 894, 'hotellobby', 'fruits')

        // fg
        this.add.image(782, 885, 'hotellobby', 'fg')

        // interface
        this.add.image(1424, 870, 'hotellobby', 'interface')

        // lists
        const sort = []

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /** @type {Array<any>} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
