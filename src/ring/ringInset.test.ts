import {
    describe,
    expect,
    it,
} from 'vitest';
import { ringInset } from './ringInset';

describe('ringInset', () => {
    it('returns no inset for a ring to the edge of the wheel', () => {
        expect(ringInset(1)).toBe('0%');
    });

    it('returns the inset of a ring inside the wheel', () => {
        expect(ringInset(0.6)).toBe('20%');
    });
});
