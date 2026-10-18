import type { Point } from './Point';

/**
 * The distance from `midpoint` to `point`, in CSS pixels.
 */
export function pointerDistance(midpoint: Point, point: Point): number {
    const [x1, y1] = midpoint;
    const [x2, y2] = point;
    return Math.hypot(x2 - x1, y2 - y1);
}
