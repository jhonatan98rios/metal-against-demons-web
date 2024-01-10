export class EventManager {
    private listeners: { [key: string]: ((...args: any[]) => void)[] } = {};
    private static instance: EventManager;

    public static getInstance(): EventManager {
        if (!EventManager.instance) {
            EventManager.instance = new EventManager()
        }

        return EventManager.instance;
    }

    on(event: string, callback: (...args: any[]) => void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }

    emit(event: string, ...args: any[]) {
        const callbacks = this.listeners[event];
        if (callbacks) {
            callbacks.forEach((callback) => {
                callback(...args);
            });
        }
    }
}
