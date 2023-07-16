import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import {
    DEFAULT_DIRECTION,
    DEFAULT_JUSTIFICATION,
    Direction,
    Justification
} from '../models';
import {
    styleLayout,
    transformLayout
} from '../dom';

export interface UseLayoutStyleProps {
    readonly direction?: Direction;
    readonly justify?: Justification;
}

export function useLayoutStyle(props: UseLayoutStyleProps): CSSProperties {
    const {
        direction = DEFAULT_DIRECTION,
        justify = DEFAULT_JUSTIFICATION
    } = props;

    const { angle } = useSliceState();

    return {
        ...styleLayout(direction, justify),
        transform: transformLayout(angle)
    };
}
