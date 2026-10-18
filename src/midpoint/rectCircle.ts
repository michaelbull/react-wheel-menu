import type { Circle } from './Circle';
import {
    type Rect,
    rectMidpoint,
} from './rectMidpoint';

/**
 * The circle inscribed in the width of a rect, as a wheel of that width draws it.
 */
export function rectCircle(rect: Rect): Circle {
    return {
        midpoint: rectMidpoint(rect),
        radiusPixels: rect.width / 2,
    };
}
