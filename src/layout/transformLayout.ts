import type { Properties } from 'csstype';
import type { Degrees } from '../angle';

const translateX = 'translateX(-50%)';
const translateY = 'translateY(50%)';

export function transformLayout(
    angle: Degrees,
    transform?: Properties['transform'],
): Properties['transform'] {

    if (angle === 0) {
        return transform;
    } else {
        const skew = `skew(${-(angle - 90)}deg)`;
        const rotate = `rotate(${90 - (angle / 2)}deg)`;

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

function notEmpty(value: string): boolean {
    return value.length > 0;
}
