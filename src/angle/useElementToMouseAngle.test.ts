/**
 * @vitest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
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
import { useElementToMouseAngle } from './useElementToMouseAngle';

let capturedDispatchChange: ((rect: Rect) => void) | null = null;
const mockSetElement = vi.fn();
const mockRevalidate = vi.fn();

vi.mock('react-use-rect', () => ({
    useRect: (dispatchChange: (rect: Rect) => void) => {
        capturedDispatchChange = dispatchChange;
        return [mockSetElement, mockRevalidate];
    },
}));

describe('useElementToMouseAngle', () => {
    beforeEach(() => {
        capturedDispatchChange = null;
        mockSetElement.mockClear();
        mockRevalidate.mockClear();
    });

    it('returns the setElement function from useRect', () => {
        const { result } = renderHook(() => {
            return useElementToMouseAngle();
        });

        expect(result.current.ref).toBe(mockSetElement);
    });

    it('returns a null angle before the element midpoint is known', () => {
        const { result } = renderHook(() => {
            return useElementToMouseAngle();
        });

        expect(result.current.angle).toBeNull();
    });

    it('calculates an angle once the element midpoint is determined', () => {
        const { result } = renderHook(() => {
            return useElementToMouseAngle();
        });

        act(() => {
            capturedDispatchChange!({
                x: 100,
                y: 100,
                width: 200,
                height: 200,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            });
        });

        expect(result.current.angle).toBeCloseTo((-3 * Math.PI) / 4); // Approx -3 * PI / 4
    });

    it('updates the angle when the mouse moves', () => {
        const { result } = renderHook(() => useElementToMouseAngle());

        act(() => {
            capturedDispatchChange!({
                x: 100,
                y: 100,
                width: 200,
                height: 200,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            });
        });

        expect(result.current.angle).toBeCloseTo((-3 * Math.PI) / 4);

        act(() => {
            fireEvent.mouseMove(window, { clientX: 200, clientY: 100 });
        });

        expect(result.current.angle).toBeCloseTo(-Math.PI / 2);
    });
});
