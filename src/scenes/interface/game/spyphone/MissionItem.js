import BaseContainer from '@scenes/base/BaseContainer'
import {SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class MissionItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        this.visible = false

        // completion
        const completion = scene.add.text(365, 61, '', {})
        completion.setOrigin(1, 0.5)
        completion.alpha = 0.8
        completion.alphaTopLeft = 0.8
        completion.alphaTopRight = 0.8
        completion.alphaBottomLeft = 0.8
        completion.alphaBottomRight = 0.8
        completion.text = '88/888'
        completion.setStyle({align: 'right', color: '#7eecdeff', fixedWidth: 365, fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '24px', fontStyle: 'bold'})
        this.add(completion)

        // title
        const title = scene.add.text(0, 0, '', {})
        title.alpha = 0.8
        title.alphaTopLeft = 0.8
        title.alphaTopRight = 0.8
        title.alphaBottomLeft = 0.8
        title.alphaBottomRight = 0.8
        title.text = 'Challenge goes here. Explain challenge clearly but concisely.'
        title.setStyle({color: '#7eecdeff', fixedWidth: 365, fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '24px', fontStyle: 'bold'})
        title.setWordWrapWidth(365)
        this.add(title)

        // reward
        const reward = scene.add.text(0, 61, '', {})
        reward.setOrigin(0, 0.5)
        reward.alpha = 0.8
        reward.alphaTopLeft = 0.8
        reward.alphaTopRight = 0.8
        reward.alphaBottomLeft = 0.8
        reward.alphaBottomRight = 0.8
        reward.text = '5'
        reward.setStyle({color: '#7eecdeff', fixedWidth: 365, fontFamily: 'cpRasterGothTwentyEightCnd', fontSize: '24px', fontStyle: 'bold'})
        reward.setPadding({left: 23})
        this.add(reward)

        // currency_icon
        const currency_icon = scene.add.image(10, 62, 'epfphone', 'gear-btn-hover')
        currency_icon.scaleX = 0.12166123706214643
        currency_icon.scaleY = 0.12166123706214643
        currency_icon.alpha = 0.8
        currency_icon.alphaTopLeft = 0.8
        currency_icon.alphaTopRight = 0.8
        currency_icon.alphaBottomLeft = 0.8
        currency_icon.alphaBottomRight = 0.8
        this.add(currency_icon)

        this.completion = completion
        this.title = title
        this.reward = reward

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Text} */
    completion
    /** @type {Phaser.GameObjects.Text} */
    title
    /** @type {Phaser.GameObjects.Text} */
    reward
    /** @type {number} */
    challengeID = 0
    /** @type {boolean} */
    isGlobal = false

    /* START-USER-CODE */

    createItem() {
        let challenge = this.crumbs.challenges[this.isGlobal ? 'global' : 'daily'][this.challengeID]
        this.title.text = challenge.info
        this.completion.text = `${this.isComplete ? challenge.completion : this.challengeCompletion}/${challenge.completion}`
        this.reward.text = challenge.reward
        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
