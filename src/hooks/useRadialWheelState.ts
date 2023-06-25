import {
    createContext,
    useContext
} from 'react';
import {
    DefaultRadialWheelState,
    RadialWheelState
} from '../state';

export const RadialWheelStateContext = createContext<RadialWheelState>(DefaultRadialWheelState);

export function useRadialWheelState(): RadialWheelState {
    return useContext(RadialWheelStateContext);
}
