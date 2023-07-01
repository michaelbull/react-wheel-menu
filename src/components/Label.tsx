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
    readonly justify?: Justify;
    readonly offset?: string | number;
    readonly orientation?: Orientation;
}

export function Label(props: PropsWithChildren<LabelProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        justify,
        offset,
        orientation,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-label', classNameProp);

    const labelStyle = useLabelStyle({
        justify,
        offset,
        orientation
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
