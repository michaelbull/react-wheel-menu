import React, {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType
} from 'react';
import {
    SliceStateContext,
    useSlice
} from '../hooks';
import clsx from 'clsx';
import {
    Angle,
    Gap
} from '../models';

export type SliceProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
};

export function Slice<T extends ElementType = 'div'>(props: SliceProps<T>) {
    const {
        as: Component = 'div',
        className: classNameProp,
        style: styleProp,
        from,
        to,
        gapBefore,
        gapAfter,
        children,
        ...rest
    } = props;

    const className = clsx(
        'circle-menu-slice',
        classNameProp
    );

    const {
        state,
        style: sliceStyle
    } = useSlice({
        from,
        to,
        gapBefore,
        gapAfter
    });

    const style: CSSProperties = {
        ...sliceStyle,
        ...styleProp
    };

    return (
        <Component className={className} style={style} {...rest}>
            <SliceStateContext.Provider value={state}>
                {children}
            </SliceStateContext.Provider>
        </Component>
    );
}
