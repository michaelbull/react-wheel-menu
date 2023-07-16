import {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType
} from 'react';
import { useLayoutStyle } from '../hooks';
import clsx from 'clsx';
import {
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
        direction,
        justify,
        ...rest
    } = props;

    const className = clsx('circle-menu-layout', classNameProp);

    const itemStyle = useLayoutStyle({
        direction,
        justify
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <Component
        className={className}
        style={style}
        {...rest}
    />;
}
