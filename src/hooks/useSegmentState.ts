import {
    createContext,
    useContext
} from 'react';
import type { SegmentState } from '../models';
import { DefaultSegmentState } from '../models';

export const SegmentStateContext = createContext<SegmentState>(DefaultSegmentState);

export function useSegmentState(): SegmentState {
    return useContext(SegmentStateContext);
}
