import type { Degrees } from '../angle/Angle';
import { modulo } from '../angle/modulo';

const DEGREES_PER_TURN: Degrees = 360;

/**
 * Whether the direction `degrees` is in the span that starts at `from` and runs clockwise to `to`,
 * including a span across north (`from` 337.5, `to` 22.5).
 *
 * `from` is inclusive and `to` exclusive, so two neighbouring spans never both hold the direction
 * on their shared boundary.
 */
export function degreesWithin(degrees: Degrees, from: Degrees, to: Degrees): boolean {
    const span = turnDegrees(to - from);
    const offset = turnDegrees(degrees - from);
    return offset < span;
}

/**
 * `degrees` in `[0, 360)`. Unlike `moduloDegrees`, a whole turn is 0, not 360.
 */
function turnDegrees(degrees: Degrees): Degrees {
    return modulo(degrees, DEGREES_PER_TURN) % DEGREES_PER_TURN;
}
