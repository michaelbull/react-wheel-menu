import { CSSProperties } from 'react';
import {
    Angle,
    DEFAULT_OFFSET,
    Offset,
    SpokeState
} from '../models';
import {
    angleToDegrees,
    modulo
} from '../math';
import { transformSpoke } from '../dom';

export interface UseSpokeProps {
    readonly angle: Angle;
    readonly offset?: Offset;
}

export interface UseSpokeReturn {
    readonly state: SpokeState;
    readonly style: CSSProperties;
}

export function useSpoke(props: UseSpokeProps): UseSpokeReturn {
    const {
        angle: angleProp,
        offset = DEFAULT_OFFSET
    } = props;

    const angleDeg = angleToDegrees(angleProp);
    const angle = modulo(angleDeg, 360);

    const state: SpokeState = {
        angle
    };

    const style: CSSProperties = {
        transform: transformSpoke(angle, offset)
    };

    return {
        state,
        style
    };
}
