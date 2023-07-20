import {
    createContext,
    useContext
} from 'react';
import type { SpokeState } from '../models';
import { DefaultSpokeState } from '../models';

export const SpokeStateContext = createContext<SpokeState>(DefaultSpokeState);

export function useSpokeState(): SpokeState {
    return useContext(SpokeStateContext);
}
