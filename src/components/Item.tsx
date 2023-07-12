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
    readonly layout?: Layout;
    readonly justify?: Justify;
}

export function Item(props: ItemProps) {
    const {
        className: classNameProp,
        style: styleProp,
        layout,
        justify,
        ...rest
    } = props;

    const className = clsx('circle-menu-item', classNameProp);

    const itemStyle = useItemStyle({
        layout,
        justify
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
