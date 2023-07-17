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
import {
    SpokeStateContext,
    useSpoke
} from '../hooks';

export type SpokeProps<T extends ElementType = 'span'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly angle: Angle;
    readonly offset?: Offset;
};

export function Spoke<T extends ElementType = 'span'>(props: SpokeProps<T>) {
    const {
        as: Component = 'span',
        className: classNameProp,
        style: styleProp,
        angle,
        offset = DEFAULT_OFFSET,
        children,
        ...rest
    } = props;

    const className = clsx(
        'circle-menu-spoke',
        classNameProp
    );

    const {
        state,
        style: spokeStyle
    } = useSpoke({
        angle,
        offset
    });

    const style: CSSProperties = {
        ...spokeStyle,
        ...styleProp
    };

    return (
        <Component className={className} style={style} {...rest}>
            <SpokeStateContext.Provider value={state}>
                {children}
            </SpokeStateContext.Provider>
        </Component>
    );
}
