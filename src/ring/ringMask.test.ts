import {
    describe,
    expect,
    it,
} from 'vitest';
import { ringMask } from './ringMask';

describe('ringMask', () => {
    it('returns no mask for a ring with no hole', () => {
        expect(ringMask({ inner: 0, outer: 1 })).toBeUndefined();
    });

    it('cuts the hole at the inner radius of a ring to the edge', () => {
        expect(ringMask({ inner: 0.6, outer: 1 })).toBe('radial-gradient(closest-side, transparent 60%, #000 60%)');
    });

    it('cuts the hole as a share of the outer radius of a ring inside the wheel', () => {
        expect(ringMask({ inner: 0.25, outer: 0.5 })).toBe('radial-gradient(closest-side, transparent 50%, #000 50%)');
    });
});
