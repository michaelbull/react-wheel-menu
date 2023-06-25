import React, {
    ComponentProps,
    CSSProperties
} from 'react';
import { useRadialWheelButton } from '../hooks';
import { RadialWheelSlice } from './RadialWheelSlice';
import clsx from 'clsx';

export type RadialWheelAnchorProps = ComponentProps<'a'>;

export function RadialWheelAnchor(props: RadialWheelAnchorProps) {
    const {
        className: classNameProp,
        style: styleProp,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-anchor', classNameProp);
    const { style: buttonStyle } = useRadialWheelButton();

    const style: CSSProperties = {
        ...buttonStyle,
        ...styleProp,
    };

    return (
        <a className={className} style={style} {...rest}>
            <RadialWheelSlice>{children}</RadialWheelSlice>
        </a>
    );
}
