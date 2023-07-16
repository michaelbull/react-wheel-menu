import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_JUSTIFICATION,
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    Justification,
    Offset,
    Orientation
} from '../models';
import {
    styleLabel,
    transformLabel
} from '../dom';

export interface UseLabelStyleProps {
    readonly orient?: Orientation;
    readonly justify?: Justification;
    readonly offset?: Offset;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        orient = DEFAULT_ORIENTATION,
        justify = DEFAULT_JUSTIFICATION,
        offset = DEFAULT_OFFSET
    } = props;

    const state = useSliceState();

    return {
        ...styleLabel(orient, justify),
        transform: transformLabel(state, orient, offset)
    };
}
