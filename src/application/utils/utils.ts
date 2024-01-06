export type UUID = string

export function generateUUID(): UUID {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16) as UUID
    });
}

export type Vector2D = {x: number, y: number}
export type Element2D = Vector2D & { width: number, height: number }

export function isThereIntersection(elementA: Element2D, elementB:Element2D) {
    const aLeft = elementA.x;
    const aRight = elementA.x + elementA.width;
    const aTop = elementA.y;
    const aBottom = elementA.y + elementA.height;
    
    const bLeft = elementB.x;
    const bRight = elementB.x + elementB.width;
    const bTop = elementB.y;
    const bBottom = elementB.y + elementB.height;

    return (aLeft <= bRight && aRight >= bLeft && aTop <= bBottom && aBottom >= bTop);
}

export function calculate2DMovement(body: Vector2D, target: Vector2D): Vector2D {
    const deltaX = target.x - body.x
    const deltaY = target.y - body.y
    const distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY))

    return {
        x: deltaX / distance,
        y: deltaY / distance
    }
}
