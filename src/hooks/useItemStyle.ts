import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import {
    DEFAULT_JUSTIFY,
    DEFAULT_LAYOUT,
    Justify,
    Layout
} from '../models';

export interface UseItemStyleProps {
    readonly justify?: Justify;
    readonly layout?: Layout;
}

export function useItemStyle(props: UseItemStyleProps): CSSProperties {
    const {
        justify = DEFAULT_JUSTIFY,
        layout = DEFAULT_LAYOUT
    } = props;

    const { angle } = useSliceState();

    const skew = -(angle - 90);
    const rotation = 90 - (angle / 2);

    const transform = `translateX(-50%) skew(${skew}deg) rotate(${rotation}deg)`;
    const flexDirection = layout === 'vertical' ? 'column-reverse' : 'row-reverse';

    switch (justify) {
        case 'start':
            return {
                transform,
                flexDirection,
                justifyContent: 'flex-start'
            };

        case 'center':
            return {
                transform,
                flexDirection,
                justifyContent: 'center'
            };

        case 'end':
            return {
                transform,
                flexDirection,
                justifyContent: 'flex-end'
            };
    }
}
