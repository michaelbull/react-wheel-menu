import { CSSProperties } from 'react';
import {
    Angle,
    DEFAULT_OFFSET,
    Offset
} from '../models';
import { transformSpoke } from '../dom';
import {
    angleToDegrees,
    modulo
} from '../math';

export interface UseSpokeStyleProps {
    readonly angle: Angle;
    readonly offset?: Offset;
}

export function useSpokeStyle(props: UseSpokeStyleProps): CSSProperties {
    const {
        angle: atProp,
        offset = DEFAULT_OFFSET
    } = props;

    const angleDeg = angleToDegrees(atProp);
    const angle = modulo(angleDeg, 360);

    return {
        transform: transformSpoke(angle, offset)
    };
}
