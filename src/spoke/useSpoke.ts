import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import {
    type Angle,
    angleToDegrees,
    moduloDegrees,
} from '../angle';
import {
    DEFAULT_SPOKE_ALIGNMENT,
    type SpokeAlignment,
} from './SpokeAlignment';
import type { SpokeOffset } from './SpokeOffset';
import type { SpokeState } from './SpokeState';
import { transformSpoke } from './transformSpoke';

export interface UseSpokeProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly angle: Angle;
    readonly align?: SpokeAlignment;
    readonly offset?: SpokeOffset;
}

export interface UseSpokeReturn {
    readonly state: SpokeState;
    readonly className: string;
    readonly style: CSSProperties;
}

export function useSpoke(props: UseSpokeProps): UseSpokeReturn {
    const {
        className: classNameProp,
        style: styleProp,
        angle: angleProp,
        align = DEFAULT_SPOKE_ALIGNMENT,
        offset,
    } = props;

    const angleDeg = angleToDegrees(angleProp);
    const angle = moduloDegrees(angleDeg);

    const state: SpokeState = {
        angle,
    };

    const className = clsx(
        classNameProp,
        'wheel-spoke',
        `wheel-spoke--${align}`,
    );

    const style: CSSProperties = {
        ...styleProp,
        transform: transformSpoke(styleProp?.transform, angle, offset),
    };

    return {
        state,
        className,
        style,
    };
}
