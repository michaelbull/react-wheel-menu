import { Radians } from './Angle';

export function angleBetween(x1: number, y1: number, x2: number, y2: number): Radians {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.atan2(deltaY, deltaX);
}
