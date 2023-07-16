import {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType
} from 'react';
import { useLayoutStyle } from '../hooks';
import clsx from 'clsx';
import {
    DEFAULT_DIRECTION,
    DEFAULT_JUSTIFICATION,
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
        className: classNameProp,
        style: styleProp,
        direction = DEFAULT_DIRECTION,
        justify = DEFAULT_JUSTIFICATION,
        ...rest
    } = props;

    const className = clsx(
        'circle-menu-layout',
        `circle-menu-layout--${direction}`,
        `circle-menu-layout--${justify}`,
        classNameProp
    );

    const layoutStyle = useLayoutStyle();

    const style: CSSProperties = {
        ...layoutStyle,
        ...styleProp
    };

    return <Component
        className={className}
        style={style}
        {...rest}
    />;
}
