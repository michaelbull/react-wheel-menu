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

export interface AnchorProps extends ComponentProps<'a'> {
    readonly justify?: Justify;
    readonly layout?: Layout;
}

export function Anchor(props: AnchorProps) {
    const {
        className: classNameProp,
        style: styleProp,
        justify,
        layout,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--anchor', classNameProp);

    const itemStyle = useItemStyle({
        justify,
        layout
    });

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return <a
        className={className}
        style={style}
        {...rest}
    />;
}
