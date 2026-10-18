import type { Properties } from 'csstype';
import type { RadiusShare } from './RadiusShare';
import { sharePercent } from './sharePercent';

/**
 * The inset of a ring's element from the wheel's, so that the element is the square of the ring's
 * outer circle, centred.
 */
export function ringInset(outer: RadiusShare): Properties['inset'] {
    return sharePercent((1 - outer) / 2);
}
