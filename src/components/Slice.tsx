import {
    ComponentProps,
    CSSProperties
} from 'react';
import {
    SliceStateContext,
    useSlice
} from '../hooks';
import clsx from 'clsx';
import { Gap } from '../models';

export interface SliceProps extends ComponentProps<'div'> {
    readonly from: number;
    readonly to: number;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
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
        state,
        style: sliceStyle
    } = useSlice({
        from: fromProp,
        to: toProp,
        gapBefore,
        gapAfter
    });

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
