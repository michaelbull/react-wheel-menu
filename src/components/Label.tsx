import {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useLabelStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justify,
    Offset,
    Orientation
} from '../models';

export interface LabelProps extends ComponentProps<'span'> {
    readonly orientation?: Orientation;
    readonly justify?: Justify;
    readonly offset?: Offset;
}

export function Label(props: PropsWithChildren<LabelProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        orientation,
        justify,
        offset,
        ...rest
    } = props;

    const className = clsx('circle-menu-label', classNameProp);

    const labelStyle = useLabelStyle({
        orientation,
        justify,
        offset
    });

    const style: CSSProperties = {
        ...labelStyle,
        ...styleProp
    };

    return <span
        className={className}
        style={style}
        {...rest}
    />;
}
