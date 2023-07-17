import {
    DEFAULT_GAP,
    Gap,
    SliceState
} from '../models';
import * as CSS from 'csstype';

export function transformSlice(
    state: SliceState,
    gapBefore: Gap = DEFAULT_GAP,
    gapAfter: Gap = DEFAULT_GAP
): CSS.Properties['transform'] {
    const {
        from,
        delta
    } = state;

    const rotation = `rotate(${from + delta - 90}deg)`;
    const skew = `skew(${delta - 90}deg)`;

    const translateX = gapWithUnit(gapBefore);
    const translateY = gapWithUnit(gapAfter);
    const translation = `translate(${translateX}, -${translateY})`;

    return `${rotation} ${skew} ${translation}`;
}

function gapWithUnit(gap: Gap, unit = 'px'): string {
    if (typeof gap === 'number') {
        return `${gap}${unit}`;
    } else {
        return gap;
    }
}
