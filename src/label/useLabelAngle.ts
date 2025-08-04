import type { Degrees } from '../angle/Angle';
import {
    DefaultSegmentState,
    type SegmentState,
} from '../segment/SegmentState';
import { useSegmentState } from '../segment/useSegmentState';
import { DefaultSpokeState } from '../spoke/SpokeState';
import { useSpokeState } from '../spoke/useSpokeState';

export function useLabelAngle(): Degrees {
    const segment = useSegmentState();
    const spoke = useSpokeState();

    if (segment !== DefaultSegmentState) {
        return segmentCenter(segment);
    } else if (spoke !== DefaultSpokeState) {
        return spoke.angle;
    } else {
        return 0;
    }
}

function segmentCenter(state: SegmentState): Degrees {
    const {
        from,
        magnitude,
    } = state;

    return from + (magnitude / 2);
}
