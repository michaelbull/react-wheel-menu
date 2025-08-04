import {
    describe,
    expect,
    it,
} from 'vitest';
import { transformLayout } from './transformLayout';

describe('transformLayout', () => {
    describe('when the angle is 0', () => {
        it('returns undefined when no initial transform is provided', () => {
            const actual = transformLayout(0);

            expect(actual).toBeUndefined();
        });

        it('returns the initial transform unmodified when an initial transform is provided', () => {
            const initialTransform = 'scale(1.5)';
            const actual = transformLayout(0, initialTransform);

            expect(actual).toBe(initialTransform);
        });
    });

    describe('when the angle is not 0', () => {
        describe('and no initial transform is provided', () => {
            it('returns the full transformation string for a standard angle', () => {
                const actual = transformLayout(30);
                const expected = 'translateX(-50%) skew(60deg) rotate(75deg) translateY(50%)';

                expect(actual).toBe(expected);
            });

            it('omits skew when its angle is 0', () => {
                const actual = transformLayout(90);
                const expected = 'translateX(-50%) rotate(45deg) translateY(50%)';

                expect(actual).toBe(expected);
            });

            it('omits rotate when its angle is 0', () => {
                const actual = transformLayout(180);
                const expected = 'translateX(-50%) skew(-90deg) translateY(50%)';

                expect(actual).toBe(expected);
            });
        });

        describe('and an initial transform is provided', () => {
            it('appends the initial transform to the end of the full string', () => {
                const initialTransform = 'scale(1.2)';
                const actual = transformLayout(30, initialTransform);
                const expected = 'translateX(-50%) skew(60deg) rotate(75deg) translateY(50%) scale(1.2)';

                expect(actual).toBe(expected);
            });

            it('appends the initial transform when skew is omitted', () => {
                const initialTransform = 'opacity(0.5)';
                const actual = transformLayout(90, initialTransform);
                const expected = 'translateX(-50%) rotate(45deg) translateY(50%) opacity(0.5)';

                expect(actual).toBe(expected);
            });

            it('appends the initial transform when rotate is omitted', () => {
                const initialTransform = 'perspective(500px)';
                const actual = transformLayout(180, initialTransform);
                const expected = 'translateX(-50%) skew(-90deg) translateY(50%) perspective(500px)';

                expect(actual).toBe(expected);
            });
        });
    });
});
