type ObserverCallback = (propertyPath: string) => void;

export class Observer {

    static observe(obj: any, callback: ObserverCallback, propertyPath: string = '') {
        if (typeof obj !== 'object' || obj === null) {
            return;
        }

        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                let value = obj[prop];
                let path = propertyPath ? `${propertyPath}.${prop}` : prop;

                Object.defineProperty(obj, prop, {
                    get: function () {
                        return value;
                    },
                    set: function (newValue) {
                        value = newValue;
                        callback(path);

                        // Recursively observe sub-objects
                        Observer.observe(newValue, callback, path);
                    },
                    enumerable: true,
                    configurable: true,
                });

                // Recursively observe sub-objects
                Observer.observe(value, callback, path);
            }
        }
    }
}