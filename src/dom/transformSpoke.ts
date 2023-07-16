import * as CSS from 'csstype';
import {
    DEFAULT_OFFSET,
    Degrees,
    Offset
} from '../models';

export function transformSpoke(
    at: Degrees,
    offset: Offset = DEFAULT_OFFSET
): CSS.Properties['transform'] {
    const centreTranslation = `translate(-50%, 50%)`;
    const rotation = `rotate(${at - 90}deg)`;
    const offsetTranslation = `translateY(50%) translateY(${offsetWithUnit(offset)})`;
    return `${centreTranslation} ${rotation} ${offsetTranslation}`;
}

function offsetWithUnit(offset: Offset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
