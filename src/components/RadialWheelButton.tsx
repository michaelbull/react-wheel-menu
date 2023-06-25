import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useRadialWheelButton } from '../hooks';
import { RadialWheelSlice } from './RadialWheelSlice';
import clsx from 'clsx';

export type RadialWheelButtonProps = ComponentProps<'button'>;

export function RadialWheelButton(props: RadialWheelButtonProps) {
    const {
        className: classNameProp,
        style: styleProp,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-button', classNameProp);
    const { style: buttonStyle } = useRadialWheelButton();

    const style: CSSProperties = {
        ...styleProp,
        ...buttonStyle
    };

    return (
        <button className={className} style={style} {...rest}>
            <RadialWheelSlice>{children}</RadialWheelSlice>
        </button>
    );
}
