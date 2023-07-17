import {
    createContext,
    useContext
} from 'react';
import {
    DefaultSliceState,
    SliceState
} from '../models';

export const SliceStateContext = createContext<SliceState>(DefaultSliceState);

export function useSliceState(): SliceState {
    return useContext(SliceStateContext);
}
