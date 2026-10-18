import {
    describe,
    expect,
    it,
} from 'vitest';
import { sameRing } from './sameRing';

describe('sameRing', () => {
    it('returns true for two rings with the same radii', () => {
        expect(sameRing({ inner: 0.2, outer: 0.6 }, { inner: 0.2, outer: 0.6 })).toBe(true);
    });

    it('returns false for two rings with another inner radius', () => {
        expect(sameRing({ inner: 0.2, outer: 0.6 }, { inner: 0.3, outer: 0.6 })).toBe(false);
    });

    it('returns false for two rings with another outer radius', () => {
        expect(sameRing({ inner: 0.2, outer: 0.6 }, { inner: 0.2, outer: 0.7 })).toBe(false);
    });
});
