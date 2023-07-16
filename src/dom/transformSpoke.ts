import * as CSS from 'csstype';
import {
    DEFAULT_OFFSET,
    Degrees,
    Offset
} from '../models';

export function transformSpoke(
    angle: Degrees,
    offset: Offset = DEFAULT_OFFSET
): CSS.Properties['transform'] {
    const horizontalTranslation = `translateX(-50%)`;
    const rotation = `rotate(${angle}deg)`;
    const verticalTranslation = `translateY(${offsetWithUnit(offset)})`;
    return `${horizontalTranslation} ${rotation} ${verticalTranslation}`;
}

function offsetWithUnit(offset: Offset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
