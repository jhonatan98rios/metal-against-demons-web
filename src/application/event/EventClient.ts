import { EventManager } from "./EventManager";

export class EventClient {

    eventManager: EventManager

    constructor() {
        this.eventManager = EventManager.getInstance()

        this.createEventListeners()
    }

    createEventListeners() {
        return
    }
}