import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import {
    DEFAULT_JUSTIFY,
    DEFAULT_LAYOUT,
    Justify,
    Layout
} from '../models';
import {
    layoutItem,
    transformItem
} from '../dom';

export interface UseItemStyleProps {
    readonly layout?: Layout;
    readonly justify?: Justify;
}

export function useItemStyle(props: UseItemStyleProps): CSSProperties {
    const {
        layout = DEFAULT_LAYOUT,
        justify = DEFAULT_JUSTIFY
    } = props;

    const { angle } = useSliceState();

    return {
        ...layoutItem(layout, justify),
        transform: transformItem(angle)
    };
}
