import { CSSProperties } from 'react';
import {
    DEFAULT_GAP,
    Gap,
    SliceState
} from '../models';
import { modulo } from '../math';
import { transformSlice } from '../dom';

export interface UseSliceProps {
    readonly from: number;
    readonly to: number;
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

    const from = modulo(fromProp, 360);
    const to = modulo(toProp, 360);
    const delta = modulo(toProp - fromProp, 360);
    const angle = Math.min(150, delta);

    const state: SliceState = {
        from,
        to,
        angle
    };

    const style: CSSProperties = {
        transform: transformSlice(state, gapBefore, gapAfter)
    };

    return {
        state,
        style
    };
}
