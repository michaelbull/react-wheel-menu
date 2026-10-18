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
    useRing,
    type UseRingProps,
    type UseRingReturn,
} from './useRing';

function renderRing(props: UseRingProps): UseRingReturn {
    const { result } = renderHook(() => useRing(props));
    return result.current;
}

describe('useRing', () => {
    it('covers the whole wheel by default', () => {
        expect(renderRing({}).state).toEqual({ inner: 0, outer: 1 });
    });

    it('adds the ring class to the class name', () => {
        expect(renderRing({ className: 'custom' }).className).toBe('custom wheel-ring');
    });

    it('insets the element to the outer radius', () => {
        expect(renderRing({ outer: 0.6 }).style.inset).toBe('20%');
    });

    it('masks the hole of the ring', () => {
        expect(renderRing({ inner: 0.5 }).style.maskImage).toBe('radial-gradient(closest-side, transparent 50%, #000 50%)');
    });

    it('keeps the other properties of the style', () => {
        expect(renderRing({ style: { color: 'red' } }).style.color).toBe('red');
    });
});
