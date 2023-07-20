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

export interface UseSpokeProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly angle: Angle;
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
        offset
    } = props;

    const angleDeg = angleToDegrees(angleProp);
    const angle = moduloDegrees(angleDeg);

    const state: SpokeState = {
        angle
    };

    const className = clsx(
        'circle-menu-spoke',
        classNameProp
    );

    const style: CSSProperties = {
        transform: transformSpoke(angle, offset),
        ...styleProp
    };

    return {
        state,
        className,
        style
    };
}
