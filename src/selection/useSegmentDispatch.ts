import {
    createContext,
    type Dispatch,
    useContext,
} from 'react';
import type { SegmentAction } from './SegmentAction';

/**
 * Where a segment with a `value` registers itself with the wheel that selects it, or `null` in a
 * wheel that does not select by direction.
 */
export const SegmentDispatchContext = createContext<Dispatch<SegmentAction> | null>(null);

export function useSegmentDispatch(): Dispatch<SegmentAction> | null {
    return useContext(SegmentDispatchContext);
}
