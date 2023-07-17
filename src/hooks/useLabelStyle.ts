import { useSliceState } from './useSliceState';
import { CSSProperties } from 'react';
import {
    DEFAULT_OFFSET,
    DEFAULT_ORIENTATION,
    DefaultSliceState,
    Degrees,
    Offset,
    Orientation
} from '../models';
import { transformLabel } from '../dom';
import { useSpokeState } from './useSpokeState';

export interface UseLabelStyleProps {
    readonly orient?: Orientation;
    readonly offset?: Offset;
}

export function useLabelStyle(props: UseLabelStyleProps): CSSProperties {
    const {
        orient = DEFAULT_ORIENTATION,
        offset = DEFAULT_OFFSET
    } = props;

    const sliceState = useSliceState();
    const spokeState = useSpokeState();

    let angle: Degrees;

    if (sliceState === DefaultSliceState) {
        angle = spokeState.angle;
    } else {
        const {
            from,
            delta
        } = sliceState;

        angle = from + (delta / 2);
    }

    return {
        transform: transformLabel(angle, orient, offset)
    };
}
