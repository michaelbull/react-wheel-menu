import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_LABEL_ORIENTATION,
    LabelOrientation
} from '../models';

export interface UseLabelStyleProps {
    readonly orientation?: LabelOrientation;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        orientation = DEFAULT_LABEL_ORIENTATION
    } = props;

    const {
        from,
        angle
    } = useSliceState();

    switch (orientation) {
        case 'downwards': {
            const rotation = -(from + (angle / 2));

            return {
                transform: `translateY(-50%) rotate(${rotation}deg)`
            };
        }

        case 'upwards': {
            const rotation = 180 - (from + (angle / 2));

            return {
                transform: `translateY(-50%) rotate(${rotation}deg)`
            };
        }

        case 'inwards': {
            return {
                transform: `translateY(-50%)`
            };
        }

        case 'outwards': {
            return {
                transform: `translateY(-50%) rotate(180deg)`
            };
        }

        case 'clockwise': {
            return {
                transform: `translateY(-50%) rotate(270deg)`
            };
        }

        case 'counterclockwise': {
            return {
                transform: `translateY(-50%) rotate(90deg)`
            };
        }
    }
}
