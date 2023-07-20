import type {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import type {
    Angle,
    Offset
} from '../models';
import {
    SpokeStateContext,
    useSpoke
} from '../hooks';

export type SpokeProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly angle: Angle;
    readonly offset?: Offset;
};

export function Spoke<T extends ElementType = 'span'>(props: SpokeProps<T>) {
    const {
        as: Component = 'span',
        className,
        style,
        angle,
        offset,
        children,
        ...rest
    } = props;

    const {
        state,
        ...spokeProps
    } = useSpoke({
        className,
        style,
        angle,
        offset
    });

    return (
        <Component {...spokeProps} {...rest}>
            <SpokeStateContext.Provider value={state}>
                {children}
            </SpokeStateContext.Provider>
        </Component>
    );
}
