import type { Degrees } from '../angle/Angle';

/**
 * Where the pointer is, seen from the centre of a wheel.
 */
export interface PointerBearing {
    /**
     * The direction of the pointer, in degrees clockwise from north.
     */
    readonly degrees: Degrees;
    readonly distancePixels: number;
    /**
     * The radius of the wheel, so that `distancePixels / radiusPixels` reads the distance as a
     * share of it: 0 at the centre, 1 at the edge.
     */
    readonly radiusPixels: number;
}
