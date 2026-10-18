import type { Properties } from 'csstype';
import type { RingState } from './RingState';
import { sharePercent } from './sharePercent';

/**
 * A segment's layout is four of the ring's outer radii tall, so a share of the layout's height is
 * a quarter of that share of the outer radius.
 */
const LAYOUT_HEIGHT_RADII = 4;

/**
 * The shift that moves a segment's layout out from the centre of the wheel to the middle of its
 * ring's band, or `undefined` for a ring with no hole.
 *
 * Without it, a layout is centred at half the ring's outer radius, which is inside the hole of a
 * ring whose inner radius is more than half its outer. The shift is half the inner radius, as
 * `translateY` along the layout's own axis, which points out from the centre.
 */
export function ringLayoutShift(state: RingState): Properties['transform'] {
    const {
        inner,
        outer,
    } = state;

    if (inner <= 0) {
        return undefined;
    } else {
        const shift = (inner / 2) / outer / LAYOUT_HEIGHT_RADII;
        return `translateY(-${sharePercent(shift)})`;
    }
}
