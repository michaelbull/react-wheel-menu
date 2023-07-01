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

    const transform = `translateX(-50%) translateY(50%) skew(${skew}deg) rotate(${rotation}deg)`;

    if (layout === 'vertical') {
        switch (justify) {
            case 'start':
                return {
                    transform,
                    flexDirection: 'column-reverse',
                    justifyContent: 'flex-start'
                };

            case 'center':
                return {
                    transform,
                    flexDirection: 'column-reverse',
                    justifyContent: 'center'
                };

            case 'end':
                return {
                    transform,
                    flexDirection: 'column-reverse',
                    justifyContent: 'flex-end'
                };
        }
    } else {
        switch (justify) {
            case 'start':
                return {
                    transform,
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-end'
                };

            case 'center':
                return {
                    transform,
                    flexDirection: 'row-reverse',
                    justifyContent: 'center'
                };

            case 'end':
                return {
                    transform,
                    flexDirection: 'row-reverse',
                    justifyContent: 'flex-start'
                };
        }
    }
}
