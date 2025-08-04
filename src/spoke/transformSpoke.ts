import type { Properties } from 'csstype';
import type { Degrees } from '../angle';
import type { SpokeOffset } from './SpokeOffset';

export function transformSpoke(
    transform: Properties['transform'],
    angle: Degrees,
    offset: SpokeOffset,
): Properties['transform'] {
    const rotate = `rotate(${angle}deg)`;
    const translateY = verticalTranslation(offset);

    const transformations = [
        rotate,
        translateY,
        transform,
    ];

    return transformations
        .filter(notUndefined)
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

function notUndefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
