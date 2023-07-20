import * as CSS from 'csstype';
import { Degrees } from '../angle';
import { SpokeOffset } from './SpokeOffset';

export function transformSpoke(
    angle: Degrees,
    offset?: SpokeOffset
): CSS.Properties['transform'] {
    const horizontalTranslation = `translateX(-50%)`;
    const rotation = `rotate(${angle}deg)`;

    if (offset === undefined) {
        return `${horizontalTranslation} ${rotation}`;
    } else {
        const verticalTranslation = `translateY(${offsetWithUnit(offset)})`;
        return `${horizontalTranslation} ${rotation} ${verticalTranslation}`;
    }
}

function offsetWithUnit(offset: SpokeOffset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
