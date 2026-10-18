import type {
    ComponentPropsWithoutRef,
    ElementType,
} from 'react';
import { WheelActiveContext } from '../selection/useWheelActive';
import { WheelSelectionContext } from '../selection/useWheelSelection';
import type { WheelSelection } from '../selection/WheelSelection';
import { useWheel } from './useWheel';

export type WheelProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    /**
     * The value of the active segment, for an app that works it out itself. The wheel does not
     * track the pointer: a segment shows that the pointer is over it with CSS `:hover`.
     */
    readonly active?: string;
};

export function Wheel<T extends ElementType = 'div'>(props: WheelProps<T>) {
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
