import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    Offset,
    Orientation
} from '../models';
import { transformLabel } from '../dom';

export interface UseLabelStyleProps {
    readonly orient?: Orientation;
    readonly offset?: Offset;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        orient = DEFAULT_ORIENTATION,
        offset = DEFAULT_OFFSET
    } = props;

    const state = useSliceState();

    return {
        transform: transformLabel(state, orient, offset)
    };
}
