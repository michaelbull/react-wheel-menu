/**
 * @vitest-environment jsdom
 */
import { fireEvent } from '@testing-library/dom';
import {
    act,
    cleanup,
    render,
    screen,
} from '@testing-library/react';
import type { Rect } from 'react-use-rect';
import {
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    vi,
} from 'vitest';
import { Ring } from '../ring/Ring';
import { Segment } from '../segment/Segment';
import { useWheelSelection } from '../selection/useWheelSelection';
import { DirectionalWheel } from './DirectionalWheel';

let capturedDispatchChange: ((rect: Rect) => void) | null = null;

vi.mock('react-use-rect', () => ({
    useRect: (dispatchChange: (rect: Rect) => void) => {
        capturedDispatchChange = dispatchChange;
        return [vi.fn(), vi.fn()];
    },
}));

/**
 * A wheel 200 pixels wide, centred on [200, 200].
 */
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

function measureWheel() {
    act(() => {
        capturedDispatchChange!(WHEEL_RECT);
    });
}

function movePointer(x: number, y: number) {
    act(() => {
        fireEvent.pointerMove(window, { clientX: x, clientY: y });
    });
}

function Active() {
    const { active } = useWheelSelection();
    return <span data-testid="active">{active ?? 'none'}</span>;
}

function activeText(): string | null {
    return screen.getByTestId('active').textContent;
}

interface HalvesProps {
    readonly deadZone?: number;
}

function DirectionHalves(props: HalvesProps) {
    const { deadZone } = props;

    return (
        <DirectionalWheel deadZone={deadZone}>
            <Segment value="east" from={0} to={180} data-testid="east" />
            <Segment value="west" from={180} to={360} data-testid="west" />
            <Active />
        </DirectionalWheel>
    );
}

describe('DirectionalWheel', () => {
    beforeEach(() => {
        capturedDispatchChange = null;
    });

    afterEach(() => {
        cleanup();
    });

    describe('selection', () => {
        it('marks the segment in the direction of the pointer as active', () => {
            render(<DirectionHalves />);
            measureWheel();
            movePointer(250, 200);

            expect(screen.getByTestId('east').hasAttribute('data-active')).toBe(true);
        });

        it('does not mark the other segments as active', () => {
            render(<DirectionHalves />);
            measureWheel();
            movePointer(250, 200);

            expect(screen.getByTestId('west').hasAttribute('data-active')).toBe(false);
        });

        it('gives the active segment to useWheelSelection', () => {
            render(<DirectionHalves />);
            measureWheel();
            movePointer(150, 200);

            expect(activeText()).toBe('west');
        });

        it('picks a segment for a pointer past the edge of the wheel', () => {
            render(<DirectionHalves />);
            measureWheel();
            movePointer(900, 200);

            expect(activeText()).toBe('east');
        });

        it('marks nothing as active inside the dead zone', () => {
            render(<DirectionHalves deadZone={0.5} />);
            measureWheel();
            movePointer(240, 200);

            expect(activeText()).toBe('none');
        });

        it('marks nothing as active before the pointer is known', () => {
            render(<DirectionHalves />);
            measureWheel();

            expect(activeText()).toBe('none');
        });

        it('picks from the initial pointer before the pointer moves', () => {
            render(
                <DirectionalWheel initialPointer={[150, 200]}>
                    <Segment value="east" from={0} to={180} />
                    <Segment value="west" from={180} to={360} />
                    <Active />
                </DirectionalWheel>,
            );
            measureWheel();

            expect(activeText()).toBe('west');
        });


        it('stops picking a segment once it unmounts', () => {
            const { rerender } = render(<DirectionHalves />);
            measureWheel();
            movePointer(250, 200);

            rerender(
                <DirectionalWheel>
                    <Segment value="west" from={180} to={360} />
                    <Active />
                </DirectionalWheel>,
            );

            expect(activeText()).toBe('none');
        });
    });

    describe('with rings', () => {
        function TwoRings() {
            return (
                <DirectionalWheel>
                    <Ring inner={0.6} outer={1}>
                        <Segment value="far-east" from={0} to={180} />
                        <Segment value="far-west" from={180} to={360} />
                    </Ring>
                    <Ring inner={0.2} outer={0.6}>
                        <Segment value="near-east" from={0} to={180} />
                        <Segment value="near-west" from={180} to={360} />
                    </Ring>
                    <Active />
                </DirectionalWheel>
            );
        }

        it('picks from the inner ring for a short distance', () => {
            render(<TwoRings />);
            measureWheel();
            movePointer(240, 200);

            expect(activeText()).toBe('near-east');
        });

        it('picks from the outer ring for a long distance', () => {
            render(<TwoRings />);
            measureWheel();
            movePointer(120, 200);

            expect(activeText()).toBe('far-west');
        });

        it('picks from the outermost ring past the edge of the wheel', () => {
            render(<TwoRings />);
            measureWheel();
            movePointer(900, 200);

            expect(activeText()).toBe('far-east');
        });
    });

});
