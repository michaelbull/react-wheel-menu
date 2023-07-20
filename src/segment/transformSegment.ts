import * as CSS from 'csstype';
import { SegmentGap } from './SegmentGap';
import { SegmentState } from './SegmentState';

export function transformSegment(
    state: SegmentState,
    gapBefore?: SegmentGap,
    gapAfter?: SegmentGap
): CSS.Properties['transform'] {
    const {
        from,
        magnitude
    } = state;

    const rotation = `rotate(${from + magnitude - 90}deg)`;
    const skew = `skew(${magnitude - 90}deg)`;
    const translation = gapTranslation(gapBefore, gapAfter);

    if (translation === null) {
        return `${rotation} ${skew}`;
    } else {
        return `${rotation} ${skew} ${translation}`;
    }
}

function gapTranslation(before?: SegmentGap, after?: SegmentGap): string | null {
    if (before !== undefined && after !== undefined) {
        const translateX = gapWithUnit(before);
        const translateY = gapWithUnit(after);
        return `translate(${translateX}, -${translateY})`;
    } else if (before !== undefined) {
        const translateX = gapWithUnit(before);
        return `translateX(${translateX})`;
    } else if (after !== undefined) {
        const translateY = gapWithUnit(after);
        return `translateY(-${translateY})`;
    } else {
        return null;
    }
}

function gapWithUnit(gap: SegmentGap, unit = 'px'): string {
    if (typeof gap === 'number') {
        return `${gap}${unit}`;
    } else {
        return gap;
    }
}
