import type { Degrees } from './Angle';
import { modulo } from './modulo';

const DEGREES_PER_TURN: Degrees = 360;

export function moduloDegrees(degrees: Degrees): Degrees {
    return modulo(degrees, DEGREES_PER_TURN);
}
