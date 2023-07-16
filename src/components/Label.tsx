import {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType
} from 'react';
import { useLabelStyle } from '../hooks';
import clsx from 'clsx';
import {
    DEFAULT_JUSTIFICATION,
    DEFAULT_ORIENTATION,
    Justification,
    Offset,
    Orientation
} from '../models';

export type LabelProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly orient?: Orientation;
    readonly justify?: Justification;
    readonly offset?: Offset;
}

export function Label<T extends ElementType = 'span'>(props: LabelProps<T>) {
    const {
        as: Component = 'span',
        className: classNameProp,
        style: styleProp,
        orient = DEFAULT_ORIENTATION,
        justify = DEFAULT_JUSTIFICATION,
        offset,
        ...rest
    } = props;

    const className = clsx(
        'circle-menu-label',
        `circle-menu-label--${justify}`,
        classNameProp
    );

    const labelStyle = useLabelStyle({
        orient,
        offset
    });

    const style: CSSProperties = {
        ...labelStyle,
        ...styleProp
    };

    return <Component
        className={className}
        style={style}
        {...rest}
    />;
}
