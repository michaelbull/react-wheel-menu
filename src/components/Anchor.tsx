import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useItemStyle } from '../hooks';
import clsx from 'clsx';

export type AnchorProps = ComponentProps<'a'>;

export function Anchor(props: AnchorProps) {
    const {
        className: classNameProp,
        style: styleProp,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--anchor', classNameProp);

    const itemStyle = useItemStyle();

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
