import {
    createContext,
    useContext
} from 'react';
import type { SpokeState } from './SpokeState';
import { DefaultSpokeState } from './SpokeState';

export const SpokeStateContext = createContext<SpokeState>(DefaultSpokeState);

export function useSpokeState(): SpokeState {
    return useContext(SpokeStateContext);
}
