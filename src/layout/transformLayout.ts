import * as CSS from 'csstype';
import { Degrees } from '../angle';

const translateX = 'translateX(-50%)';
const translateY = 'translateY(50%)';

export function transformLayout(angle: Degrees): CSS.Properties['transform'] {
    if (angle === 0) {
        return undefined;
    } else {
        const skew = `skew(${-(angle - 90)}deg)`;
        const rotate = `rotate(${90 - (angle / 2)}deg)`;

        return [
            translateX,
            skew,
            rotate,
            translateY
        ].join(' ');
    }
}
