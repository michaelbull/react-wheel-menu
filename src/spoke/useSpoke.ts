import { CSSProperties } from 'react';
import { clsx } from 'clsx';
import {
    Angle,
    angleToDegrees,
    moduloDegrees
} from '../angle';
import { SpokeOffset } from './SpokeOffset';
import { SpokeState } from './SpokeState';
import { transformSpoke } from './transformSpoke';
import {
    DEFAULT_SPOKE_ALIGNMENT,
    SpokeAlignment
} from './SpokeAlignment';

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
        offset
    } = props;

    const angleDeg = angleToDegrees(angleProp);
    const angle = moduloDegrees(angleDeg);

    const state: SpokeState = {
        angle
    };

    const className = clsx(
        'circle-menu-spoke',
        `circle-menu-spoke--${align}`,
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformSpoke(angle, align, offset),
        ...styleProp
    };

    return {
        state,
        className,
        style
    };
}
