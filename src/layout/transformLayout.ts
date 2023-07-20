import type * as CSS from 'csstype';
import type { Degrees } from '../angle';

export function transformLayout(angle: Degrees): CSS.Properties['transform'] {
    if (angle === 0) {
        return 'none';
    } else {
        const horizontalTranslation = `translateX(-50%)`;
        const skew = `skew(${-(angle - 90)}deg)`;
        const rotation = `rotate(${90 - (angle / 2)}deg)`;
        const verticalTranslation = `translateY(50%)`;

        return `${horizontalTranslation} ${skew} ${rotation} ${verticalTranslation}`;
    }
}
