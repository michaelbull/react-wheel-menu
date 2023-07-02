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

export interface ItemProps extends ComponentProps<'div'> {
    readonly justify?: Justify;
    readonly layout?: Layout;
}

export function Item(props: ItemProps) {
    const {
        className: classNameProp,
        style: styleProp,
        justify,
        layout,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', classNameProp);

    const itemStyle = useItemStyle({
        justify,
        layout
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <div
        className={className}
        style={style}
        {...rest}
    />;
}
