import {
    ComponentProps,
    CSSProperties
} from 'react';
import {
    SliceStateContext,
    useSlice
} from '../hooks';
import clsx from 'clsx';
import { SliceState } from '../models';

export interface SliceProps extends ComponentProps<'div'> {
    readonly from: number;
    readonly to: number;
    readonly gapBefore?: string | number;
    readonly gapAfter?: string | number;
}

export function Slice(props: SliceProps) {
    const {
        className: classNameProp,
        style: styleProp,
        from: fromProp,
        to: toProp,
        gapBefore,
        gapAfter,
        children,
        ...rest
    } = props;

    const className = clsx('radial-wheel-slice', classNameProp);

    const {
        style: sliceStyle,
        from,
        to,
        angle
    } = useSlice({
        from: fromProp,
        to: toProp,
        gapBefore,
        gapAfter
    });

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
        <div className={className} style={style} {...rest} >
            <SliceStateContext.Provider value={state}>
                {children}
            </SliceStateContext.Provider>
        </div>
    );
}
