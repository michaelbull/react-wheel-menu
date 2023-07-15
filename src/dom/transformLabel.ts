import {
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    Offset,
    Orientation,
    SliceState
} from '../models';
import { rotateLabel } from '../math';
import * as CSS from 'csstype';

export function transformLabel(
    state: SliceState,
    orientation: Orientation = DEFAULT_ORIENTATION,
    offset: Offset = DEFAULT_OFFSET
): CSS.Properties['transform'] {
    const translation = `translateY(${offsetWithUnit(offset)})`;
    const rotation = `rotate(${rotateLabel(state, orientation)}deg)`;

    return `${translation} ${rotation}`;
}

function offsetWithUnit(offset: Offset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
