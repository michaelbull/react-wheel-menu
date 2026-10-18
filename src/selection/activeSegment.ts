import type { PointerBearing } from '../pointer/PointerBearing';
import type { RadiusShare } from '../ring/RadiusShare';
import type { RingState } from '../ring/RingState';
import { ringAt } from './ringAt';
import { sameRing } from './sameRing';
import { segmentAt } from './segmentAt';
import type { SelectableSegment } from './SelectableSegment';

/**
 * The value of the segment that the pointer points at, or `null` where it points at none.
 *
 * Nothing is active inside the dead zone, a share of the radius around the centre. Past it, the
 * distance picks the ring (see `ringAt`), and the direction picks the segment in that ring.
 */
export function activeSegment(
    segments: readonly SelectableSegment[],
    pointer: PointerBearing,
    deadZone: RadiusShare,
): string | null {
    const {
        degrees,
        distancePixels,
        radiusPixels,
    } = pointer;

    const share = distancePixels / radiusPixels;

    if (radiusPixels <= 0 || share <= deadZone) {
        return null;
    } else {
        const rings = segments.map(segment => segment.ring);
        const ring = ringAt(rings, share);
        return activeInRing(segments, ring, degrees);
    }
}

function activeInRing(segments: readonly SelectableSegment[], ring: RingState | null, degrees: number): string | null {
    if (ring === null) {
        return null;
    } else {
        const inRing = segments.filter(segment => sameRing(segment.ring, ring));
        return segmentAt(inRing, degrees)?.value ?? null;
    }
}
