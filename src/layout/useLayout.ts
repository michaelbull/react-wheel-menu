import { clsx } from 'clsx';
import type { Properties } from 'csstype';
import type { CSSProperties } from 'react';
import { ringLayoutShift } from '../ring/ringLayoutShift';
import type { RingState } from '../ring/RingState';
import { useRingState } from '../ring/useRingState';
import { useSegmentState } from '../segment/useSegmentState';
import {
    DEFAULT_LAYOUT_DIRECTION,
    type LayoutDirection,
} from './LayoutDirection';
import {
    DEFAULT_LAYOUT_JUSTIFICATION,
    type LayoutJustification,
} from './LayoutJustification';
import { transformLayout } from './transformLayout';

export interface UseLayoutProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly direction?: LayoutDirection;
    readonly justify?: LayoutJustification;
}

export interface UseLayoutReturn {
    readonly className: string;
    readonly style: CSSProperties;
}

export function useLayout(props: UseLayoutProps): UseLayoutReturn {
    const {
        className: classNameProp,
        style: styleProp,
        direction = DEFAULT_LAYOUT_DIRECTION,
        justify = DEFAULT_LAYOUT_JUSTIFICATION,
    } = props;

    const { magnitude } = useSegmentState();
    const ring = useRingState();

    const className = clsx(
        classNameProp,
        'wheel-layout',
        `wheel-layout--${direction}`,
        `wheel-layout--${justify}`,
    );

    const style: CSSProperties = {
        ...styleProp,
        transform: transformLayout(magnitude, withRingShift(ring, styleProp?.transform)),
    };

    return {
        className,
        style,
    };
}

function withRingShift(ring: RingState, transform?: Properties['transform']): Properties['transform'] {
    const shift = ringLayoutShift(ring);

    if (shift === undefined) {
        return transform;
    } else if (transform === undefined) {
        return shift;
    } else {
        return `${shift} ${transform}`;
    }
}
