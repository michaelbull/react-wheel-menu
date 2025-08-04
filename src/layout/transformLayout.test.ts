import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformLayout } from './transformLayout';

describe('transformLayout', () => {
    describe('when the angle is 0', () => {
        it('returns undefined when no initial transform is provided', () => {
            expect(transformLayout(0)).toBeUndefined();
        });

        it('returns the initial transform unmodified when an initial transform is provided', () => {
            const initialTransform = 'scale(1.5)';
            expect(transformLayout(0, initialTransform)).toBe(initialTransform);
        });
    });

    describe('when the angle is not 0', () => {
        describe('and no initial transform is provided', () => {
            it('returns the full transformation string for a standard angle', () => {
                const result = transformLayout(30);
                expect(result).toBe('translateX(-50%) skew(60deg) rotate(75deg) translateY(50%)');
            });

            it('omits skew when its angle is 0', () => {
                const result = transformLayout(90);
                expect(result).toBe('translateX(-50%) rotate(45deg) translateY(50%)');
            });

            it('omits rotate when its angle is 0', () => {
                const result = transformLayout(180);
                expect(result).toBe('translateX(-50%) skew(-90deg) translateY(50%)');
            });
        });

        describe('and an initial transform is provided', () => {
            it('appends the initial transform to the end of the full string', () => {
                const initialTransform = 'scale(1.2)';
                const result = transformLayout(30, initialTransform);
                expect(result).toBe('translateX(-50%) skew(60deg) rotate(75deg) translateY(50%) scale(1.2)');
            });

            it('appends the initial transform when skew is omitted', () => {
                const initialTransform = 'opacity(0.5)';
                const result = transformLayout(90, initialTransform);
                expect(result).toBe('translateX(-50%) rotate(45deg) translateY(50%) opacity(0.5)');
            });

            it('appends the initial transform when rotate is omitted', () => {
                const initialTransform = 'perspective(500px)';
                const result = transformLayout(180, initialTransform);
                expect(result).toBe('translateX(-50%) skew(-90deg) translateY(50%) perspective(500px)');
            });
        });
    });
});
