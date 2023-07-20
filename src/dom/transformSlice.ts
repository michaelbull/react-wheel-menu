import type {
    Gap,
    SliceState
} from '../models';
import { DEFAULT_GAP } from '../models';
import type * as CSS from 'csstype';

export function transformSlice(
    state: SliceState,
    gapBefore: Gap = DEFAULT_GAP,
    gapAfter: Gap = DEFAULT_GAP
): CSS.Properties['transform'] {
    const {
        from,
        size
    } = state;

    const rotation = `rotate(${from + size - 90}deg)`;
    const skew = `skew(${size - 90}deg)`;

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
