import type { Properties } from 'csstype';
import type { Degrees } from '../angle/Angle';
import {
    DEFAULT_LABEL_OFFSET,
    type LabelOffset,
} from './LabelOffset';
import {
    DEFAULT_LABEL_ORIENTATION,
    type LabelOrientation,
} from './LabelOrientation';
import { rotateLabel } from './rotateLabel';

export function transformLabel(
    angle: Degrees,
    orientation: LabelOrientation = DEFAULT_LABEL_ORIENTATION,
    offset: LabelOffset = DEFAULT_LABEL_OFFSET,
    transform?: Properties['transform'],
): Properties['transform'] {
    const translateY = verticalTranslation(offset);
    const rotate = rotation(orientation, angle);

    const transformations = [
        translateY,
        rotate,
    ];

    if (transform !== undefined) {
        transformations.push(transform);
    }

    return transformations
        .filter(notEmpty)
        .join(' ');
}

function verticalTranslation(offset: LabelOffset): string {
    if (offset === 0 || offset === '') {
        return '';
    } else {
        return `translateY(${offsetWithUnit(offset)})`;
    }
}

function rotation(orientation: LabelOrientation, angle: Degrees): string {
    const degrees = rotateLabel(angle, orientation);

    if (degrees === 0) {
        return '';
    } else {
        return `rotate(${degrees}deg)`;
    }
}

function offsetWithUnit(offset: LabelOffset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}

function notEmpty(value: string): boolean {
    return value.length > 0;
}
