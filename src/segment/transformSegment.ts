import type { Properties} from 'csstype';
import type { SegmentGap } from './SegmentGap';
import type { SegmentState } from './SegmentState';

export function transformSegment(state: SegmentState): Properties['transform'] {
    const {
        from,
        magnitude,
        gapBefore,
        gapAfter,
    } = state;

    const rotate = `rotate(${from + magnitude - 90}deg)`;
    const skew = `skew(${magnitude - 90}deg)`;
    const translate = gapTranslation(gapBefore, gapAfter);

    const transformations = [
        rotate,
        skew,
        translate,
    ];

    return transformations
        .filter(notNull)
        .join(' ');
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

function notNull<T>(value: T | null): value is T {
    return value !== null;
}
