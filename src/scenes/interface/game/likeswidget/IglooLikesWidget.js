// You can write more code here

/* START OF COMPILED CODE */

export default class IglooLikesWidget extends Phaser.Scene {
    constructor() {
        super('IglooLikesWidget')

        /** @type {NinePatchContainer} */
        this.likeWindow

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorCreate() {
        // likeWindow
        const likeWindow = this.add.ninePatchContainer(1503, 97, 194, 60, 'main', 'like-window')
        likeWindow.marginLeft = 5
        likeWindow.marginTop = 5
        likeWindow.marginRight = 5
        likeWindow.marginBottom = 5
        likeWindow.ninePatchContainerOriginX = 1
        likeWindow.ninePatchContainerOriginY = 0

        // likeButton
        const likeButton = this.add.image(1406, 60, 'main', 'like-button')

        // likeTxt
        const likeTxt = this.add.text(1365, 61, '', {})
        likeTxt.setOrigin(0.5, 0.5)
        likeTxt.text = 'Like'
        likeTxt.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '32px', fontStyle: 'bold', 'shadow.offsetY': -1, 'shadow.color': '#0e248cff', 'shadow.blur': 2, 'shadow.fill': true})

        // likeNum
        const likeNum = this.add.text(1460, 61, '', {})
        likeNum.setOrigin(0.5, 0.5)
        likeNum.text = '999'
        likeNum.setStyle({color: '#ffffffff', fontFamily: 'Burbank Small', fontSize: '28px', 'shadow.color': '#000000ff'})

        // likeWindow (components)
        const likeWindowButton = new Button(likeWindow)
        likeWindowButton.spriteName = 'like-window'

        // likeButton (components)
        const likeButtonButton = new Button(likeButton)
        likeButtonButton.spriteName = 'like-button'

        this.likeWindow = likeWindow

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    create() {
        this.editorCreate()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
