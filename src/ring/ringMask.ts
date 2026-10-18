import type { Properties } from 'csstype';
import type { RingState } from './RingState';
import { sharePercent } from './sharePercent';

/**
 * The mask that cuts the hole of a ring out of its element, or `undefined` for a ring with no
 * hole.
 *
 * The gradient is sized to the element's closest side, which is the ring's outer radius, so the
 * hole is the inner radius as a share of the outer.
 */
export function ringMask(state: RingState): Properties['maskImage'] {
    const {
        inner,
        outer,
    } = state;

    if (inner <= 0) {
        return undefined;
    } else {
        const hole = sharePercent(inner / outer);
        return `radial-gradient(closest-side, transparent ${hole}, #000 ${hole})`;
    }
}
