import type {
    ComponentPropsWithoutRef,
    ElementType,
    ReactNode,
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
import {
    DEFAULT_WHEEL_SELECT,
    type WheelSelect,
} from './WheelSelect';

export type WheelProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    readonly select?: WheelSelect;
    /**
     * The radius around the centre inside which nothing is active, as a share of the wheel's
     * radius. Only for `select="direction"`.
     */
    readonly deadZone?: RadiusShare;
    /**
     * The value of the active segment, where the app works it out itself. It takes the place of
     * the one the wheel works out.
     */
    readonly active?: string;
    /**
     * The position of the pointer to start from, before it first moves, such as that of the key
     * press that opened the wheel. Only for `select="direction"`.
     */
    readonly initialPointer?: Point;
};

export function Wheel<T extends ElementType = 'div'>(props: WheelProps<T>) {
    const {
        select = DEFAULT_WHEEL_SELECT,
        deadZone = DEFAULT_WHEEL_DEAD_ZONE,
        active,
        initialPointer,
        ...rest
    } = props;

    if (select === 'direction') {
        return <DirectionWheel {...rest} deadZone={deadZone} active={active} initialPointer={initialPointer} />;
    } else {
        return <HoverWheel {...rest} active={active} />;
    }
}

type WheelElementProps = Omit<WheelProps<ElementType>, 'select' | 'deadZone' | 'active' | 'initialPointer'> & {
    readonly className?: string;
    readonly children?: ReactNode;
};

type HoverWheelProps = WheelElementProps & {
    readonly active: string | undefined;
};

type DirectionWheelProps = WheelElementProps & {
    readonly deadZone: RadiusShare;
    readonly active: string | undefined;
    readonly initialPointer: Point | undefined;
};

function HoverWheel(props: HoverWheelProps) {
    const {
        as: Component = 'div',
        className,
        active: activeProp,
        children,
        ...rest
    } = props;

    const wheelProps = useWheel({
        className,
    });

    const active = activeProp ?? null;

    const selection: WheelSelection = {
        active,
        pointer: null,
    };

    return (
        <Component {...wheelProps} {...rest}>
            <WheelActiveContext.Provider value={active}>
                <WheelSelectionContext.Provider value={selection}>
                    {children}
                </WheelSelectionContext.Provider>
            </WheelActiveContext.Provider>
        </Component>
    );
}

function DirectionWheel(props: DirectionWheelProps) {
    const {
        as: Component = 'div',
        className,
        deadZone,
        active: activeProp,
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

    const pointed = pointer === null ? null : activeSegment(segments, pointer, deadZone);
    const active = activeProp ?? pointed;

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
