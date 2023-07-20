import {
    createContext,
    useContext
} from 'react';
import type { SegmentState } from './SegmentState';
import { DefaultSegmentState } from './SegmentState';

export const SegmentStateContext = createContext<SegmentState>(DefaultSegmentState);

export function useSegmentState(): SegmentState {
    return useContext(SegmentStateContext);
}
