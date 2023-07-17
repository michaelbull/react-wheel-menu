import React, {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import {
    SliceStateContext,
    useSlice
} from '../hooks';
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
        className,
        style,
        from,
        to,
        gapBefore,
        gapAfter,
        children,
        ...rest
    } = props;

    const {
        state,
        ...sliceProps
    } = useSlice({
        className,
        style,
        from,
        to,
        gapBefore,
        gapAfter
    });

    return (
        <Component {...sliceProps} {...rest}>
            <SliceStateContext.Provider value={state}>
                {children}
            </SliceStateContext.Provider>
        </Component>
    );
}
