import type {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType,
} from 'react';
import type { RadiusShare } from './RadiusShare';
import { useRing } from './useRing';
import { RingStateContext } from './useRingState';

export type RingProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    readonly style?: CSSProperties;
    /**
     * The radius of the ring's hole, as a share of the wheel's radius.
     */
    readonly inner?: RadiusShare;
    /**
     * The radius of the ring's outer edge, as a share of the wheel's radius.
     */
    readonly outer?: RadiusShare;
};

/**
 * A band of the wheel between two radii. The segments inside it are drawn only inside the band.
 */
export function Ring<T extends ElementType = 'div'>(props: RingProps<T>) {
    const {
        as: Component = 'div',
        className,
        style,
        inner,
        outer,
        children,
        ...rest
    } = props;

    const {
        state,
        ...ringProps
    } = useRing({
        className,
        style,
        inner,
        outer,
    });

    return (
        <Component {...ringProps} {...rest}>
            <RingStateContext.Provider value={state}>
                {children}
            </RingStateContext.Provider>
        </Component>
    );
}
