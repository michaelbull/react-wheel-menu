import type * as CSS from 'csstype';
import type { Degrees } from '../angle';
import type { LabelOrientation } from './LabelOrientation';
import { DEFAULT_LABEL_ORIENTATION } from './LabelOrientation';
import type { LabelOffset } from './LabelOffset';
import { rotateLabel } from './rotateLabel';

export function transformLabel(
    angle: Degrees,
    orientation: LabelOrientation = DEFAULT_LABEL_ORIENTATION,
    offset?: LabelOffset
): CSS.Properties['transform'] {
    const rotation = `rotate(${rotateLabel(orientation, angle)}deg)`;

    if (offset === undefined) {
        return rotation;
    } else {
        const translation = `translateY(${offsetWithUnit(offset)})`;
        return `${translation} ${rotation}`;
    }
}

function offsetWithUnit(offset: LabelOffset, unit = 'px'): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}
