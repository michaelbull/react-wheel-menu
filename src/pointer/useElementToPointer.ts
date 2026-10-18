import type { SetElement } from 'react-use-rect';
import { useElementCircle } from '../midpoint/useElementCircle';
import { circleBearing } from './circleBearing';
import type { Point } from './Point';
import type { PointerBearing } from './PointerBearing';
import { usePointerPosition } from './usePointerPosition';

export interface UseElementToPointerOptions {
    /**
     * The position of the pointer to start from, before it first moves.
     */
    readonly initial?: Point;
}

export interface UseElementToPointerReturn {
    readonly ref: SetElement;
    /**
     * `null` until both the element and the pointer have a position.
     */
    readonly pointer: PointerBearing | null;
}

/**
 * Where the pointer is, seen from the centre of the element that `ref` is given to.
 */
export function useElementToPointer(options?: UseElementToPointerOptions): UseElementToPointerReturn {
    const position = usePointerPosition(options?.initial);

    const {
        circle,
        setElement: ref,
    } = useElementCircle();

    if (circle === null || position === null) {
        return {
            ref,
            pointer: null,
        };
    } else {
        return {
            ref,
            pointer: circleBearing(circle, position),
        };
    }
}
