import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import type { RadiusShare } from './RadiusShare';
import { ringInset } from './ringInset';
import { ringMask } from './ringMask';
import {
    DefaultRingState,
    type RingState,
} from './RingState';

export interface UseRingProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly inner?: RadiusShare;
    readonly outer?: RadiusShare;
}

export interface UseRingReturn {
    readonly state: RingState;
    readonly className: string;
    readonly style: CSSProperties;
}

export function useRing(props: UseRingProps): UseRingReturn {
    const {
        className: classNameProp,
        style: styleProp,
        inner = DefaultRingState.inner,
        outer = DefaultRingState.outer,
    } = props;

    const state: RingState = {
        inner,
        outer,
    };

    const className = clsx(
        classNameProp,
        'wheel-ring',
    );

    const style: CSSProperties = {
        ...styleProp,
        inset: ringInset(outer),
        maskImage: ringMask(state),
    };

    return {
        state,
        className,
        style,
    };
}
