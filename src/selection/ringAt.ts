import type { RadiusShare } from '../ring/RadiusShare';
import type { RingState } from '../ring/RingState';

/**
 * The ring whose band holds the distance `share`, the outermost ring for a distance past the edge
 * of every ring (so a long flick still picks), or `null` for a distance in no band, such as in a
 * gap between two rings.
 *
 * The inner radius of a band is inclusive and the outer exclusive, so two touching rings never
 * both hold the radius they share.
 */
export function ringAt(rings: readonly RingState[], share: RadiusShare): RingState | null {
    const holder = rings.find(ring => share >= ring.inner && share < ring.outer);

    if (holder !== undefined) {
        return holder;
    } else {
        return outermostPassed(rings, share);
    }
}

function outermostPassed(rings: readonly RingState[], share: RadiusShare): RingState | null {
    const outermost = rings.reduce<RingState | null>(outerOf, null);

    if (outermost !== null && share >= outermost.outer) {
        return outermost;
    } else {
        return null;
    }
}

function outerOf(outermost: RingState | null, ring: RingState): RingState {
    if (outermost === null || ring.outer > outermost.outer) {
        return ring;
    } else {
        return outermost;
    }
}
