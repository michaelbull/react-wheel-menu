import type { RefCallback } from 'react';
import { useElementMidpoint } from '../midpoint/useElementMidpoint';
import type { Radians } from './Angle';
import { radiansBetween } from './radiansBetween';
import { useMousePosition } from './useMousePosition';

export interface UseMouseToElementAngleReturn {
    readonly ref: RefCallback<Element>;
    readonly angle: Radians | null;
}

/**
 * The angle from the centre of the element that `ref` is given to, to the pointer, in radians
 * clockwise from east, or `null` until the element is measured.
 *
 * @deprecated Use `useElementToPointer`, which gives the direction in degrees clockwise from north
 * (the convention of a segment's `from` and `to`) and the distance.
 */
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
