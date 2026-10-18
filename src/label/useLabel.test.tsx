/**
 * @vitest-environment jsdom
 */
import { renderHook } from '@testing-library/react';
import type { PropsWithChildren } from 'react';
import {
    describe,
    expect,
    it,
} from 'vitest';
import type { SegmentState } from '../segment/SegmentState';
import { SegmentStateContext } from '../segment/useSegmentState';
import { useLabel } from './useLabel';

describe('useLabel', () => {
    it('adds the label class to the class name', () => {
        const { result } = renderHook(() => {
            return useLabel({ className: 'custom' });
        });

        expect(result.current.className).toBe('custom wheel-label wheel-label--center');
    });

    it('adds the class of the justification', () => {
        const { result } = renderHook(() => {
            return useLabel({ justify: 'end' });
        });

        expect(result.current.className).toBe('wheel-label wheel-label--end');
    });

    it('keeps the other properties of the style', () => {
        const { result } = renderHook(() => {
            return useLabel({ style: { color: 'red' } });
        });

        expect(result.current.style.color).toBe('red');
    });

    it('rotates the label to the angle of its segment', () => {
        const segment: SegmentState = { from: 30, to: 90, magnitude: 60 };

        function wrapper(props: PropsWithChildren) {
            return <SegmentStateContext.Provider value={segment}>{props.children}</SegmentStateContext.Provider>;
        }

        const { result } = renderHook(() => {
            return useLabel({ offset: 10, style: { transform: 'scale(2)' } });
        }, { wrapper });

        expect(result.current.style.transform).toBe('translateY(10px) rotate(-60deg) scale(2)');
    });
});
