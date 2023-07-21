import { Radians } from './Angle';
import { useMousePosition } from './useMousePosition';
import { RefCallback } from 'react';
import { angleBetween } from './angleBetween';
import { useElementMidpoint } from '../midpoint';

export interface UseMouseToElementAngleReturn {
    readonly ref: RefCallback<Element>;
    readonly angle: Radians | null;
}

export function useElementToMouseAngle(): UseMouseToElementAngleReturn {
    const mousePosition = useMousePosition();

    const {
        midpoint,
        setElement: ref
    } = useElementMidpoint();

    if (midpoint === null) {
        return {
            ref,
            angle: null
        };
    } else {
        const [x1, y1] = midpoint;
        const [x2, y2] = mousePosition;

        return {
            ref,
            angle: angleBetween(x1, y1, x2, y2)
        };
    }
}
