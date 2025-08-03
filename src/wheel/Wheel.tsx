import type {
    ComponentPropsWithoutRef,
    ElementType,
} from 'react';
import { useWheel } from './useWheel';

export type WheelProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
};

export function Wheel<T extends ElementType = 'div'>(props: WheelProps<T>) {
    const {
        as: Component = 'div',
        className,
        ...rest
    } = props;

    const wheelProps = useWheel({
        className,
    });

    return <Component
        {...wheelProps}
        {...rest}
    />;
}
