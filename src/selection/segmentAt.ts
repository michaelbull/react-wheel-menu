import type { Degrees } from '../angle/Angle';
import { degreesWithin } from './degreesWithin';
import type { SegmentSpan } from './SegmentSpan';

/**
 * The segment that holds the direction `degrees`, or `null` where none does, such as in a gap
 * between two segments.
 */
export function segmentAt<T extends SegmentSpan>(segments: readonly T[], degrees: Degrees): T | null {
    return segments.find(segment => degreesWithin(degrees, segment.from, segment.to)) ?? null;
}
