import type { Properties } from 'csstype';
import type { Degrees } from '../angle';
import {
    DEFAULT_SPOKE_OFFSET,
    type SpokeOffset,
} from './SpokeOffset';

export function transformSpoke(
    angle: Degrees,
    offset: SpokeOffset = DEFAULT_SPOKE_OFFSET,
    transform?: Properties['transform'],
): Properties['transform'] {
    const rotate = `rotate(${angle}deg)`;
    const translateY = verticalTranslation(offset);

    const transformations = [
        rotate,
        translateY,
    ];

    if (transform !== undefined) {
        transformations.push(transform);
    }

    return transformations
        .filter(notEmpty)
        .join(' ');
}

function verticalTranslation(offset: SpokeOffset): string {
    if (offset === 0 || offset === '') {
        return '';
    } else {
        return `translateY(${offsetWithUnit(offset)})`;
    }
}

function offsetWithUnit(offset: SpokeOffset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
