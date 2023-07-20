import {
    createContext,
    useContext
} from 'react';
import type { SliceState } from '../models';
import { DefaultSliceState } from '../models';

export const SliceStateContext = createContext<SliceState>(DefaultSliceState);

export function useSliceState(): SliceState {
    return useContext(SliceStateContext);
}
