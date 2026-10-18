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
    useWheel,
    type UseWheelProps,
    type UseWheelReturn,
} from './useWheel';

function renderWheel(props: UseWheelProps): UseWheelReturn {
    const { result } = renderHook(() => useWheel(props));
    return result.current;
}

describe('useWheel', () => {
    it('adds the wheel class to the class name', () => {
        expect(renderWheel({ className: 'custom' }).className).toBe('custom wheel');
    });

    it('returns the wheel class without a class name', () => {
        expect(renderWheel({}).className).toBe('wheel');
    });
});
