import type { CSSProperties } from 'react';
import type {
    Angle,
    Gap,
    SegmentState
} from '../models';
import { DEFAULT_GAP } from '../models';
import {
    angleToDegrees,
    modulo
} from '../math';
import { transformSegment } from '../dom';
import clsx from 'clsx';

export interface UseSegmentProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
}

export interface UseSegmentReturn {
    readonly state: SegmentState;
    readonly className: string;
    readonly style: CSSProperties;
}

export function useSegment(props: UseSegmentProps): UseSegmentReturn {
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
    const size = Math.min(150, delta);

    const state: SegmentState = {
        from,
        to,
        size
    };

    const className = clsx(
        'circle-menu-segment',
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformSegment(state, gapBefore, gapAfter),
        ...styleProp
    };

    return {
        state,
        className,
        style
    };
}
