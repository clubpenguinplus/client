import GameScene from '../GameScene'
import {SimpleButton, Button, LocalisedString, Interactive} from '@scenes/components/components'

/* START OF COMPILED CODE */

export default class SoundStudio extends GameScene {
    constructor() {
        super('SoundStudio')

        /* START-USER-CTR-CODE */
        this.music = 'soundstudio-menu'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('soundstudio-pack', 'client/media/games/soundstudio/soundstudio-pack.json')
    }

    /** @returns {void} */
    _create() {
        // waveforms_bg
        this.add.image(911, 79, 'soundstudio', 'timer')

        // waveforms
        const waveforms = this.add.container(327, 73)

        // waveforms_one0001
        const waveforms_one0001 = this.add.sprite(-1225.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/one0001')
        waveforms_one0001.tintFill = true
        waveforms_one0001.tintTopLeft = 16777062
        waveforms_one0001.tintTopRight = 16777062
        waveforms_one0001.tintBottomLeft = 16777062
        waveforms_one0001.tintBottomRight = 16777062
        waveforms.add(waveforms_one0001)

        // waveforms_two0001
        const waveforms_two0001 = this.add.sprite(-1194.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/two0001')
        waveforms_two0001.tintFill = true
        waveforms_two0001.tintTopLeft = 16777062
        waveforms_two0001.tintTopRight = 16777062
        waveforms_two0001.tintBottomLeft = 16777062
        waveforms_two0001.tintBottomRight = 16777062
        waveforms.add(waveforms_two0001)

        // waveforms_three0001
        const waveforms_three0001 = this.add.sprite(-1163.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/three0001')
        waveforms_three0001.tintFill = true
        waveforms_three0001.tintTopLeft = 16777062
        waveforms_three0001.tintTopRight = 16777062
        waveforms_three0001.tintBottomLeft = 16777062
        waveforms_three0001.tintBottomRight = 16777062
        waveforms.add(waveforms_three0001)

        // waveforms_four0001
        const waveforms_four0001 = this.add.sprite(-1131.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/four0001')
        waveforms_four0001.tintFill = true
        waveforms_four0001.tintTopLeft = 16777062
        waveforms_four0001.tintTopRight = 16777062
        waveforms_four0001.tintBottomLeft = 16777062
        waveforms_four0001.tintBottomRight = 16777062
        waveforms.add(waveforms_four0001)

        // waveforms_five0001
        const waveforms_five0001 = this.add.sprite(-1101.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/five0001')
        waveforms_five0001.tintFill = true
        waveforms_five0001.tintTopLeft = 16777062
        waveforms_five0001.tintTopRight = 16777062
        waveforms_five0001.tintBottomLeft = 16777062
        waveforms_five0001.tintBottomRight = 16777062
        waveforms.add(waveforms_five0001)

        // waveforms_six0001
        const waveforms_six0001 = this.add.sprite(-1069.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/six0001')
        waveforms_six0001.tintFill = true
        waveforms_six0001.tintTopLeft = 16777062
        waveforms_six0001.tintTopRight = 16777062
        waveforms_six0001.tintBottomLeft = 16777062
        waveforms_six0001.tintBottomRight = 16777062
        waveforms.add(waveforms_six0001)

        // waveforms_seven0001
        const waveforms_seven0001 = this.add.sprite(-1039.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/seven0001')
        waveforms_seven0001.tintFill = true
        waveforms_seven0001.tintTopLeft = 16777062
        waveforms_seven0001.tintTopRight = 16777062
        waveforms_seven0001.tintBottomLeft = 16777062
        waveforms_seven0001.tintBottomRight = 16777062
        waveforms.add(waveforms_seven0001)

        // waveforms_eight0001
        const waveforms_eight0001 = this.add.sprite(-1007.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/eight0001')
        waveforms_eight0001.tintFill = true
        waveforms_eight0001.tintTopLeft = 16777062
        waveforms_eight0001.tintTopRight = 16777062
        waveforms_eight0001.tintBottomLeft = 16777062
        waveforms_eight0001.tintBottomRight = 16777062
        waveforms.add(waveforms_eight0001)

        // waveforms_nine0001
        const waveforms_nine0001 = this.add.sprite(-977.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/nine0001')
        waveforms_nine0001.tintFill = true
        waveforms_nine0001.tintTopLeft = 16777062
        waveforms_nine0001.tintTopRight = 16777062
        waveforms_nine0001.tintBottomLeft = 16777062
        waveforms_nine0001.tintBottomRight = 16777062
        waveforms.add(waveforms_nine0001)

        // waveforms_ten0001
        const waveforms_ten0001 = this.add.sprite(-946.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/ten0001')
        waveforms_ten0001.tintFill = true
        waveforms_ten0001.tintTopLeft = 16777062
        waveforms_ten0001.tintTopRight = 16777062
        waveforms_ten0001.tintBottomLeft = 16777062
        waveforms_ten0001.tintBottomRight = 16777062
        waveforms.add(waveforms_ten0001)

        // waveforms_eleven0001
        const waveforms_eleven0001 = this.add.sprite(-915.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/eleven0001')
        waveforms_eleven0001.tintFill = true
        waveforms_eleven0001.tintTopLeft = 16777062
        waveforms_eleven0001.tintTopRight = 16777062
        waveforms_eleven0001.tintBottomLeft = 16777062
        waveforms_eleven0001.tintBottomRight = 16777062
        waveforms.add(waveforms_eleven0001)

        // waveforms_twelve0001
        const waveforms_twelve0001 = this.add.sprite(-884.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twelve0001')
        waveforms_twelve0001.tintFill = true
        waveforms_twelve0001.tintTopLeft = 16777062
        waveforms_twelve0001.tintTopRight = 16777062
        waveforms_twelve0001.tintBottomLeft = 16777062
        waveforms_twelve0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twelve0001)

        // waveforms_thirteen0001
        const waveforms_thirteen0001 = this.add.sprite(-853.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/thirteen0001')
        waveforms_thirteen0001.tintFill = true
        waveforms_thirteen0001.tintTopLeft = 16777062
        waveforms_thirteen0001.tintTopRight = 16777062
        waveforms_thirteen0001.tintBottomLeft = 16777062
        waveforms_thirteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirteen0001)

        // waveforms_fourteen0001
        const waveforms_fourteen0001 = this.add.sprite(-822.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/fourteen0001')
        waveforms_fourteen0001.tintFill = true
        waveforms_fourteen0001.tintTopLeft = 16777062
        waveforms_fourteen0001.tintTopRight = 16777062
        waveforms_fourteen0001.tintBottomLeft = 16777062
        waveforms_fourteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_fourteen0001)

        // waveforms_fifteen0001
        const waveforms_fifteen0001 = this.add.sprite(-790.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/fifteen0001')
        waveforms_fifteen0001.tintFill = true
        waveforms_fifteen0001.tintTopLeft = 16777062
        waveforms_fifteen0001.tintTopRight = 16777062
        waveforms_fifteen0001.tintBottomLeft = 16777062
        waveforms_fifteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_fifteen0001)

        // waveforms_sixteen0001
        const waveforms_sixteen0001 = this.add.sprite(-760.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/sixteen0001')
        waveforms_sixteen0001.tintFill = true
        waveforms_sixteen0001.tintTopLeft = 16777062
        waveforms_sixteen0001.tintTopRight = 16777062
        waveforms_sixteen0001.tintBottomLeft = 16777062
        waveforms_sixteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_sixteen0001)

        // waveforms_seventeen0001
        const waveforms_seventeen0001 = this.add.sprite(-728.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/seventeen0001')
        waveforms_seventeen0001.tintFill = true
        waveforms_seventeen0001.tintTopLeft = 16777062
        waveforms_seventeen0001.tintTopRight = 16777062
        waveforms_seventeen0001.tintBottomLeft = 16777062
        waveforms_seventeen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_seventeen0001)

        // waveforms_eighteen0001
        const waveforms_eighteen0001 = this.add.sprite(-698.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/eighteen0001')
        waveforms_eighteen0001.tintFill = true
        waveforms_eighteen0001.tintTopLeft = 16777062
        waveforms_eighteen0001.tintTopRight = 16777062
        waveforms_eighteen0001.tintBottomLeft = 16777062
        waveforms_eighteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_eighteen0001)

        // waveforms_nineteen0001
        const waveforms_nineteen0001 = this.add.sprite(-666.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/nineteen0001')
        waveforms_nineteen0001.tintFill = true
        waveforms_nineteen0001.tintTopLeft = 16777062
        waveforms_nineteen0001.tintTopRight = 16777062
        waveforms_nineteen0001.tintBottomLeft = 16777062
        waveforms_nineteen0001.tintBottomRight = 16777062
        waveforms.add(waveforms_nineteen0001)

        // waveforms_twenty0001
        const waveforms_twenty0001 = this.add.sprite(-636.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twenty0001')
        waveforms_twenty0001.tintFill = true
        waveforms_twenty0001.tintTopLeft = 16777062
        waveforms_twenty0001.tintTopRight = 16777062
        waveforms_twenty0001.tintBottomLeft = 16777062
        waveforms_twenty0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twenty0001)

        // waveforms_twentyone0001
        const waveforms_twentyone0001 = this.add.sprite(-605.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentyone0001')
        waveforms_twentyone0001.tintFill = true
        waveforms_twentyone0001.tintTopLeft = 16777062
        waveforms_twentyone0001.tintTopRight = 16777062
        waveforms_twentyone0001.tintBottomLeft = 16777062
        waveforms_twentyone0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentyone0001)

        // waveforms_twentytwo0001
        const waveforms_twentytwo0001 = this.add.sprite(-574.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentytwo0001')
        waveforms_twentytwo0001.tintFill = true
        waveforms_twentytwo0001.tintTopLeft = 16777062
        waveforms_twentytwo0001.tintTopRight = 16777062
        waveforms_twentytwo0001.tintBottomLeft = 16777062
        waveforms_twentytwo0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentytwo0001)

        // waveforms_twentythree0001
        const waveforms_twentythree0001 = this.add.sprite(-543.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentythree0001')
        waveforms_twentythree0001.tintFill = true
        waveforms_twentythree0001.tintTopLeft = 16777062
        waveforms_twentythree0001.tintTopRight = 16777062
        waveforms_twentythree0001.tintBottomLeft = 16777062
        waveforms_twentythree0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentythree0001)

        // waveforms_twentyfour0001
        const waveforms_twentyfour0001 = this.add.sprite(-511.01852779978276, 4.9986155230924965, 'soundstudio', 'waveforms/twentyfour0001')
        waveforms_twentyfour0001.tintFill = true
        waveforms_twentyfour0001.tintTopLeft = 16777062
        waveforms_twentyfour0001.tintTopRight = 16777062
        waveforms_twentyfour0001.tintBottomLeft = 16777062
        waveforms_twentyfour0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentyfour0001)

        // waveforms_twentyfive0001
        const waveforms_twentyfive0001 = this.add.sprite(-481.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentyfive0001')
        waveforms_twentyfive0001.tintFill = true
        waveforms_twentyfive0001.tintTopLeft = 16777062
        waveforms_twentyfive0001.tintTopRight = 16777062
        waveforms_twentyfive0001.tintBottomLeft = 16777062
        waveforms_twentyfive0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentyfive0001)

        // waveforms_twentysix0001
        const waveforms_twentysix0001 = this.add.sprite(-449.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentysix0001')
        waveforms_twentysix0001.tintFill = true
        waveforms_twentysix0001.tintTopLeft = 16777062
        waveforms_twentysix0001.tintTopRight = 16777062
        waveforms_twentysix0001.tintBottomLeft = 16777062
        waveforms_twentysix0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentysix0001)

        // waveforms_twentyseven0001
        const waveforms_twentyseven0001 = this.add.sprite(-419.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentyseven0001')
        waveforms_twentyseven0001.tintFill = true
        waveforms_twentyseven0001.tintTopLeft = 16777062
        waveforms_twentyseven0001.tintTopRight = 16777062
        waveforms_twentyseven0001.tintBottomLeft = 16777062
        waveforms_twentyseven0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentyseven0001)

        // waveforms_twentyeight0001
        const waveforms_twentyeight0001 = this.add.sprite(-387.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentyeight0001')
        waveforms_twentyeight0001.tintFill = true
        waveforms_twentyeight0001.tintTopLeft = 16777062
        waveforms_twentyeight0001.tintTopRight = 16777062
        waveforms_twentyeight0001.tintBottomLeft = 16777062
        waveforms_twentyeight0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentyeight0001)

        // waveforms_twentynine0001
        const waveforms_twentynine0001 = this.add.sprite(-356.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/twentynine0001')
        waveforms_twentynine0001.tintFill = true
        waveforms_twentynine0001.tintTopLeft = 16777062
        waveforms_twentynine0001.tintTopRight = 16777062
        waveforms_twentynine0001.tintBottomLeft = 16777062
        waveforms_twentynine0001.tintBottomRight = 16777062
        waveforms.add(waveforms_twentynine0001)

        // waveforms_thirty0001
        const waveforms_thirty0001 = this.add.sprite(-325.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/thirty0001')
        waveforms_thirty0001.tintFill = true
        waveforms_thirty0001.tintTopLeft = 16777062
        waveforms_thirty0001.tintTopRight = 16777062
        waveforms_thirty0001.tintBottomLeft = 16777062
        waveforms_thirty0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirty0001)

        // waveforms_thirtyone0001
        const waveforms_thirtyone0001 = this.add.sprite(-294.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/thirtyone0001')
        waveforms_thirtyone0001.tintFill = true
        waveforms_thirtyone0001.tintTopLeft = 16777062
        waveforms_thirtyone0001.tintTopRight = 16777062
        waveforms_thirtyone0001.tintBottomLeft = 16777062
        waveforms_thirtyone0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtyone0001)

        // waveforms_thirtytwo0001
        const waveforms_thirtytwo0001 = this.add.sprite(-263.0185277997828, 4.9986155230924965, 'soundstudio', 'waveforms/thirtytwo0001')
        waveforms_thirtytwo0001.tintFill = true
        waveforms_thirtytwo0001.tintTopLeft = 16777062
        waveforms_thirtytwo0001.tintTopRight = 16777062
        waveforms_thirtytwo0001.tintBottomLeft = 16777062
        waveforms_thirtytwo0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtytwo0001)

        // waveforms_thirtythree0001
        const waveforms_thirtythree0001 = this.add.sprite(-231.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtythree0001')
        waveforms_thirtythree0001.tintFill = true
        waveforms_thirtythree0001.tintTopLeft = 16777062
        waveforms_thirtythree0001.tintTopRight = 16777062
        waveforms_thirtythree0001.tintBottomLeft = 16777062
        waveforms_thirtythree0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtythree0001)

        // waveforms_thirtyfour0001
        const waveforms_thirtyfour0001 = this.add.sprite(-201.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtyfour0001')
        waveforms_thirtyfour0001.tintFill = true
        waveforms_thirtyfour0001.tintTopLeft = 16777062
        waveforms_thirtyfour0001.tintTopRight = 16777062
        waveforms_thirtyfour0001.tintBottomLeft = 16777062
        waveforms_thirtyfour0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtyfour0001)

        // waveforms_thirtyfive0001
        const waveforms_thirtyfive0001 = this.add.sprite(-169.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtyfive0001')
        waveforms_thirtyfive0001.tintFill = true
        waveforms_thirtyfive0001.tintTopLeft = 16777062
        waveforms_thirtyfive0001.tintTopRight = 16777062
        waveforms_thirtyfive0001.tintBottomLeft = 16777062
        waveforms_thirtyfive0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtyfive0001)

        // waveforms_thirtysix0001
        const waveforms_thirtysix0001 = this.add.sprite(-139.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtysix0001')
        waveforms_thirtysix0001.tintFill = true
        waveforms_thirtysix0001.tintTopLeft = 16777062
        waveforms_thirtysix0001.tintTopRight = 16777062
        waveforms_thirtysix0001.tintBottomLeft = 16777062
        waveforms_thirtysix0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtysix0001)

        // waveforms_thirtyseven0001
        const waveforms_thirtyseven0001 = this.add.sprite(-107.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtyseven0001')
        waveforms_thirtyseven0001.tintFill = true
        waveforms_thirtyseven0001.tintTopLeft = 16777062
        waveforms_thirtyseven0001.tintTopRight = 16777062
        waveforms_thirtyseven0001.tintBottomLeft = 16777062
        waveforms_thirtyseven0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtyseven0001)

        // waveforms_thirtyeight0001
        const waveforms_thirtyeight0001 = this.add.sprite(-77.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtyeight0001')
        waveforms_thirtyeight0001.tintFill = true
        waveforms_thirtyeight0001.tintTopLeft = 16777062
        waveforms_thirtyeight0001.tintTopRight = 16777062
        waveforms_thirtyeight0001.tintBottomLeft = 16777062
        waveforms_thirtyeight0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtyeight0001)

        // waveforms_thirtynine0001
        const waveforms_thirtynine0001 = this.add.sprite(-45.01852779978282, 4.9986155230924965, 'soundstudio', 'waveforms/thirtynine0001')
        waveforms_thirtynine0001.tintFill = true
        waveforms_thirtynine0001.tintTopLeft = 16777062
        waveforms_thirtynine0001.tintTopRight = 16777062
        waveforms_thirtynine0001.tintBottomLeft = 16777062
        waveforms_thirtynine0001.tintBottomRight = 16777062
        waveforms.add(waveforms_thirtynine0001)

        // waveforms_forty0001
        const waveforms_forty0001 = this.add.sprite(-15, 5, 'soundstudio', 'waveforms/forty0001')
        waveforms_forty0001.tintFill = true
        waveforms_forty0001.tintTopLeft = 16777062
        waveforms_forty0001.tintTopRight = 16777062
        waveforms_forty0001.tintBottomLeft = 16777062
        waveforms_forty0001.tintBottomRight = 16777062
        waveforms.add(waveforms_forty0001)

        // overlay
        this.add.image(911, 79, 'soundstudio', 'overlay')

        // bg
        this.add.image(760, 480, 'soundstudio', 'bg')

        // currentTime
        const currentTime = this.add.text(327, 67, '', {})
        currentTime.setOrigin(0.49997517505489686, 2.2659405008227753)
        currentTime.text = '0:00'
        currentTime.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '24px', fontStyle: 'bold'})

        // dividers
        this.add.image(784, 568, 'soundstudio', 'dividers')

        // recordBtn
        const recordBtn = this.add.image(148, 149, 'soundstudio', 'start_btn')
        recordBtn.angle = 0.20000000000004547

        // pop_btn
        const pop_btn = this.add.image(150, 360, 'soundstudio', 'pop_btn0001')

        // rock_btn
        const rock_btn = this.add.image(150, 460, 'soundstudio', 'rock_btn0001')

        // dance_btn
        const dance_btn = this.add.image(150, 560, 'soundstudio', 'dance_btn0001')

        // dubstep_btn
        const dubstep_btn = this.add.image(150, 660, 'soundstudio', 'dubstep_btn0001')

        // spooky_btn
        const spooky_btn = this.add.image(150, 760, 'soundstudio', 'spooky_btn0001')

        // record_txt
        const record_txt = this.add.text(148, 149, '', {})
        record_txt.setOrigin(0.5, 0.5)
        record_txt.text = 'Record'
        record_txt.setStyle({color: '#BDFFC4', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // pop_txt
        const pop_txt = this.add.text(150, 356, '', {})
        pop_txt.setOrigin(0.5, 0.5)
        pop_txt.text = 'Pop'
        pop_txt.setStyle({color: '#EEDCFF', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // record_txt_2
        const record_txt_2 = this.add.text(150, 456, '', {})
        record_txt_2.setOrigin(0.5, 0.5)
        record_txt_2.text = 'Rock'
        record_txt_2.setStyle({color: '#D5E6FF', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // record_txt_3
        const record_txt_3 = this.add.text(150, 556, '', {})
        record_txt_3.setOrigin(0.5, 0.5)
        record_txt_3.text = 'Dance'
        record_txt_3.setStyle({color: '#DAFFD8', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // record_txt_4
        const record_txt_4 = this.add.text(150, 656, '', {})
        record_txt_4.setOrigin(0.5, 0.5)
        record_txt_4.text = 'Dubstep'
        record_txt_4.setStyle({color: '#F2E0FF', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // record_txt_5
        const record_txt_5 = this.add.text(150, 756, '', {})
        record_txt_5.setOrigin(0.5, 0.5)
        record_txt_5.text = 'Spooky'
        record_txt_5.setStyle({color: '#9CEBE2', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // timeLeft
        const timeLeft = this.add.text(1446, 79, '', {})
        timeLeft.setOrigin(0.5, 0.5)
        timeLeft.text = '3:00'
        timeLeft.setStyle({color: '#7764a0ff', fontFamily: 'Burbank Small', fontSize: '35px', fontStyle: 'bold'})

        // record_txt_5_1_2
        const record_txt_5_1_2 = this.add.text(703, 198, '', {})
        record_txt_5_1_2.setOrigin(0.5, 0.5)
        record_txt_5_1_2.text = 'LOOPS'
        record_txt_5_1_2.setStyle({color: '#CCCCCC', fontFamily: 'Burbank Small', fontSize: '30px', fontStyle: 'bold'})

        // record_txt_5_1_2_1
        const record_txt_5_1_2_1 = this.add.text(1311, 198, '', {})
        record_txt_5_1_2_1.setOrigin(0.5, 0.5)
        record_txt_5_1_2_1.text = 'ONE-SHOTS'
        record_txt_5_1_2_1.setStyle({color: '#CCCCCC', fontFamily: 'Burbank Small', fontSize: '30px', fontStyle: 'bold'})

        // timeIndicator
        const timeIndicator = this.add.image(327, 76, 'soundstudio', 'time_indicator')
        timeIndicator.alpha = 0.5
        timeIndicator.alphaTopLeft = 0.5
        timeIndicator.alphaTopRight = 0.5
        timeIndicator.alphaBottomLeft = 0.5
        timeIndicator.alphaBottomRight = 0.5

        // buttons
        const buttons = this.add.container(406, 291)

        // sfx_lightblue0001
        const sfx_lightblue0001 = this.add.image(0, 0, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001)

        // sfx_purple0001
        const sfx_purple0001 = this.add.image(150, 0, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001)

        // sfx_green0001
        const sfx_green0001 = this.add.image(297, 0, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001)

        // sfx_yellow0001
        const sfx_yellow0001 = this.add.image(448, 0, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001)

        // sfx_pink0001
        const sfx_pink0001 = this.add.image(600, 0, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001)

        // sfx_darkblue_0001
        const sfx_darkblue_0001 = this.add.image(774, 148, 'soundstudio', 'sfx_darkblue_0001')
        buttons.add(sfx_darkblue_0001)

        // sfx_yellow0001_1
        const sfx_yellow0001_1 = this.add.image(774, 0, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_1)

        // sfx_pink0001_1
        const sfx_pink0001_1 = this.add.image(906, 0, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_1)

        // sfx_purple0001_1
        const sfx_purple0001_1 = this.add.image(1036, 0, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_1)

        // sfx_green0001_1
        const sfx_green0001_1 = this.add.image(906, 148, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_1)

        // sfx_yellow0001_2
        const sfx_yellow0001_2 = this.add.image(906, 289, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_2)

        // sfx_darkblue_0001_1
        const sfx_darkblue_0001_1 = this.add.image(1036, 289, 'soundstudio', 'sfx_darkblue_0001')
        buttons.add(sfx_darkblue_0001_1)

        // sfx_lightblue0001_1
        const sfx_lightblue0001_1 = this.add.image(1036, 148, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_1)

        // sfx_lightblue0001_2
        const sfx_lightblue0001_2 = this.add.image(0, 148, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2)

        // sfx_purple0001_2
        const sfx_purple0001_2 = this.add.image(150, 148, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2)

        // sfx_green0001_2
        const sfx_green0001_2 = this.add.image(297, 148, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_2)

        // sfx_yellow0001_3
        const sfx_yellow0001_3 = this.add.image(448, 148, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_3)

        // sfx_pink0001_2
        const sfx_pink0001_2 = this.add.image(600, 148, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_2)

        // sfx_pink0001_2_1
        const sfx_pink0001_2_1 = this.add.image(600, 289, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_2_1)

        // sfx_yellow0001_3_1
        const sfx_yellow0001_3_1 = this.add.image(448, 289, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_3_1)

        // sfx_green0001_2_1
        const sfx_green0001_2_1 = this.add.image(297, 289, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_2_1)

        // sfx_purple0001_2_1
        const sfx_purple0001_2_1 = this.add.image(150, 289, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2_1)

        // sfx_lightblue0001_2_1
        const sfx_lightblue0001_2_1 = this.add.image(0, 289, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2_1)

        // sfx_pink0001_2_1_1
        const sfx_pink0001_2_1_1 = this.add.image(600, 433, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_2_1_1)

        // sfx_yellow0001_3_1_1
        const sfx_yellow0001_3_1_1 = this.add.image(448, 433, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_3_1_1)

        // sfx_green0001_2_1_1
        const sfx_green0001_2_1_1 = this.add.image(297, 433, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_2_1_1)

        // sfx_purple0001_2_1_1
        const sfx_purple0001_2_1_1 = this.add.image(150, 433, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2_1_1)

        // sfx_lightblue0001_2_1_1
        const sfx_lightblue0001_2_1_1 = this.add.image(0, 433, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2_1_1)

        // sfx_pink0001_2_1_2
        const sfx_pink0001_2_1_2 = this.add.image(600, 577, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_2_1_2)

        // sfx_yellow0001_3_1_2
        const sfx_yellow0001_3_1_2 = this.add.image(448, 577, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_3_1_2)

        // sfx_green0001_2_1_2
        const sfx_green0001_2_1_2 = this.add.image(297, 577, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_2_1_2)

        // sfx_purple0001_2_1_2
        const sfx_purple0001_2_1_2 = this.add.image(150, 577, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2_1_2)

        // sfx_lightblue0001_2_1_2
        const sfx_lightblue0001_2_1_2 = this.add.image(0, 577, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2_1_2)

        // sfx_purple0001_2_1_1_1
        const sfx_purple0001_2_1_1_1 = this.add.image(774, 289, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2_1_1_1)

        // sfx_lightblue0001_2_1_1_1
        const sfx_lightblue0001_2_1_1_1 = this.add.image(774, 433, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2_1_1_1)

        // sfx_purple0001_2_1_1_1_1
        const sfx_purple0001_2_1_1_1_1 = this.add.image(1036, 433, 'soundstudio', 'sfx_purple0001')
        buttons.add(sfx_purple0001_2_1_1_1_1)

        // sfx_pink0001_2_1_1_1
        const sfx_pink0001_2_1_1_1 = this.add.image(906, 433, 'soundstudio', 'sfx_pink0001')
        buttons.add(sfx_pink0001_2_1_1_1)

        // sfx_green0001_2_1_2_1
        const sfx_green0001_2_1_2_1 = this.add.image(774, 577, 'soundstudio', 'sfx_green0001')
        buttons.add(sfx_green0001_2_1_2_1)

        // sfx_lightblue0001_2_1_1_1_1
        const sfx_lightblue0001_2_1_1_1_1 = this.add.image(1036, 577, 'soundstudio', 'sfx_lightblue0001')
        buttons.add(sfx_lightblue0001_2_1_1_1_1)

        // sfx_yellow0001_3_1_1_1
        const sfx_yellow0001_3_1_1_1 = this.add.image(906, 577, 'soundstudio', 'sfx_yellow0001')
        buttons.add(sfx_yellow0001_3_1_1_1)

        // icons
        const icons = this.add.image(922, 572, 'soundstudio', 'pop_icons')

        // menu
        const menu = this.add.container(750, 165)
        menu.visible = false

        // menu_bg
        const menu_bg = this.add.image(10, 315, 'soundstudio', 'menu/bg')
        menu.add(menu_bg)

        // logo_en
        const logo_en = this.add.image(0, 0, 'soundstudio', 'logo-en')
        menu.add(logo_en)

        // menu_big_btn
        const menu_big_btn = this.add.image(10, 317, 'soundstudio', 'menu/big_btn')
        menu.add(menu_big_btn)

        // close
        const close = this.add.image(1491, 22, 'soundstudio', 'close_btn')

        // lists
        const loopButtons = [sfx_lightblue0001, sfx_purple0001, sfx_green0001, sfx_yellow0001, sfx_pink0001, sfx_lightblue0001_2, sfx_purple0001_2, sfx_green0001_2, sfx_yellow0001_3, sfx_pink0001_2, sfx_lightblue0001_2_1, sfx_purple0001_2_1, sfx_green0001_2_1, sfx_yellow0001_3_1, sfx_pink0001_2_1, sfx_lightblue0001_2_1_1, sfx_purple0001_2_1_1, sfx_green0001_2_1_1, sfx_yellow0001_3_1_1, sfx_pink0001_2_1_1, sfx_lightblue0001_2_1_2, sfx_purple0001_2_1_2, sfx_green0001_2_1_2, sfx_yellow0001_3_1_2, sfx_pink0001_2_1_2]
        const wfList = [waveforms_forty0001, waveforms_thirtynine0001, waveforms_thirtyeight0001, waveforms_thirtyseven0001, waveforms_thirtysix0001, waveforms_thirtyfive0001, waveforms_thirtyfour0001, waveforms_thirtythree0001, waveforms_thirtytwo0001, waveforms_thirtyone0001, waveforms_thirty0001, waveforms_twentynine0001, waveforms_twentyeight0001, waveforms_twentyseven0001, waveforms_twentysix0001, waveforms_twentyfive0001, waveforms_twentyfour0001, waveforms_twentythree0001, waveforms_twentytwo0001, waveforms_twentyone0001, waveforms_twenty0001, waveforms_nineteen0001, waveforms_eighteen0001, waveforms_seventeen0001, waveforms_sixteen0001, waveforms_fifteen0001, waveforms_fourteen0001, waveforms_thirteen0001, waveforms_twelve0001, waveforms_eleven0001, waveforms_ten0001, waveforms_nine0001, waveforms_eight0001, waveforms_seven0001, waveforms_six0001, waveforms_five0001, waveforms_four0001, waveforms_three0001, waveforms_two0001, waveforms_one0001]
        const sfxButtons = [sfx_yellow0001_1, sfx_darkblue_0001, sfx_purple0001_2_1_1_1, sfx_lightblue0001_2_1_1_1, sfx_green0001_2_1_2_1, sfx_pink0001_1, sfx_green0001_1, sfx_yellow0001_2, sfx_pink0001_2_1_1_1, sfx_yellow0001_3_1_1_1, sfx_purple0001_1, sfx_lightblue0001_1, sfx_darkblue_0001_1, sfx_purple0001_2_1_1_1_1, sfx_lightblue0001_2_1_1_1_1]

        // recordBtn (components)
        const recordBtnButton = new Button(recordBtn)
        recordBtnButton.spriteName = 'start_btn'
        recordBtnButton.callback = () => this.onRecordPress()

        // pop_btn (components)
        const pop_btnSimpleButton = new SimpleButton(pop_btn)
        pop_btnSimpleButton.callback = () => this.changeMode('pop')

        // rock_btn (components)
        const rock_btnSimpleButton = new SimpleButton(rock_btn)
        rock_btnSimpleButton.callback = () => this.changeMode('rock')

        // dance_btn (components)
        const dance_btnSimpleButton = new SimpleButton(dance_btn)
        dance_btnSimpleButton.callback = () => this.changeMode('dance')

        // dubstep_btn (components)
        const dubstep_btnSimpleButton = new SimpleButton(dubstep_btn)
        dubstep_btnSimpleButton.callback = () => this.changeMode('dubstep')

        // spooky_btn (components)
        const spooky_btnSimpleButton = new SimpleButton(spooky_btn)
        spooky_btnSimpleButton.callback = () => this.changeMode('spooky')

        // record_txt (components)
        const record_txtLocalisedString = new LocalisedString(record_txt)
        record_txtLocalisedString.id = 'soundstudio_record'

        // pop_txt (components)
        const pop_txtLocalisedString = new LocalisedString(pop_txt)
        pop_txtLocalisedString.id = 'soundstudio_pop'

        // record_txt_2 (components)
        const record_txt_2LocalisedString = new LocalisedString(record_txt_2)
        record_txt_2LocalisedString.id = 'soundstudio_rock'

        // record_txt_3 (components)
        const record_txt_3LocalisedString = new LocalisedString(record_txt_3)
        record_txt_3LocalisedString.id = 'soundstudio_dance'

        // record_txt_4 (components)
        const record_txt_4LocalisedString = new LocalisedString(record_txt_4)
        record_txt_4LocalisedString.id = 'soundstudio_dubstep'

        // record_txt_5 (components)
        const record_txt_5LocalisedString = new LocalisedString(record_txt_5)
        record_txt_5LocalisedString.id = 'soundstudio_spooky'

        // record_txt_5_1_2 (components)
        const record_txt_5_1_2LocalisedString = new LocalisedString(record_txt_5_1_2)
        record_txt_5_1_2LocalisedString.id = 'soundstudio_loops'

        // record_txt_5_1_2_1 (components)
        const record_txt_5_1_2_1LocalisedString = new LocalisedString(record_txt_5_1_2_1)
        record_txt_5_1_2_1LocalisedString.id = 'soundstudio_oneshots'

        // menu_bg (components)
        new Interactive(menu_bg)

        // menu_big_btn (components)
        const menu_big_btnButton = new Button(menu_big_btn)
        menu_big_btnButton.spriteName = 'menu/big_btn'
        menu_big_btnButton.callback = () => this.startGame()

        // close (components)
        const closeButton = new Button(close)
        closeButton.spriteName = 'close_btn'
        closeButton.callback = () => this.quit()

        this.waveforms = waveforms
        this.currentTime = currentTime
        this.recordBtn = recordBtn
        this.pop_btn = pop_btn
        this.rock_btn = rock_btn
        this.dance_btn = dance_btn
        this.dubstep_btn = dubstep_btn
        this.spooky_btn = spooky_btn
        this.record_txt = record_txt
        this.timeLeft = timeLeft
        this.timeIndicator = timeIndicator
        this.icons = icons
        this.menu = menu
        this.loopButtons = loopButtons
        this.wfList = wfList
        this.sfxButtons = sfxButtons

        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Container} */
    waveforms
    /** @type {Phaser.GameObjects.Text} */
    currentTime
    /** @type {Phaser.GameObjects.Image} */
    recordBtn
    /** @type {Phaser.GameObjects.Image} */
    pop_btn
    /** @type {Phaser.GameObjects.Image} */
    rock_btn
    /** @type {Phaser.GameObjects.Image} */
    dance_btn
    /** @type {Phaser.GameObjects.Image} */
    dubstep_btn
    /** @type {Phaser.GameObjects.Image} */
    spooky_btn
    /** @type {Phaser.GameObjects.Text} */
    record_txt
    /** @type {Phaser.GameObjects.Text} */
    timeLeft
    /** @type {Phaser.GameObjects.Image} */
    timeIndicator
    /** @type {Phaser.GameObjects.Image} */
    icons
    /** @type {Phaser.GameObjects.Container} */
    menu
    /** @type {Phaser.GameObjects.Image[]} */
    loopButtons
    /** @type {Phaser.GameObjects.Sprite[]} */
    wfList
    /** @type {Phaser.GameObjects.Image[]} */
    sfxButtons

    /* START-USER-CODE */

    create() {
        super.create()
        this.menu.visible = true

        this.sfx = {}

        for (let i = 0; i < this.loopButtons.length; i++) {
            let loopButton = this.loopButtons[i]
            let loopButtonSimpleButton = new SimpleButton(loopButton)
            loopButtonSimpleButton.callback = () => this.playLoop(i)
        }

        for (let i = 0; i < this.sfxButtons.length; i++) {
            let sfxButton = this.sfxButtons[i]
            let sfxButtonSimpleButton = new SimpleButton(sfxButton)
            sfxButtonSimpleButton.callback = () => this.playSfx(i)
        }
    }

    startGame() {
        this.menu.visible = false
        this.changeMode('pop')
    }

    changeMode(mode) {
        this.sound.stopAll()
        this.nowPlaying = []
        for (let button of this.loopButtons) {
            button.setFrame(button.frame.name.slice(0, -1) + '1')
        }

        this.resetButtons()
        switch (mode) {
            case 'pop':
                this.pop_btn.setFrame('pop_btn0002')
                this.icons.setFrame('pop_icons')
                break
            case 'rock':
                this.rock_btn.setFrame('rock_btn0002')
                this.icons.setFrame('rock_icons')
                break
            case 'dance':
                this.dance_btn.setFrame('dance_btn0002')
                this.icons.setFrame('dance_icons')
                break
            case 'dubstep':
                this.dubstep_btn.setFrame('dubstep_btn0002')
                this.icons.setFrame('dubstep_icons')
                break
            case 'spooky':
                this.spooky_btn.setFrame('spooky_btn0002')
                this.icons.setFrame('spooky_icons')
                break
        }
        this.mode = mode

        for (let sound in this.sounds) {
            this.sounds[sound].stop()
        }

        this.sounds = {}
        for (let i = 0; i < this.loopButtons.length; i++) {
            this.sounds[i] = this.sound.add(`${mode}_${i + 1}`, {loop: true, mute: true})
            this.sounds[i].play()
        }
    }

    resetButtons() {
        this.pop_btn.setFrame('pop_btn0001')
        this.rock_btn.setFrame('rock_btn0001')
        this.dance_btn.setFrame('dance_btn0001')
        this.dubstep_btn.setFrame('dubstep_btn0001')
        this.spooky_btn.setFrame('spooky_btn0001')
    }

    playLoop(index) {
        // Sets forType to the lowest index of the type of loop we are playing
        let forType = index
        while (forType > 4) {
            forType -= 5
        }
        // Checks any loops of the same type are playing, and stops them if they are
        while (forType < 25) {
            if (forType == index) {
                forType += 5
                continue
            }
            if (this.nowPlaying.includes(`${this.mode}_${forType + 1}`)) {
                this.sounds[forType].setMute(true)
                this.loopButtons[forType].setFrame(this.loopButtons[forType].frame.name.slice(0, -1) + '1')
                this.nowPlaying.splice(this.nowPlaying.indexOf(`${this.mode}_${forType + 1}`), 1)
            }
            forType += 5
        }
        // If the loop is not playing, play it, otherwise, stop it
        if (this.nowPlaying.includes(`${this.mode}_${index + 1}`)) {
            this.sounds[index].setMute(true)
            this.loopButtons[index].setFrame(this.loopButtons[index].frame.name.slice(0, -1) + '1')
            this.nowPlaying.splice(this.nowPlaying.indexOf(`${this.mode}_${index + 1}`), 1)

            if (!this.recording) return
            this.sounds.push(`stoploop:${this.mode}_${index + 1}:${this.hdthsecs}`)
        } else {
            this.sounds[index].setMute(false)
            this.loopButtons[index].setFrame(this.loopButtons[index].frame.name.slice(0, -1) + '2')
            this.nowPlaying.push(`${this.mode}_${index + 1}`)

            if (!this.recording) return
            this.sounds.push(`playloop:${this.mode}_${index + 1}:${this.hdthsecs}`)
        }
    }

    playSfx(index) {
        // rate limits to once every 100ms
        if (this.sfxButtons[index].frame.name.slice(-1) == '2') return
        this.sfxButtons[index].setFrame(this.sfxButtons[index].frame.name.slice(0, -1) + '2')
        setTimeout(() => this.sfxButtons[index].setFrame(this.sfxButtons[index].frame.name.slice(0, -1) + '1'), 100)

        if (!this.sfx[`${this.mode}_sfx_${index + 1}`]) {
            this.sfx[`${this.mode}_sfx_${index + 1}`] = this.sound.add(`${this.mode}_sfx_${index + 1}`)
        } else {
            this.sound.stopByKey(`${this.mode}_sfx_${index + 1}`)
        }
        this.sfx[`${this.mode}_sfx_${index + 1}`].play()

        if (!this.recording) return

        this.sounds.push(`playsfx:${this.mode}_sfx_${index + 1}:${this.hdthsecs}`)
    }

    onRecordPress() {
        this.record_txt.text = '3'
        this.tweens.add({
            targets: this.record_txt,
            alpha: 0,
            duration: 1000,
            onComplete: () => {
                this.record_txt.text = '2'
                this.record_txt.alpha = 1
                this.tweens.add({
                    targets: this.record_txt,
                    alpha: 0,
                    duration: 1000,
                    onComplete: () => {
                        this.record_txt.text = '1'
                        this.record_txt.alpha = 1
                        this.tweens.add({
                            targets: this.record_txt,
                            alpha: 0,
                            duration: 1000,
                            onComplete: () => {
                                this.record_txt.text = 'Recording...'
                                this.record_txt.alpha = 1
                                this.startRecording()
                            },
                        })
                    },
                })
            },
        })
    }

    startRecording() {
        this.recording = true
        this.sounds = []
        for (let wf of this.wfList) {
            wf.play(`soundstudio-${wf.frame.name.slice(0, -4)}`)
        }
        this.timerInterval = setInterval(() => this.updateTimer(), 10)
        setInterval(() => this.updateWaveforms(), 170)
    }

    updateTimer() {
        if (!this.hdthsecs) this.hdthsecs = 0
        this.hdthsecs++

        this.currentTime.x = 327 + (this.hdthsecs / 18000) * 1168
        this.waveforms.x = 327 + (this.hdthsecs / 18000) * 1168
        this.timeIndicator.x = 327 + (this.hdthsecs / 18000) * 1168

        this.currentTime.text = `${this.secondsToTime(Math.floor(this.hdthsecs / 100))}`
        this.timeLeft.text = `${this.secondsToTime(180 - Math.floor(this.hdthsecs / 100))}`

        if (this.hdthsecs >= 18000) clearInterval(this.timerInterval)
    }

    secondsToTime(secs) {
        let minutes = Math.floor(secs / 60)
        let seconds = secs % 60
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`
    }

    quit() {
        for (let sound in this.sounds) {
            this.sounds[sound].stop()
        }

        this.sounds = {}

        if (this.menu.visible) {
            // return to dance club
            this.triggerRoom(120, 694, 300)
        } else {
            this.menu.visible = true
        }
    }

    updateWaveforms() {
        let ran = Phaser.Math.Between(0, 6)
        let color = '0xffffff'
        switch (ran) {
            case 0:
                color = '0xffff66'
                break
            case 1:
                color = '0xff9933'
                break
            case 2:
                color = '0xff3333'
                break
            case 3:
                color = '0xff0066'
                break
            case 4:
                color = '0x9966ff'
                break
            case 5:
                color = '0x00cccc'
                break
            case 6:
                color = '0x00ff33'
                break
        }

        for (let wf of this.wfList) {
            wf.tint = color
        }
    }

    stopRecording() {}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
