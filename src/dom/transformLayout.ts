import * as CSS from 'csstype';
import { Degrees } from '../models';

export function transformLayout(angle: Degrees): CSS.Properties['transform'] {
    const horizontalTranslation = `translateX(-50%)`;
    const skew = `skew(${-(angle - 90)}deg)`;
    const rotation = `rotate(${90 - (angle / 2)}deg)`;
    const verticalTranslation = `translateY(50%)`;

    return `${horizontalTranslation} ${skew} ${rotation} ${verticalTranslation}`;
}
