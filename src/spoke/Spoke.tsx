import {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { Angle } from '../angle';
import { SpokeOffset } from './SpokeOffset';
import { useSpoke } from './useSpoke';
import { SpokeStateContext } from './useSpokeState';
import { SpokeAlignment } from './SpokeAlignment';

export type SpokeProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly angle: Angle;
    readonly align?: SpokeAlignment;
    readonly offset?: SpokeOffset;
};

export function Spoke<T extends ElementType = 'span'>(props: SpokeProps<T>) {
    const {
        as: Component = 'span',
        className,
        style,
        angle,
        align,
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
        align,
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
