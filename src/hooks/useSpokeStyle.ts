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
    readonly at: Angle;
    readonly offset?: Offset;
}

export function useSpokeStyle(props: UseSpokeStyleProps): CSSProperties {
    const {
        at: atProp,
        offset = DEFAULT_OFFSET
    } = props;

    const atDeg = angleToDegrees(atProp);
    const at = modulo(atDeg, 360);

    return {
        transform: transformSpoke(at, offset)
    };
}
