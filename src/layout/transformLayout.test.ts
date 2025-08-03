import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformLayout } from './transformLayout';

describe('transformLayout', () => {
    it('does not transform a zero angle', () => {
        const actual = transformLayout(0);
        expect(actual).toBeUndefined();
    });

    it('transforms an acute angle', () => {
        const actual = transformLayout(60);
        expect(actual).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%)');
    });

    it('transforms an obtuse angle', () => {
        const actual = transformLayout(120);
        expect(actual).toBe('translateX(-50%) skew(-30deg) rotate(30deg) translateY(50%)');
    });

    it('transforms a reflex angle', () => {
        const actual = transformLayout(200);
        expect(actual).toBe('translateX(-50%) skew(-110deg) rotate(-10deg) translateY(50%)');
    });
});
