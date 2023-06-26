import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useRadialWheelItem } from '../hooks';
import clsx from 'clsx';

export type RadialWheelAnchorProps = ComponentProps<'a'>;

export function RadialWheelAnchor(props: RadialWheelAnchorProps) {
    const {
        className: classNameProp,
        style: styleProp,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--anchor', classNameProp);
    const { style: itemStyle } = useRadialWheelItem();

    const style: CSSProperties = {
        ...itemStyle,
        ...styleProp
    };

    return (
        <a className={className} style={style} {...rest}>
            {children}
        </a>
    );
}
