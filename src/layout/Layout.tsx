import type {
    ComponentPropsWithoutRef,
    ElementType,
} from 'react';
import type { LayoutDirection } from './LayoutDirection';
import type { LayoutJustification } from './LayoutJustification';
import { useLayout } from './useLayout';

export type LayoutProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly direction?: LayoutDirection;
    readonly justify?: LayoutJustification;
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
        justify,
    });

    return <Component
        {...layoutProps}
        {...rest}
    />;
}
