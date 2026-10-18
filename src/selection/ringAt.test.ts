import {
    describe,
    expect,
    it,
} from 'vitest';
import type { RingState } from '../ring/RingState';
import { ringAt } from './ringAt';

const INNER: RingState = { inner: 0.2, outer: 0.5 };
const OUTER: RingState = { inner: 0.6, outer: 0.9 };

describe('ringAt', () => {
    it('returns the ring whose band holds the distance', () => {
        expect(ringAt([INNER, OUTER], 0.3)).toBe(INNER);
    });

    it('returns null for a distance in a gap between rings', () => {
        expect(ringAt([INNER, OUTER], 0.55)).toBeNull();
    });

    it('returns null for a distance inside the innermost ring', () => {
        expect(ringAt([INNER, OUTER], 0.1)).toBeNull();
    });

    it('returns the outermost ring past its outer edge', () => {
        expect(ringAt([OUTER, INNER], 1.5)).toBe(OUTER);
    });

    it('returns null where there are no rings', () => {
        expect(ringAt([], 0.5)).toBeNull();
    });
});
