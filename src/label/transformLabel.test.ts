import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformLabel } from './transformLabel';

describe('transformLabel', () => {
    describe('when no initial transform is provided', () => {
        it('returns translateY and rotate for a numeric offset and default orientation', () => {
            const actual = transformLabel(90, 'downwards', 50);
            const expected = 'translateY(50px) rotate(-90deg)';

            expect(actual).toBe(expected);
        });

        it('returns translateY and rotate for a string offset', () => {
            const actual = transformLabel(45, 'upwards', '2rem');
            const expected = 'translateY(2rem) rotate(135deg)';

            expect(actual).toBe(expected);
        });

        it('returns only rotate when the offset is 0', () => {
            const actual = transformLabel(30, 'clockwise', 0);
            const expected = 'rotate(270deg)';

            expect(actual).toBe(expected);
        });

        it('returns only rotate when the offset is an empty string', () => {
            const actual = transformLabel(60, 'counterclockwise', '');
            const expected = 'rotate(90deg)';

            expect(actual).toBe(expected);
        });

        it('returns only translateY when the rotation is 0', () => {
            const actual = transformLabel(123, 'inwards', 25);
            const expected = 'translateY(25px)';

            expect(actual).toBe(expected);
        });
    });

    describe('when an initial transform is provided', () => {
        it('appends the new transformations to the existing one', () => {
            const initialTransform = 'scale(1.2)';
            const actual = transformLabel(90, 'downwards', 50, initialTransform);
            const expected = 'translateY(50px) rotate(-90deg) scale(1.2)';

            expect(actual).toBe(expected);
        });

        it('appends only rotate when the offset is 0', () => {
            const initialTransform = 'skew(10deg)';
            const actual = transformLabel(30, 'clockwise', 0, initialTransform);
            const expected = 'rotate(270deg) skew(10deg)';

            expect(actual).toBe(expected);
        });

        it('appends only translateY when the rotation is 0', () => {
            const initialTransform = 'translateX(10px)';
            const actual = transformLabel(90, 'inwards', 25, initialTransform);
            const expected = 'translateY(25px) translateX(10px)';

            expect(actual).toBe(expected);
        });
    });
});
