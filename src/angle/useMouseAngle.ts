import type { Radians } from './Angle';
import { angleBetween } from './angleBetween';
import { useMousePosition } from './useMousePosition';

export interface UseMouseAngleProps {
    readonly x: number;
    readonly y: number;
}

export function useMouseAngle(props: UseMouseAngleProps): Radians | null {
    const { x: x1, y: y1 } = props;
    const [x2, y2] = useMousePosition();
    return angleBetween(x1, y1, x2, y2);
}
