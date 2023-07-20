import type {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import { useLayout } from '../hooks';
import type {
    Direction,
    Justification
} from '../models';

export type LayoutProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly direction?: Direction;
    readonly justify?: Justification;
}

export function Layout<T extends ElementType = 'span'>(props: LayoutProps<T>) {
    const {
        as: Component = 'span',
        className,
        style,
        direction,
        justify,
        ...rest
    } = props;

    const layoutProps = useLayout({
        className,
        style,
        direction,
        justify
    });

    return <Component
        {...layoutProps}
        {...rest}
    />;
}
