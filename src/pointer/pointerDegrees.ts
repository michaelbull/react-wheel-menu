import type { Degrees } from '../angle/Angle';
import { moduloDegrees } from '../angle/moduloDegrees';
import { radiansBetween } from '../angle/radiansBetween';
import type { Point } from './Point';

const DEGREES_PER_RADIAN = 180 / Math.PI;

/**
 * `atan2` measures from east, and a segment's `from` and `to` measure from north.
 */
const EAST_TO_NORTH_DEGREES: Degrees = 90;

/**
 * The direction from `midpoint` to `point`, in degrees clockwise from north: the convention of a
 * segment's `from` and `to`.
 */
export function pointerDegrees(midpoint: Point, point: Point): Degrees {
    const [x1, y1] = midpoint;
    const [x2, y2] = point;
    const fromEast = radiansBetween(x1, y1, x2, y2) * DEGREES_PER_RADIAN;
    return moduloDegrees(fromEast + EAST_TO_NORTH_DEGREES);
}
