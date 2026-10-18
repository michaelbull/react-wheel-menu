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
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import { usePointerPosition } from './usePointerPosition';

describe('usePointerPosition', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('returns null before the pointer is known', () => {
        const { result } = renderHook(() => {
            return usePointerPosition();
        });

        expect(result.current).toBeNull();
    });

    it('returns the initial position before the pointer moves', () => {
        const { result } = renderHook(() => {
            return usePointerPosition([10, 20]);
        });

        expect(result.current).toEqual([10, 20]);
    });

    it('updates the position when the pointer moves', () => {
        const { result } = renderHook(() => {
            return usePointerPosition();
        });

        act(() => {
            fireEvent.pointerMove(window, { clientX: 150, clientY: 250 });
        });

        expect(result.current).toEqual([150, 250]);
    });

    it('updates the position when the pointer presses without a move', () => {
        const { result } = renderHook(() => {
            return usePointerPosition();
        });

        act(() => {
            fireEvent.pointerDown(window, { clientX: 30, clientY: 40 });
        });

        expect(result.current).toEqual([30, 40]);
    });

    it('replaces the initial position when the pointer moves', () => {
        const { result } = renderHook(() => {
            return usePointerPosition([10, 20]);
        });

        act(() => {
            fireEvent.pointerMove(window, { clientX: 300, clientY: 400 });
        });

        expect(result.current).toEqual([300, 400]);
    });

    it('removes the pointermove listener on unmount', () => {
        const removeSpy = vi.spyOn(window, 'removeEventListener');

        const { unmount } = renderHook(() => {
            return usePointerPosition();
        });

        unmount();

        expect(removeSpy).toHaveBeenCalledWith('pointermove', expect.any(Function));
    });

    it('removes the pointerdown listener on unmount', () => {
        const removeSpy = vi.spyOn(window, 'removeEventListener');

        const { unmount } = renderHook(() => {
            return usePointerPosition();
        });

        unmount();

        expect(removeSpy).toHaveBeenCalledWith('pointerdown', expect.any(Function));
    });
});
