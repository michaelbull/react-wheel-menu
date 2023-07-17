import { CSSProperties } from 'react';
import { useSliceState } from './useSliceState';
import { transformLayout } from '../dom';

export function useLayoutStyle(): CSSProperties {
    const { delta } = useSliceState();

    if (delta === 0) {
        return {};
    } else {
        return {
            transform: transformLayout(delta)
        };
    }
}
