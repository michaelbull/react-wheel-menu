import type { Degrees } from '../angle';
import {
    DefaultSegmentState,
    type SegmentState,
    useSegmentState,
} from '../segment';
import {
    DefaultSpokeState,
    useSpokeState,
} from '../spoke';

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
    const { from, magnitude } = state;
    return from + (magnitude / 2);
}
