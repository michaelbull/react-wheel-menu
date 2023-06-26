import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useItemStyle } from '../hooks';
import clsx from 'clsx';

export type ButtonProps = ComponentProps<'button'>;

export function Button(props: ButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--button', classNameProp);

    const itemStyle = useItemStyle();

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
