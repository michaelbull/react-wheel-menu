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
import { useElementToPointer } from './useElementToPointer';

let capturedDispatchChange: ((rect: Rect) => void) | null = null;
const mockSetElement = vi.fn();
const mockRevalidate = vi.fn();

vi.mock('react-use-rect', () => ({
    useRect: (dispatchChange: (rect: Rect) => void) => {
        capturedDispatchChange = dispatchChange;
        return [mockSetElement, mockRevalidate];
    },
}));

const WHEEL_RECT: Rect = {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    top: 100,
    right: 300,
    bottom: 300,
    left: 100,
};

describe('useElementToPointer', () => {
    beforeEach(() => {
        capturedDispatchChange = null;
        mockSetElement.mockClear();
        mockRevalidate.mockClear();
    });

    it('returns the setElement function from useRect', () => {
        const { result } = renderHook(() => {
            return useElementToPointer();
        });

        expect(result.current.ref).toBe(mockSetElement);
    });

    it('returns a null pointer before the element is measured', () => {
        const { result } = renderHook(() => {
            return useElementToPointer({ initial: [200, 0] });
        });

        expect(result.current.pointer).toBeNull();
    });

    it('returns a null pointer before the pointer is known', () => {
        const { result } = renderHook(() => {
            return useElementToPointer();
        });

        act(() => {
            capturedDispatchChange!(WHEEL_RECT);
        });

        expect(result.current.pointer).toBeNull();
    });

    it('returns the direction of the initial position', () => {
        const { result } = renderHook(() => {
            return useElementToPointer({ initial: [200, 0] });
        });

        act(() => {
            capturedDispatchChange!(WHEEL_RECT);
        });

        expect(result.current.pointer?.degrees).toBeCloseTo(0);
    });

    it('returns the direction of the pointer once it moves', () => {
        const { result } = renderHook(() => {
            return useElementToPointer();
        });

        act(() => {
            capturedDispatchChange!(WHEEL_RECT);
            fireEvent.pointerMove(window, { clientX: 400, clientY: 200 });
        });

        expect(result.current.pointer?.degrees).toBeCloseTo(90);
    });

    it('returns the distance of the pointer once it moves', () => {
        const { result } = renderHook(() => {
            return useElementToPointer();
        });

        act(() => {
            capturedDispatchChange!(WHEEL_RECT);
            fireEvent.pointerMove(window, { clientX: 400, clientY: 200 });
        });

        expect(result.current.pointer?.distancePixels).toBe(200);
    });

    it('returns half the width of the element as the radius', () => {
        const { result } = renderHook(() => {
            return useElementToPointer({ initial: [200, 0] });
        });

        act(() => {
            capturedDispatchChange!(WHEEL_RECT);
        });

        expect(result.current.pointer?.radiusPixels).toBe(100);
    });
});
