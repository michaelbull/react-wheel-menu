import { CSSProperties } from 'react';
import { clsx } from 'clsx';
import {
    Angle,
    angleToDegrees,
    moduloDegrees
} from '../angle';
import { SegmentGap } from './SegmentGap';
import { SegmentState } from './SegmentState';
import { transformSegment } from './transformSegment';

export interface UseSegmentProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: SegmentGap;
    readonly gapAfter?: SegmentGap;
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
        gapBefore,
        gapAfter
    } = props;

    const fromDeg = angleToDegrees(fromProp);
    const toDeg = angleToDegrees(toProp);

    const from = moduloDegrees(fromDeg);
    const to = moduloDegrees(toDeg);
    const delta = moduloDegrees(toDeg - fromDeg);
    const size = Math.min(150, delta);

    const state: SegmentState = {
        from,
        to,
        magnitude: size
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
