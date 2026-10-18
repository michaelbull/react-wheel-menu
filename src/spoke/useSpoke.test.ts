/**
 * @vitest-environment jsdom
 */
import { renderHook } from '@testing-library/react';
import {
    describe,
    expect,
    it,
} from 'vitest';
import {
    useSpoke,
    type UseSpokeProps,
    type UseSpokeReturn,
} from './useSpoke';

function renderSpoke(props: UseSpokeProps): UseSpokeReturn {
    const { result } = renderHook(() => useSpoke(props));
    return result.current;
}

describe('useSpoke', () => {
    it('normalises the angle into the state', () => {
        expect(renderSpoke({ angle: 450 }).state.angle).toBe(90);
    });

    it('converts an angle with a unit into degrees', () => {
        expect(renderSpoke({ angle: '0.25turn' }).state.angle).toBe(90);
    });

    it('adds the classes of the default alignment', () => {
        expect(renderSpoke({ angle: 0, className: 'custom' }).className).toBe('custom wheel-spoke wheel-spoke--center');
    });

    it('adds the class of the alignment', () => {
        expect(renderSpoke({ angle: 0, align: 'left' }).className).toBe('wheel-spoke wheel-spoke--left');
    });

    it('rotates and offsets the spoke before the transform of the style', () => {
        expect(renderSpoke({ angle: 45, offset: 10, style: { transform: 'scale(2)' } }).style.transform).toBe('rotate(45deg) translateY(10px) scale(2)');
    });
});
