import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_JUSTIFY,
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    Justify,
    Offset,
    Orientation
} from '../models';

export interface UseLabelStyleProps {
    readonly orientation?: Orientation;
    readonly justify?: Justify;
    readonly offset?: Offset;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        orientation = DEFAULT_ORIENTATION,
        justify = DEFAULT_JUSTIFY,
        offset = DEFAULT_OFFSET
    } = props;

    const rotation = useLabelRotation(orientation);
    const verticalTranslation = addUnit(offset, 'px');
    const transform = `translateY(${verticalTranslation}) rotate(${rotation}deg)`;

    return {
        ...orientationStyle(orientation, justify),
        transform
    };
}

function useLabelRotation(orientation: Orientation): number {
    const {
        from,
        angle
    } = useSliceState();

    switch (orientation) {
        case 'downwards':
            return -(from + (angle / 2));

        case 'upwards':
            return 180 - (from + (angle / 2));

        case 'inwards':
            return 0;

        case 'outwards':
            return 180;

        case 'clockwise':
            return 270;

        case 'counterclockwise':
            return 90;
    }
}

function addUnit(offset: Offset, unit: string): string {
    if (typeof offset === 'number') {
        return `${offset}${unit}`;
    } else {
        return offset;
    }
}

function orientationStyle(orientation: Orientation, justify: Justify): CSSProperties {
    switch (orientation) {
        case 'counterclockwise':
            return backwardsStyle(justify);

        default:
            return forwardsStyle(justify);
    }
}

const START: CSSProperties = {
    justifyContent: 'flex-start'
};

const CENTER: CSSProperties = {
    justifyContent: 'center'
};

const END: CSSProperties = {
    justifyContent: 'flex-end'
};

function forwardsStyle(justify: Justify): CSSProperties {
    switch (justify) {
        case 'start':
            return START;

        case 'center':
            return CENTER;

        case 'end':
            return END;
    }
}

function backwardsStyle(justify: Justify): CSSProperties {
    switch (justify) {
        case 'start':
            return END;

        case 'center':
            return CENTER;

        case 'end':
            return START;
    }
}
