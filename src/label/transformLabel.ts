import type { Properties } from 'csstype';
import type { Degrees } from '../angle';
import type { LabelOffset } from './LabelOffset';
import {
    DEFAULT_LABEL_ORIENTATION,
    type LabelOrientation,
} from './LabelOrientation';
import { rotateLabel } from './rotateLabel';

export function transformLabel(
    transform: Properties['transform'],
    angle: Degrees,
    orientation: LabelOrientation = DEFAULT_LABEL_ORIENTATION,
    offset?: LabelOffset,
): Properties['transform'] {
    const translateY = verticalTranslation(offset);
    const rotate = `rotate(${rotateLabel(orientation, angle)}deg)`;

    const transformations = [
        translateY,
        rotate,
        transform,
    ];

    return transformations
        .filter(notUndefined)
        .filter(notEmpty)
        .join(' ');
}

function verticalTranslation(offset?: LabelOffset): string | undefined {
    if (offset === undefined) {
        return undefined;
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

function notUndefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
