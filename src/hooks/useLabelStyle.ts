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
        case 'document':
            const rotation = -(from + (angle / 2));

            return {
                transform: `translateY(-50%) rotate(${rotation}deg)`
            };

        case 'parent':
            return {
                transform: `translateY(-50%)`
            };
    }
}
