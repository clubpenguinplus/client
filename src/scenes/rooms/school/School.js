import RoomScene from '@scenes/rooms/RoomScene'

import {LocalisedSprite} from '@components/components'
/* START OF COMPILED CODE */

export default class School extends RoomScene {
    constructor() {
        super('School')

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('school-pack', 'client/media/rooms/school/school-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'school', 'bg')
        bg.setOrigin(0, 0)

        // banner0001
        this.add.image(1154, 185, 'school', 'banner0001')

        // banner20001
        this.add.image(1153, 109, 'school', 'banner20001')

        // text_en
        const text_en = this.add.image(1149, 110, 'school', 'text-en')

        // table3
        this.add.image(373, 364, 'school', 'table3')

        // chair_4
        this.add.image(304, 431, 'school', 'chair8')

        // chair_5
        this.add.image(402, 432, 'school', 'chair8')

        // chair_7
        this.add.image(381, 401, 'school', 'chair2')

        // chair_6
        this.add.image(281, 398, 'school', 'chair2')

        // chair8
        this.add.image(367, 565, 'school', 'chair8')

        // table4
        this.add.image(314, 486, 'school', 'table4')

        // table6
        this.add.image(707, 271, 'school', 'table6')

        // table5
        this.add.image(651, 310, 'school', 'table5')

        // table2
        this.add.image(661, 377, 'school', 'table2')

        // chair9
        this.add.image(240, 554, 'school', 'chair9')

        // chair2
        this.add.image(343, 535, 'school', 'chair2')

        // chair7
        this.add.image(710, 433, 'school', 'chair7')

        // chair3
        this.add.image(716, 405, 'school', 'chair3')

        // chair_3
        this.add.image(592, 452, 'school', 'chair4')

        // chair_2
        this.add.image(605, 407, 'school', 'chair1')

        // chair5
        this.add.image(709, 549, 'school', 'chair5')

        // table1
        this.add.image(658, 475, 'school', 'table1')

        // chair_1
        this.add.image(706, 530, 'school', 'chair1')

        // chair4
        this.add.image(598, 549, 'school', 'chair4')

        // chair1
        this.add.image(595, 529, 'school', 'chair1')

        // counter
        this.add.image(1218, 290, 'school', 'counter')

        // cafeteria
        this.add.image(1294, 336, 'school', 'cafeteria')

        // overhang_0001
        this.add.image(1347, 129, 'school', 'overhang_0001')

        // fg2_png_png
        this.add.image(743, 344, 'school', 'fg2.png.png')

        // fg3
        this.add.image(764, 415, 'school', 'fg3')

        // chair
        this.add.image(1325, 506, 'school', 'chair13')

        // fg
        this.add.image(753, 484, 'school', 'fg')

        // door
        this.add.image(1479, 606, 'school', 'door')

        // door_1
        const door_1 = this.add.image(52, 607, 'school', 'door')
        door_1.flipX = true

        // mic
        this.add.image(1077, 276, 'school', 'mic')

        // chair10
        this.add.image(1005, 373, 'school', 'chair10')

        // chair13
        this.add.image(1209, 369, 'school', 'chair13')

        // table7
        this.add.image(1103, 402, 'school', 'table7')

        // table8
        this.add.image(1216, 545, 'school', 'table8')

        // chair12
        this.add.image(1072, 593, 'school', 'chair12')

        // chair11
        this.add.image(1048, 560, 'school', 'chair11')

        // rosette_0001
        this.add.image(859, 324, 'school', 'rosette_0001')

        // photo_0001
        this.add.image(858, 419, 'school', 'photo_0001')

        // hanginglights
        this.add.image(1132, 7, 'school', 'hanginglights')

        // text_en (components)
        new LocalisedSprite(text_en)

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
