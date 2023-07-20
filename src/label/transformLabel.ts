import * as CSS from 'csstype';
import { Degrees } from '../angle';
import {
    DEFAULT_LABEL_ORIENTATION,
    LabelOrientation
} from './LabelOrientation';
import { LabelOffset } from './LabelOffset';
import { rotateLabel } from './rotateLabel';

export function transformLabel(
    angle: Degrees,
    orientation: LabelOrientation = DEFAULT_LABEL_ORIENTATION,
    offset?: LabelOffset
): CSS.Properties['transform'] {
    const translateY = verticalTranslation(offset);
    const rotate = `rotate(${rotateLabel(orientation, angle)}deg)`;

    const transformations = [
        translateY,
        rotate
    ];

    return transformations
        .filter(notNull)
        .join(' ');
}

function verticalTranslation(offset?: LabelOffset): string | null {
    if (offset === undefined) {
        return null;
    } else {
        return `translateY(${offsetWithUnit(offset)})`;
    }
}

function offsetWithUnit(offset: LabelOffset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}

function notNull<T>(value: T | null): value is T {
    return value !== null;
}
