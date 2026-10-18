import type { PointerBearing } from '../pointer/PointerBearing';

export interface WheelSelection {
    /**
     * The value of the active segment, or `null` where none is active.
     */
    readonly active: string | null;
    /**
     * Where the pointer is, or `null` where the wheel does not track it (`select="hover"`) or
     * does not yet know it.
     */
    readonly pointer: PointerBearing | null;
}

export const DefaultWheelSelection: WheelSelection = {
    active: null,
    pointer: null,
};
