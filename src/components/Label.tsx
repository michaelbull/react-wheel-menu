import React, {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useLabelStyle } from '../hooks';
import clsx from 'clsx';
import {
    DEFAULT_LABEL_ORIENTATION,
    LabelOrientation
} from '../models';

export interface LabelProps extends ComponentProps<'span'> {
    readonly orientation?: LabelOrientation;
}

export function Label(props: PropsWithChildren<LabelProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        orientation = DEFAULT_LABEL_ORIENTATION,
        ...rest
    } = props;

    const className = clsx('radial-wheel-label', classNameProp);

    const labelStyle = useLabelStyle({ orientation });

    const style: CSSProperties = {
        ...labelStyle,
        ...styleProp
    };

    return <span
        className={className}
        style={style} {...rest}
    />;
}
