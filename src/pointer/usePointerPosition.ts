import {
    useEffect,
    useState,
} from 'react';
import type { Point } from './Point';

/**
 * The position of the pointer (a mouse, a pen or a touch) in client coordinates.
 *
 * Starts at `initial`, or `null` where no position is known until the pointer first moves or
 * presses. Pass `initial` where the app already knows the position, such as that of the key press
 * that opened a wheel, so that a direction is known from the first frame.
 */
export function usePointerPosition(initial?: Point): Point | null {
    const [position, setPosition] = useState<Point | null>(initial ?? null);

    useEffect(() => {
        function onPointer(event: PointerEvent) {
            setPosition([event.clientX, event.clientY]);
        }

        window.addEventListener('pointermove', onPointer);
        window.addEventListener('pointerdown', onPointer);

        return function cleanup() {
            window.removeEventListener('pointermove', onPointer);
            window.removeEventListener('pointerdown', onPointer);
        };
    }, []);

    return position;
}
