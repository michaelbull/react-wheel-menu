import {
    createContext,
    useContext,
} from 'react';

/**
 * The value of the active segment alone, apart from `WheelSelectionContext`, so that a segment
 * renders again when the active segment changes and not on every move of the pointer.
 */
export const WheelActiveContext = createContext<string | null>(null);

export function useWheelActive(): string | null {
    return useContext(WheelActiveContext);
}
