import {
    createContext,
    useContext,
} from 'react';
import {
    DefaultSegmentState,
    type SegmentState,
} from './SegmentState';

export const SegmentStateContext = createContext<SegmentState>(DefaultSegmentState);

export function useSegmentState(): SegmentState {
    return useContext(SegmentStateContext);
}
