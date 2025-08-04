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
    ];

    if (transform !== undefined) {
        transformations.push(transform);
    }

    return transformations
        .filter(notEmpty)
        .join(' ');
}

function gapTranslation(before?: SegmentGap, after?: SegmentGap): string {
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
        return '';
    }
}

function gapWithUnit(gap: SegmentGap, unit = 'px'): string {
    if (typeof gap === 'number') {
        return `${gap}${unit}`;
    } else {
        return gap;
    }
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
