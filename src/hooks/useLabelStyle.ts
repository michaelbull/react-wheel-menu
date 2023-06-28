import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_JUSTIFY,
    DEFAULT_ORIENTATION,
    Justify,
    Orientation
} from '../models';

export interface UseLabelStyleProps {
    readonly justify?: Justify;
    readonly offset?: number | string;
    readonly orientation?: Orientation;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        justify = DEFAULT_JUSTIFY,
        offset = 0,
        orientation = DEFAULT_ORIENTATION
    } = props;

    const rotation = useLabelRotation(orientation);
    const verticalTranslation = addUnit(offset, 'px');

    switch (justify) {
        case 'start':
            return {
                justifyContent: orientation === 'counterclockwise' ? 'flex-end' : 'flex-start',
                transform: `translateY(${verticalTranslation}) rotate(${rotation}deg)`
            };

        case 'center':
            return {
                justifyContent: 'center',
                transform: `translateY(${verticalTranslation}) rotate(${rotation}deg)`
            };

        case 'end':
            return {
                justifyContent: orientation === 'counterclockwise' ? 'flex-start' : 'flex-end',
                transform: `translateY(${verticalTranslation}) rotate(${rotation}deg)`
            };
    }
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

function addUnit(value: string | number, unit: string): string {
    if (typeof value === 'number') {
        return `${value}${unit}`;
    } else {
        return value;
    }
}
