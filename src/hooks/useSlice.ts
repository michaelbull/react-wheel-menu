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
import clsx from 'clsx';

export interface UseSliceProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
}

export interface UseSliceReturn {
    readonly state: SliceState;
    readonly className: string;
    readonly style: CSSProperties;
}

export function useSlice(props: UseSliceProps): UseSliceReturn {
    const {
        className: classNameProp,
        style: styleProp,
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
    const cappedDelta = Math.min(150, delta);

    const state: SliceState = {
        from,
        to,
        delta: cappedDelta
    };

    const className = clsx(
        'circle-menu-slice',
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformSlice(state, gapBefore, gapAfter),
        ...styleProp
    };

    return {
        state,
        className,
        style
    };
}
