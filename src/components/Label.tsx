import {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useLabelStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justify,
    Orientation
} from '../models';

export interface LabelProps extends ComponentProps<'span'> {
    readonly orientation?: Orientation;
    readonly justify?: Justify;
    readonly offset?: string | number;
}

export function Label(props: PropsWithChildren<LabelProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        orientation,
        justify,
        offset,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-label', classNameProp);

    const labelStyle = useLabelStyle({
        orientation,
        justify,
        offset
    });

    const style: CSSProperties = {
        ...labelStyle,
        ...styleProp
    };

    return (
        <span className={className} style={style}  {...rest}>
            {children}
        </span>
    );
}
