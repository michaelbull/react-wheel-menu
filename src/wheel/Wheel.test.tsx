/**
 * @vitest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import {
    act,
    cleanup,
    render,
    renderHook,
    screen,
} from '@testing-library/react';
import {
    afterEach,
    describe,
    expect,
    it,
} from 'vitest';
import { Segment } from '../segment/Segment';
import { useWheelSelection } from '../selection/useWheelSelection';
import { Wheel } from './Wheel';

function Active() {
    const { active } = useWheelSelection();
    return <span data-testid="active">{active ?? 'none'}</span>;
}

describe('Wheel', () => {
    afterEach(() => {
        cleanup();
    });

    describe('selection', () => {
        it('does not mark a segment as active when the pointer moves', () => {
            render(
                <Wheel>
                    <Segment value="east" from={0} to={180} data-testid="east" />
                </Wheel>,
            );

            act(() => {
                fireEvent.pointerMove(window, { clientX: 250, clientY: 200 });
            });

            expect(screen.getByTestId('east').hasAttribute('data-active')).toBe(false);
        });

        it('marks the segment that the active prop names as active', () => {
            render(
                <Wheel active="east">
                    <Segment value="east" from={0} to={180} data-testid="east" />
                </Wheel>,
            );

            expect(screen.getByTestId('east').hasAttribute('data-active')).toBe(true);
        });

        it('gives the active prop to useWheelSelection', () => {
            render(
                <Wheel active="east">
                    <Segment value="east" from={0} to={180} />
                    <Active />
                </Wheel>,
            );

            expect(screen.getByTestId('active').textContent).toBe('east');
        });

        it('gives no pointer to useWheelSelection', () => {
            const { result } = renderHook(() => useWheelSelection(), { wrapper: Wheel });

            expect(result.current.pointer).toBeNull();
        });
    });
});
