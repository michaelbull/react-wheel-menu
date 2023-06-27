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
        to,
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
            const rotation = (to - from) + (angle / 2);

            return {
                transform: `translateY(-50%) rotate(${-rotation}deg)`
            };
        }

        case 'counterclockwise': {
            const rotation = (to - from) + (angle / 2);

            return {
                transform: `translateY(-50%) rotate(${rotation}deg)`
            };
        }
    }
}
