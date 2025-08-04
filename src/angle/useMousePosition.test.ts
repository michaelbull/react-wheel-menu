/**
 * @vitest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import {
    act,
    renderHook,
} from '@testing-library/react';
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    type MockInstance,
    vi,
} from 'vitest';
import { useMousePosition } from './useMousePosition';

describe('useMousePosition', () => {
    let addSpy: MockInstance;
    let removeSpy: MockInstance;

    beforeEach(() => {
        addSpy = vi.spyOn(window, 'addEventListener');
        removeSpy = vi.spyOn(window, 'removeEventListener');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('returns the initial position as [0, 0]', () => {
        const { result } = renderHook(() => {
            return useMousePosition();
        });

        expect(result.current).toEqual([0, 0]);
    });

    it('attaches the mousemove event listener on mount', () => {
        renderHook(() => {
            return useMousePosition();
        });

        expect(addSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    });

    it('updates the position when the mouse moves', () => {
        const { result } = renderHook(() => {
            return useMousePosition();
        });

        act(() => {
            fireEvent.mouseMove(window, { clientX: 150, clientY: 250 });
        });

        expect(result.current).toEqual([150, 250]);
    });

    it('updates the position correctly on subsequent mouse moves', () => {
        const { result } = renderHook(() => {
            return useMousePosition();
        });

        act(() => {
            fireEvent.mouseMove(window, { clientX: 150, clientY: 250 });
        });

        expect(result.current).toEqual([150, 250]);

        act(() => {
            fireEvent.mouseMove(window, { clientX: 300, clientY: 400 });
        });

        expect(result.current).toEqual([300, 400]);
    });

    it('removes the mousemove event listener on unmount', () => {
        const { unmount } = renderHook(() => {
            return useMousePosition();
        });

        unmount();

        expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function));
    });
});
