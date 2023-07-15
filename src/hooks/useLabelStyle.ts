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
import {
    orientLabel,
    transformLabel
} from '../dom';

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

    const state = useSliceState();

    return {
        ...orientLabel(orientation, justify),
        transform: transformLabel(state, orientation, offset)
    };
}
