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
import { useElementMidpoint } from './useElementMidpoint';

let capturedDispatchChange: ((rect: Rect) => void) | null = null;
const mockSetElement = vi.fn();
const mockRevalidate = vi.fn();

vi.mock('react-use-rect', () => ({
    useRect: (dispatchChange: (rect: Rect) => void) => {
        capturedDispatchChange = dispatchChange;
        return [mockSetElement, mockRevalidate];
    },
}));

describe('useElementMidpoint', () => {
    beforeEach(() => {
        capturedDispatchChange = null;
        mockSetElement.mockClear();
        mockRevalidate.mockClear();
    });

    it('returns a null midpoint initially', () => {
        const { result } = renderHook(() => {
            return useElementMidpoint();
        });

        expect(result.current.midpoint).toBeNull();
    });

    it('returns the setElement function from useRect', () => {
        const { result } = renderHook(() => {
            return useElementMidpoint();
        });

        expect(result.current.setElement).toBe(mockSetElement);
    });

    it('returns the revalidate function from useRect', () => {
        const { result } = renderHook(() => {
            return useElementMidpoint();
        });

        expect(result.current.revalidate).toBe(mockRevalidate);
    });

    it('updates the midpoint when the dispatchChange callback is invoked', () => {
        const { result } = renderHook(() => {
            return useElementMidpoint();
        });

        expect(capturedDispatchChange).not.toBeNull();

        act(() => {
            capturedDispatchChange!({
                x: 0,
                y: 0,
                width: 200,
                height: 100,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            });
        });

        expect(result.current.midpoint).toEqual([100, 50]);
    });

    it('memoizes the dispatchChange callback', () => {
        const { rerender } = renderHook(() => {
            return useElementMidpoint();
        });

        const before = capturedDispatchChange;
        expect(before).not.toBeNull();

        rerender();

        const after = capturedDispatchChange;
        expect(after).toBe(before);
    });
});
