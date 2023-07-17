import { CSSProperties } from 'react';
import {
    Angle,
    DEFAULT_GAP,
    Gap,
    SliceState
} from '../models';
import {
    angleToDegrees,
    modulo
} from '../math';
import { transformSlice } from '../dom';

export interface UseSliceProps {
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
}

export interface UseSliceReturn {
    readonly state: SliceState;
    readonly style: CSSProperties;
}

export function useSlice(props: UseSliceProps): UseSliceReturn {
    const {
        from: fromProp,
        to: toProp,
        gapBefore = DEFAULT_GAP,
        gapAfter = DEFAULT_GAP
    } = props;

    const fromDeg = angleToDegrees(fromProp);
    const toDeg = angleToDegrees(toProp);

    const from = modulo(fromDeg, 360);
    const to = modulo(toDeg, 360);
    const delta = modulo(toDeg - fromDeg, 360);
    const angle = Math.min(150, delta);

    const state: SliceState = {
        from,
        to,
        delta: angle
    };

    const style: CSSProperties = {
        transform: transformSlice(state, gapBefore, gapAfter)
    };

    return {
        state,
        style
    };
}
