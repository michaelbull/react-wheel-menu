import { CSSProperties } from 'react';
import {
    DEFAULT_GAP,
    Gap,
    SliceState
} from '../models';

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
    const skew = angle - 90;
    const rotation = from + skew;
    const transform = `rotate(${rotation}deg) skew(${skew}deg) translate(${addUnit(gapBefore, 'px')}, -${addUnit(gapAfter, 'px')})`;

    const state: SliceState = {
        from,
        to,
        angle
    };

    const style: CSSProperties = {
        transform
    };

    return {
        state,
        style
    };
}

function addUnit(gap: Gap, unit: string): string {
    if (typeof gap === 'number') {
        return `${gap}${unit}`;
    } else {
        return gap;
    }
}

function modulo(n: number, d: number): number {
    return (n !== 0 && n % d === 0) ? d : ((n % d) + d) % d;
}
