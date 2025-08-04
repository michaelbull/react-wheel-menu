import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformSpoke } from './transformSpoke';

describe('transformSpoke', () => {
    describe('when no initial transform is provided', () => {
        it('returns the full transformation string for a standard state', () => {
            const actual = transformSpoke(45, 50);
            const expected = 'rotate(45deg) translateY(50px)';

            expect(actual).toBe(expected);
        });

        it('returns the correct string for a string offset', () => {
            const actual = transformSpoke(90, '3rem');
            const expected = 'rotate(90deg) translateY(3rem)';

            expect(actual).toBe(expected);
        });

        it('omits rotate when the angle is 0', () => {
            const actual = transformSpoke(0, 50);
            const expected = 'translateY(50px)';

            expect(actual).toBe(expected);
        });

        it('omits translateY when the offset is 0', () => {
            const actual = transformSpoke(45, 0);
            const expected = 'rotate(45deg)';

            expect(actual).toBe(expected);
        });

        it('omits translateY when the offset is an empty string', () => {
            const actual = transformSpoke(45, '');
            const expected = 'rotate(45deg)';

            expect(actual).toBe(expected);
        });

        it('returns an empty string when angle and offset are both 0', () => {
            const actual = transformSpoke(0, 0);
            const expected = '';

            expect(actual).toBe(expected);
        });
    });

    describe('when an initial transform is provided', () => {
        it('appends the initial transform to the end of the full string', () => {
            const initialTransform = 'scale(1.2)';
            const actual = transformSpoke(45, 50, initialTransform);
            const expected = 'rotate(45deg) translateY(50px) scale(1.2)';

            expect(actual).toBe(expected);
        });

        it('appends the initial transform when rotate is omitted', () => {
            const initialTransform = 'skew(10deg)';
            const actual = transformSpoke(0, 50, initialTransform);
            const expected = 'translateY(50px) skew(10deg)';

            expect(actual).toBe(expected);
        });

        it('appends the initial transform when translateY is omitted', () => {
            const initialTransform = 'opacity(0.7)';
            const actual = transformSpoke(45, 0, initialTransform);
            const expected = 'rotate(45deg) opacity(0.7)';

            expect(actual).toBe(expected);
        });

        it('returns only the initial transform when angle and offset are 0', () => {
            const initialTransform = 'perspective(1000px)';
            const actual = transformSpoke(0, 0, initialTransform);
            const expected = 'perspective(1000px)';

            expect(actual).toBe(expected);
        });
    });
});
