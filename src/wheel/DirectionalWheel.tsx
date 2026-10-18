import type {
    ComponentPropsWithoutRef,
    ElementType,
} from 'react';
import { useReducer } from 'react';
import type { Point } from '../pointer/Point';
import { useElementToPointer } from '../pointer/useElementToPointer';
import type { RadiusShare } from '../ring/RadiusShare';
import { activeSegment } from '../selection/activeSegment';
import { segmentReducer } from '../selection/segmentReducer';
import type { SelectableSegment } from '../selection/SelectableSegment';
import { SegmentDispatchContext } from '../selection/useSegmentDispatch';
import { WheelActiveContext } from '../selection/useWheelActive';
import { WheelSelectionContext } from '../selection/useWheelSelection';
import type { WheelSelection } from '../selection/WheelSelection';
import { useWheel } from './useWheel';
import { DEFAULT_WHEEL_DEAD_ZONE } from './WheelDeadZone';

export type DirectionalWheelProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    /**
     * The radius around the centre inside which nothing is active, as a share of the wheel's
     * radius.
     */
    readonly deadZone?: RadiusShare;
    /**
     * The position of the pointer to start from, before it first moves, such as that of the key
     * press that opened the wheel.
     */
    readonly initialPointer?: Point;
};

/**
 * A wheel that tracks the pointer and makes active the segment that the pointer points at, at any
 * distance, including past the edge of the wheel.
 */
export function DirectionalWheel<T extends ElementType = 'div'>(props: DirectionalWheelProps<T>) {
    const {
        as: Component = 'div',
        className,
        deadZone = DEFAULT_WHEEL_DEAD_ZONE,
        initialPointer,
        children,
        ...rest
    } = props;

    const wheelProps = useWheel({
        className,
    });

    const [segments, dispatch] = useReducer(segmentReducer, NO_SEGMENTS);

    const {
        ref,
        pointer,
    } = useElementToPointer({ initial: initialPointer });

    const active = pointer === null ? null : activeSegment(segments, pointer, deadZone);

    const selection: WheelSelection = {
        active,
        pointer,
    };

    return (
        <Component {...wheelProps} {...rest} ref={ref}>
            <SegmentDispatchContext.Provider value={dispatch}>
                <WheelActiveContext.Provider value={active}>
                    <WheelSelectionContext.Provider value={selection}>
                        {children}
                    </WheelSelectionContext.Provider>
                </WheelActiveContext.Provider>
            </SegmentDispatchContext.Provider>
        </Component>
    );
}

const NO_SEGMENTS: readonly SelectableSegment[] = [];
