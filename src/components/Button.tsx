import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useItemStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justify,
    Layout
} from '../models';

export interface ButtonProps extends ComponentProps<'button'> {
    readonly justify?: Justify;
    readonly layout?: Layout;
}

export function Button(props: ButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        justify,
        layout,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--button', classNameProp);

    const itemStyle = useItemStyle({
        justify,
        layout
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <button
        className={className}
        style={style}
        {...rest}
    />;
}
