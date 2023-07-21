import * as CSS from 'csstype';
import { Degrees } from '../angle';
import {
    DEFAULT_SPOKE_ALIGNMENT,
    SpokeAlignment
} from './SpokeAlignment';
import { SpokeOffset } from './SpokeOffset';

export function transformSpoke(
    angle: Degrees,
    alignment: SpokeAlignment = DEFAULT_SPOKE_ALIGNMENT,
    offset?: SpokeOffset
): CSS.Properties['transform'] {
    const rotate = `rotate(${angle}deg)`;
    const translateX = horizontalTranslation(alignment);
    const translateY = verticalTranslation(offset);

    const transformations = [
        translateX,
        rotate,
        translateY
    ];

    return transformations
        .filter(notNull)
        .join(' ');
}

function horizontalTranslation(alignment: SpokeAlignment): string | null {
    switch (alignment) {
        case 'left':
            return null;

        case 'center':
            return '';

        case 'right':
            return null;
    }
}

function verticalTranslation(offset?: SpokeOffset): string | null {
    if (offset === undefined) {
        return null;
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

function notNull<T>(value: T | null): value is T {
    return value !== null;
}
