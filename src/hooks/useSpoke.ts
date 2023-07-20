import type { CSSProperties } from 'react';
import type {
    Angle,
    Offset,
    SpokeState
} from '../models';
import { DEFAULT_OFFSET } from '../models';
import {
    angleToDegrees,
    modulo
} from '../math';
import { transformSpoke } from '../dom';
import clsx from 'clsx';

export interface UseSpokeProps {
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly angle: Angle;
    readonly offset?: Offset;
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
        offset = DEFAULT_OFFSET
    } = props;

    const angleDeg = angleToDegrees(angleProp);
    const angle = modulo(angleDeg, 360);

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
