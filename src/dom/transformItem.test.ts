import {
    describe,
    expect,
    it
} from 'vitest';
import { transformItem } from './transformItem';

describe('transformItem', () => {
    it('transforms an acute angle', () => {
        const actual = transformItem(60);
        expect(actual).toBe('translateX(-50%) skew(30deg) rotate(60deg) translateY(50%)');
    });

    it('transforms an obtuse angle', () => {
        const actual = transformItem(120);
        expect(actual).toBe('translateX(-50%) skew(-30deg) rotate(30deg) translateY(50%)');
    });

    it('transforms a reflex angle', () => {
        const actual = transformItem(200);
        expect(actual).toBe('translateX(-50%) skew(-110deg) rotate(-10deg) translateY(50%)');
    });
});
