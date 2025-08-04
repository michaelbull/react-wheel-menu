import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformLabel } from './transformLabel';

describe('transformLabel', () => {
    describe('when no initial transform is provided', () => {
        it('returns translateY and rotate for a numeric offset and default orientation', () => {
            const result = transformLabel(90, 'downwards', 50);
            expect(result).toBe('translateY(50px) rotate(-90deg)');
        });

        it('returns translateY and rotate for a string offset', () => {
            const result = transformLabel(45, 'upwards', '2rem');
            expect(result).toBe('translateY(2rem) rotate(135deg)');
        });

        it('returns only rotate when the offset is 0', () => {
            const result = transformLabel(30, 'clockwise', 0);
            expect(result).toBe('rotate(270deg)');
        });

        it('returns only rotate when the offset is an empty string', () => {
            const result = transformLabel(60, 'counterclockwise', '');
            expect(result).toBe('rotate(90deg)');
        });

        it('returns only translateY when the rotation is 0', () => {
            const result = transformLabel(123, 'inwards', 25);
            expect(result).toBe('translateY(25px)');
        });
    });

    describe('when an initial transform is provided', () => {
        it('appends the new transformations to the existing one', () => {
            const initialTransform = 'scale(1.2)';
            const result = transformLabel(90, 'downwards', 50, initialTransform);
            expect(result).toBe('translateY(50px) rotate(-90deg) scale(1.2)');
        });

        it('appends only rotate when the offset is 0', () => {
            const initialTransform = 'skew(10deg)';
            const result = transformLabel(30, 'clockwise', 0, initialTransform);
            expect(result).toBe('rotate(270deg) skew(10deg)');
        });

        it('appends only translateY when the rotation is 0', () => {
            const initialTransform = 'translateX(10px)';
            const result = transformLabel(90, 'inwards', 25, initialTransform);
            expect(result).toBe('translateY(25px) translateX(10px)');
        });
    });
});
