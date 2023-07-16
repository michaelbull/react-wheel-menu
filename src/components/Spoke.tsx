import React, {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType
} from 'react';
import {
    Angle,
    DEFAULT_OFFSET,
    Offset
} from '../models';
import clsx from 'clsx';
import { useSpokeStyle } from '../hooks';

export type SpokeProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly at: Angle;
    readonly offset?: Offset;
};

export function Spoke<T extends ElementType = 'span'>(props: SpokeProps<T>) {
    const {
        as: Component = 'span',
        className: classNameProp,
        style: styleProp,
        at,
        offset = DEFAULT_OFFSET,
        ...rest
    } = props;

    const className = clsx(
        'circle-menu-spoke',
        classNameProp
    );

    const spokeStyle = useSpokeStyle({
        at,
        offset
    });

    const style: CSSProperties = {
        ...spokeStyle,
        ...styleProp
    };

    return <Component
        className={className}
        style={style}
        {...rest}
    />;
}
