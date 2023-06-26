import React, {
    ComponentProps,
    CSSProperties,
    PropsWithChildren
} from 'react';
import {
    SliceStateContext,
    useSlice
} from '../hooks';
import clsx from 'clsx';
import { SliceState } from '../models';

export interface SliceProps extends ComponentProps<'span'> {
    readonly from: number;
    readonly to: number;
}

export function Slice(props: PropsWithChildren<SliceProps>) {
    const {
        className: classNameProp,
        style: styleProp,
        from: fromProp,
        to: toProp,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-slice', classNameProp);

    const {
        style: sliceStyle,
        from,
        to,
        angle
    } = useSlice({ from: fromProp, to: toProp });

    const state: SliceState = {
        from,
        to,
        angle
    };

    const style: CSSProperties = {
        ...sliceStyle,
        ...styleProp
    };

    return (
        <span className={className} style={style} {...rest} >
            <SliceStateContext.Provider value={state}>
                {children}
            </SliceStateContext.Provider>
        </span>
    );
}
