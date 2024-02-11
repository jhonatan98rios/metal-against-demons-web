import { Camera } from "../entities/Camera";
import { Canvas } from "../entities/Canvas";

export type UUID = string

export function generateUUID(): UUID {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16) as UUID
    });
}

export type Vector2D = { x: number, y: number }
export type Object2D = { width: number, height: number }
export type Element2D = Vector2D & Object2D
export type Body = Element2D & { id?: string, speed: number }

export function isThereIntersection(elementA: Element2D, elementB: Element2D) {
    const bias = 5

    const aLeft = elementA.x + bias;
    const aRight = elementA.x + elementA.width - bias;
    const aTop = elementA.y + bias;
    const aBottom = elementA.y + elementA.height;

    const bLeft = elementB.x + bias;
    const bRight = elementB.x + elementB.width - bias;
    const bTop = elementB.y + bias;
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

    let isThereCollisionX = checkCollision(
        { ...enemy, x: newX } as Body,
        enemies
    )

    let isThereCollisionY = checkCollision(
        { ...enemy, y: newY } as Body,
        enemies
    )

    const x = !isThereCollisionX ? newX : enemy.x
    const y = !isThereCollisionY ? newY : enemy.y

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


export function isMobile() {
    return window.innerWidth < 768; // Você pode ajustar esse valor conforme necessário
};


export function generateWeightedRandomNumber(): number {
    const weights = [32, 16, 8, 4, 1]; // Pesos correspondentes aos números 0, 1, 2 e 3
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    const randomNumber = Math.random() * totalWeight;

    let cumulativeWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        cumulativeWeight += weights[i];
        if (randomNumber < cumulativeWeight) {
            return i;
        }
    }

    return weights.length - 1; // Retornar o último número se algo der errado
}


export function generateRandomPositionOutsideScreen(camera: Camera) {
    const mockedEnemy = { height: 75, width: 75 }
    const side = Math.floor(Math.random() * 4); // Escolha um lado aleatório para spawnar o monstro
    let x = 0, y = 0;

    switch (side) {
        case 0: // Spawnar na parte superior
            x = Math.random() * camera.width
            y = -(mockedEnemy.height + Math.floor(Math.random() * 1000)) // Fora da tela acima
            break;
        case 1: // Spawnar na parte inferior
            x = Math.random() * camera.width
            y = camera.height + Math.floor(Math.random() * 1000) // Fora da tela abaixo
            break;
        case 2: // Spawnar à esquerda
            x = -(mockedEnemy.width + Math.floor(Math.random() * 1000)) // Fora da tela à esquerda
            y = Math.random() * camera.height
            break;
        case 3: // Spawnar à direita
            x = camera.width + Math.floor(Math.random() * 1000) // Fora da tela à direita
            y = Math.random() * camera.height
            break;
    }

    return { x, y };
}