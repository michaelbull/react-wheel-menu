import type { Circle } from '../midpoint/Circle';
import type { Point } from './Point';
import type { PointerBearing } from './PointerBearing';
import { pointerDegrees } from './pointerDegrees';
import { pointerDistance } from './pointerDistance';

export function circleBearing(circle: Circle, point: Point): PointerBearing {
    const {
        midpoint,
        radiusPixels,
    } = circle;

    return {
        degrees: pointerDegrees(midpoint, point),
        distancePixels: pointerDistance(midpoint, point),
        radiusPixels,
    };
}
