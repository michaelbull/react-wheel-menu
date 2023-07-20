import type {
    ComponentPropsWithoutRef,
    ElementType
} from 'react';
import {
    SegmentStateContext,
    useSegment
} from '../hooks';
import type {
    Angle,
    Gap
} from '../models';

export type SegmentProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: Gap;
    readonly gapAfter?: Gap;
};

export function Segment<T extends ElementType = 'div'>(props: SegmentProps<T>) {
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
        ...segmentProps
    } = useSegment({
        className,
        style,
        from,
        to,
        gapBefore,
        gapAfter
    });

    return (
        <Component {...segmentProps} {...rest}>
            <SegmentStateContext.Provider value={state}>
                {children}
            </SegmentStateContext.Provider>
        </Component>
    );
}
