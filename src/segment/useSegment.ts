import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import {
    type Angle,
    angleToDegrees,
    moduloDegrees,
} from '../angle';
import type { SegmentGap } from './SegmentGap';
import type { SegmentState } from './SegmentState';
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
        gapAfter,
    } = props;

    const fromDeg = angleToDegrees(fromProp);
    const toDeg = angleToDegrees(toProp);

    const from = moduloDegrees(fromDeg);
    const to = moduloDegrees(toDeg);
    const delta = moduloDegrees(toDeg - fromDeg);
    const magnitude = Math.min(150, delta);

    const state: SegmentState = {
        from,
        to,
        magnitude,
        gapBefore,
        gapAfter,
    };

    const className = clsx(
        classNameProp,
        'wheel-segment',
    );

    const style: CSSProperties = {
        ...styleProp,
        transform: transformSegment(styleProp?.transform, state),
    };

    return {
        state,
        className,
        style,
    };
}
