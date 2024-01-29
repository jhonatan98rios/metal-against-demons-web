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
export type Body = Element2D & { id?: string, speed: number }

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


export function purePositionAnimation(player: Element2D, enemy: Body, enemies: Body[]) {

    if (!player || !enemies) return
    
    const { x: directionX, y: directionY } = calculate2DMovement(enemy, player)
    const velocityX = directionX * enemy.speed
    const velocityY = directionY * enemy.speed

    const newX = enemy.x + velocityX
    const newY = enemy.y + velocityY

    let shouldMoveX = !checkCollision(
        { ...enemy, x: newX } as Body, 
        enemies
    )
    let shouldMoveY = !checkCollision(
        { ...enemy, y: newY } as Body, 
        enemies
    )

    const x = shouldMoveX ? newX : enemy.x
    const y = shouldMoveY ? newY : enemy.y

    return { x, y }
}


function checkCollision(enemy: Body, enemies: Body[]) {

    for (let index = 0; index < enemies.length; index++) {
        let otherEnemy = enemies[index]

        if (enemy.id != otherEnemy.id) {
            if (isThereIntersection(enemy, otherEnemy)) {
                return true
            }
        }
    }

    return false
}
