import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useRadialWheelItem } from '../hooks';
import clsx from 'clsx';

export type RadialWheelButtonProps = ComponentProps<'button'>;

export function RadialWheelButton(props: RadialWheelButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-item', 'radial-wheel-item--button', classNameProp);
    const { style: itemStyle } = useRadialWheelItem();

    const style: CSSProperties = {
        ...styleProp,
        ...itemStyle
    };

    return (
        <button className={className} style={style} {...rest}>
            {children}
        </button>
    );
}
