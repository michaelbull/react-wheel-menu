import {
    angleBetween,
    rectMidpoint
} from '../math';
import { useElementRect } from './useElementRect';
import type { Radians } from '../models';

export interface UseAngleToElementProps {
    readonly element: Element;
    readonly x: number;
    readonly y: number;
}

export function useAngleToElement(props: UseAngleToElementProps): Radians | null {
    const {
        element,
        x: x2,
        y: y2
    } = props;

    const rect = useElementRect(element);

    if (rect === null) {
        return null;
    } else {
        const [x1, y1] = rectMidpoint(rect);
        return angleBetween(x1, y1, x2, y2);
    }
}
