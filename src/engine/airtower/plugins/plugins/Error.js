import Plugin from '../Plugin'

export default class Error extends Plugin {
    constructor(airtower) {
        super(airtower)
        this.events = {
            e: this.error,
            cwe: this.closeWithError,
            w: this.warning,
            k: this.kick,
            b: this.ban,
        }

        // Todo: use error ids instead
        this.customHandlers = {
            'Sorry this room is currently full': () => this.fullRoom(),
            'Stealth mode enabled\nPlease relogin.': () => this.stealthEnabled(),
            'Stealth mode disabled\nPlease relogin.': () => this.stealthDisabled(),
        }
    }

    error(args) {
        if (args[0] in this.customHandlers) {
            return this.customHandlers[args[0]]()
        }

        this.interface.prompt.showError(this.shell.crumbs.getError(args[0]))
    }

    fullRoom() {
        this.interface.prompt.showError('Sorry this room is currently full', 'Okay', () => {
            this.interface.showInterface()

            this.interface.prompt.error.visible = false
            this.interface.main.map.visible = true
        })
    }

    stealthEnabled() {
        this.interface.prompt.showError('Stealth mode enabled\nPlease relogin.', 'Reload', () => window.location.reload())
    }

    stealthDisabled() {
        this.interface.prompt.showError('Stealth mode disabled\nPlease relogin.', 'Reload', () => window.location.reload())
    }

    closeWithError(args) {
        this.interface.prompt.showError(this.shell.crumbs.getError(args[0]), 'Reload', () => window.location.reload(), true)
        this.airtower.doNotReconnect = true
    }

    warning(args) {
        let reason = args[0]
        this.interface.prompt.showWarn('warn', reason)
    }

    kick(args) {
        let reason = args[0]
        this.interface.prompt.showWarn('kick', reason)
        this.airtower.doNotReconnect = true
    }

    ban(args) {
        this.interface.prompt.showWarn('ban', `${args[0]},${args[1]}`)
        this.airtower.doNotReconnect = true
    }
}
