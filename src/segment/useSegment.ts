import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import type { Angle } from '../angle/Angle';
import { angleToDegrees } from '../angle/angleToDegrees';
import { moduloDegrees } from '../angle/moduloDegrees';
import { useSelectableSegment } from '../selection/useSelectableSegment';
import { useWheelActive } from '../selection/useWheelActive';
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
    readonly value?: string;
}

export interface UseSegmentReturn {
    readonly state: SegmentState;
    readonly className: string;
    readonly style: CSSProperties;
    /**
     * Present (as `""`) on the active segment only, for styling with
     * `.wheel-segment[data-active]`.
     */
    readonly 'data-active'?: '';
}

export function useSegment(props: UseSegmentProps): UseSegmentReturn {
    const {
        className: classNameProp,
        style: styleProp,
        from: fromProp,
        to: toProp,
        gapBefore,
        gapAfter,
        value,
    } = props;

    const fromDeg = angleToDegrees(fromProp);
    const toDeg = angleToDegrees(toProp);

    const from = moduloDegrees(fromDeg);
    const to = moduloDegrees(toDeg);
    const delta = moduloDegrees(toDeg - fromDeg);
    const magnitude = Math.min(150, delta);

    useSelectableSegment(value, from, magnitude);
    const active = useWheelActive();

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
        transform: transformSegment(state, styleProp?.transform),
    };

    return {
        state,
        className,
        style,
        'data-active': activeAttribute(value, active),
    };
}

function activeAttribute(value: string | undefined, active: string | null): '' | undefined {
    if (value !== undefined && value === active) {
        return '';
    } else {
        return undefined;
    }
}
