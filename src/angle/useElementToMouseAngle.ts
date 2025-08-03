import type { RefCallback } from 'react';
import { useElementMidpoint } from '../midpoint';
import type { Radians } from './Angle';
import { radiansBetween } from './radiansBetween';
import { useMousePosition } from './useMousePosition';

export interface UseMouseToElementAngleReturn {
    readonly ref: RefCallback<Element>;
    readonly angle: Radians | null;
}

export function useElementToMouseAngle(): UseMouseToElementAngleReturn {
    const mousePosition = useMousePosition();

    const {
        midpoint,
        setElement: ref,
    } = useElementMidpoint();

    if (midpoint === null) {
        return {
            ref,
            angle: null,
        };
    } else {
        const [x1, y1] = midpoint;
        const [x2, y2] = mousePosition;

        return {
            ref,
            angle: radiansBetween(x1, y1, x2, y2),
        };
    }
}
