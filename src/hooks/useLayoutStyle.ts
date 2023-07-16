import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import { transformLayout } from '../dom';

export function useLayoutStyle(): CSSProperties {
    const { angle } = useSliceState();

    return {
        transform: transformLayout(angle)
    };
}
