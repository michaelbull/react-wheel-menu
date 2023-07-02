import {
    createContext,
    useContext
} from 'react';
import {
    EmptySliceState,
    SliceState
} from '../models';

export const SliceStateContext = createContext<SliceState>(EmptySliceState);

export function useSliceState(): SliceState {
    return useContext(SliceStateContext);
}
