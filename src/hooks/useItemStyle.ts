import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import {
    DEFAULT_JUSTIFICATION,
    DEFAULT_LAYOUT,
    Justification,
    Layout
} from '../models';
import {
    layoutItem,
    transformItem
} from '../dom';

export interface UseItemStyleProps {
    readonly layout?: Layout;
    readonly justify?: Justification;
}

export function useItemStyle(props: UseItemStyleProps): CSSProperties {
    const {
        layout = DEFAULT_LAYOUT,
        justify = DEFAULT_JUSTIFICATION
    } = props;

    const { angle } = useSliceState();

    return {
        ...layoutItem(layout, justify),
        transform: transformItem(angle)
    };
}
