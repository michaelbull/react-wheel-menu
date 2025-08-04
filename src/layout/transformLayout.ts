import type { Properties } from 'csstype';
import type { Degrees } from '../angle/Angle';

const translateX = 'translateX(-50%)';
const translateY = 'translateY(50%)';

export function transformLayout(
    angle: Degrees,
    transform?: Properties['transform'],
): Properties['transform'] {

    if (angle === 0) {
        return transform;
    } else {
        const skew = skewing(angle);
        const rotate = rotation(angle);

        const transformations = [
            translateX,
            skew,
            rotate,
            translateY,
        ];

        if (transform !== undefined) {
            transformations.push(transform);
        }

        return transformations
            .filter(notEmpty)
            .join(' ');
    }
}

function skewing(angle: number): string {
    const degrees = -(angle - 90);

    if (degrees === 0) {
        return '';
    } else {
        return `skew(${degrees}deg)`;
    }
}

function rotation(angle: number): string {
    const degrees = 90 - (angle / 2);

    if (degrees === 0) {
        return '';
    } else {
        return `rotate(${degrees}deg)`;
    }
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
