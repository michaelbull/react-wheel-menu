/**
 * @vitest-environment jsdom
 */
import {
    act,
    renderHook,
} from '@testing-library/react';
import type { Rect } from 'react-use-rect';
import {
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import { useElementCircle } from './useElementCircle';

let capturedDispatchChange: ((rect: Rect) => void) | null = null;
const mockSetElement = vi.fn();

vi.mock('react-use-rect', () => ({
    useRect: (dispatchChange: (rect: Rect) => void) => {
        capturedDispatchChange = dispatchChange;
        return [mockSetElement, vi.fn()];
    },
}));

describe('useElementCircle', () => {
    beforeEach(() => {
        capturedDispatchChange = null;
    });

    it('returns a null circle before the element is measured', () => {
        const { result } = renderHook(() => {
            return useElementCircle();
        });

        expect(result.current.circle).toBeNull();
    });

    it('returns the setElement function from useRect', () => {
        const { result } = renderHook(() => {
            return useElementCircle();
        });

        expect(result.current.setElement).toBe(mockSetElement);
    });

    it('returns the circle of the element once it is measured', () => {
        const { result } = renderHook(() => {
            return useElementCircle();
        });

        const rect: Rect = { x: 100, y: 100, width: 200, height: 200, top: 100, right: 300, bottom: 300, left: 100 };

        act(() => {
            capturedDispatchChange!(rect);
        });

        expect(result.current.circle).toEqual({ midpoint: [200, 200], radiusPixels: 100 });
    });
});
