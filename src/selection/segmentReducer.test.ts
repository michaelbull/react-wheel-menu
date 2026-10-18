import {
    describe,
    expect,
    it,
} from 'vitest';
import { segmentReducer } from './segmentReducer';
import type { SelectableSegment } from './SelectableSegment';

const EAST: SelectableSegment = { value: 'east', from: 45, to: 135, ring: { inner: 0, outer: 1 } };
const WEST: SelectableSegment = { value: 'west', from: 225, to: 315, ring: { inner: 0, outer: 1 } };

describe('segmentReducer', () => {
    it('adds a segment', () => {
        expect(segmentReducer([EAST], { type: 'segment_added', segment: WEST })).toEqual([EAST, WEST]);
    });

    it('removes a segment by the record it was added as', () => {
        expect(segmentReducer([EAST, WEST], { type: 'segment_removed', segment: EAST })).toEqual([WEST]);
    });

    it('keeps an equal segment that was added as another record', () => {
        const copy: SelectableSegment = { ...EAST };
        expect(segmentReducer([copy], { type: 'segment_removed', segment: EAST })).toEqual([copy]);
    });
});
