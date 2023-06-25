export type RadialWheelDirection = 'cw' | 'ccw';

export function directionSign(direction: RadialWheelDirection): number {
    switch (direction) {
        case 'cw':
            return +1;

        case 'ccw':
            return -1;
    }
}
