import {
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
    readonly layout?: Layout;
    readonly justify?: Justify;
}

export function Button(props: ButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        layout,
        justify,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--button', classNameProp);

    const itemStyle = useItemStyle({
        layout,
        justify
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
