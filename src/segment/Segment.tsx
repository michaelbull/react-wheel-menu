import type {
    ComponentPropsWithoutRef,
    CSSProperties,
    ElementType,
} from 'react';
import type { Angle } from '../angle/Angle';
import type { SegmentGap } from './SegmentGap';
import { useSegment } from './useSegment';
import { SegmentStateContext } from './useSegmentState';

export type SegmentProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> & {
    readonly as?: T;
    readonly className?: string;
    readonly style?: CSSProperties;
    readonly from: Angle;
    readonly to: Angle;
    readonly gapBefore?: SegmentGap;
    readonly gapAfter?: SegmentGap;
    /**
     * The segment's name for selection. In a wheel that selects by direction, a segment with a
     * value can become active.
     */
    readonly value?: string;
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
        value,
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
        gapAfter,
        value,
    });

    return (
        <Component {...segmentProps} {...rest}>
            <SegmentStateContext.Provider value={state}>
                {children}
            </SegmentStateContext.Provider>
        </Component>
    );
}
