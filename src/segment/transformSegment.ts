import type { Properties } from 'csstype';
import type { SegmentGap } from './SegmentGap';
import type { SegmentState } from './SegmentState';

export function transformSegment(
    transform: Properties['transform'],
    state: SegmentState,
): Properties['transform'] {

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
        transform,
    ];

    return transformations
        .filter(notUndefined)
        .filter(notEmpty)
        .join(' ');
}

function gapTranslation(before?: SegmentGap, after?: SegmentGap): string | undefined {
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
        return undefined;
    }
}

function gapWithUnit(gap: SegmentGap, unit = 'px'): string {
    if (typeof gap === 'number') {
        return `${gap}${unit}`;
    } else {
        return gap;
    }
}

function notUndefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
