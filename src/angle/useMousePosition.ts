import { usePointerPosition } from '../pointer/usePointerPosition';

/**
 * The position of the pointer, or `[0, 0]` until it first moves.
 *
 * @deprecated Use `usePointerPosition`, which returns `null` until a position is known instead of
 * a false `[0, 0]`.
 */
export function useMousePosition(): [number, number] {
    const position = usePointerPosition();

    if (position === null) {
        return [0, 0];
    } else {
        const [x, y] = position;
        return [x, y];
    }
}
