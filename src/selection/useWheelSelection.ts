import {
    createContext,
    useContext,
} from 'react';
import {
    DefaultWheelSelection,
    type WheelSelection,
} from './WheelSelection';

export const WheelSelectionContext = createContext<WheelSelection>(DefaultWheelSelection);

/**
 * The active segment of the wheel around the caller, and where the pointer is.
 *
 * The wheel never calls back on selection: read `active` when the gesture ends, such as on the
 * app's own `pointerup` or key release.
 */
export function useWheelSelection(): WheelSelection {
    return useContext(WheelSelectionContext);
}
