import type {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import type { Angle } from '../angle';
import type { SpokeOffset } from './SpokeOffset';
import { useSpoke } from './useSpoke';
import { SpokeStateContext } from './useSpokeState';

export type SpokeProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly angle: Angle;
    readonly offset?: SpokeOffset;
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
