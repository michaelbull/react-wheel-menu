import {
    describe,
    expect,
    it,
} from 'vitest';
import { ringLayoutShift } from './ringLayoutShift';

describe('ringLayoutShift', () => {
    it('returns no shift for a ring with no hole', () => {
        expect(ringLayoutShift({ inner: 0, outer: 1 })).toBeUndefined();
    });

    it('shifts by half the inner radius of a ring to the edge', () => {
        expect(ringLayoutShift({ inner: 0.6, outer: 1 })).toBe('translateY(-7.5%)');
    });

    it('shifts by half the inner radius as a share of the outer radius', () => {
        expect(ringLayoutShift({ inner: 0.25, outer: 0.5 })).toBe('translateY(-6.25%)');
    });
});
