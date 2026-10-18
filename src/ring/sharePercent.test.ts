import {
    describe,
    expect,
    it,
} from 'vitest';
import { sharePercent } from './sharePercent';

describe('sharePercent', () => {
    it('returns a share as a percentage', () => {
        expect(sharePercent(0.25)).toBe('25%');
    });

    it('rounds away floating-point noise', () => {
        expect(sharePercent((1 - 0.6) / 2)).toBe('20%');
    });
});
