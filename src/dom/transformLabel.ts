import type {
    Degrees,
    Offset,
    Orientation
} from '../models';
import {
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION
} from '../models';
import { rotateLabel } from '../math';
import type * as CSS from 'csstype';

export function transformLabel(
    angle: Degrees,
    orientation: Orientation = DEFAULT_ORIENTATION,
    offset: Offset = DEFAULT_OFFSET
): CSS.Properties['transform'] {
    const translation = `translateY(${offsetWithUnit(offset)})`;
    const rotation = `rotate(${rotateLabel(orientation, angle)}deg)`;

    return `${translation} ${rotation}`;
}

function offsetWithUnit(offset: Offset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
