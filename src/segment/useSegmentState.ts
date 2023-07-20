import {
    createContext,
    useContext
} from 'react';
import {
    DefaultSegmentState,
    SegmentState
} from './SegmentState';

export const SegmentStateContext = createContext<SegmentState>(DefaultSegmentState);

export function useSegmentState(): SegmentState {
    return useContext(SegmentStateContext);
}
