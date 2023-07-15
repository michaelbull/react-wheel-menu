import {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import { useLabelStyle } from '../hooks';
import clsx from 'clsx';
import {
    Justification,
    Offset,
    Orientation
} from '../models';

export interface LabelProps extends ComponentProps<'span'> {
    readonly orient?: Orientation;
    readonly justify?: Justification;
    readonly offset?: Offset;
}

export function Label(props: PropsWithChildren<LabelProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        orient,
        justify,
        offset,
        ...rest
    } = props;

    const className = clsx('circle-menu-label', classNameProp);

    const labelStyle = useLabelStyle({
        orient,
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
