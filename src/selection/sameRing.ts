import type { RingState } from '../ring/RingState';

export function sameRing(a: RingState, b: RingState): boolean {
    return a.inner === b.inner && a.outer === b.outer;
}
