import { Midpoint } from './Midpoint';
import {
    Options,
    Rect,
    Revalidate,
    SetElement,
    useRect
} from 'react-use-rect';
import { useState } from 'react';
import { rectMidpoint } from './rectMidpoint';

export interface UseElementMidpointReturn {
    readonly midpoint: Midpoint | null;
    readonly setElement: SetElement;
    readonly revalidate: Revalidate;
}

export function useElementMidpoint(options?: Options): UseElementMidpointReturn {
    const [midpoint, setMidpoint] = useState<Midpoint | null>(null);

    function dispatchChange(rect: Rect) {
        setMidpoint(rectMidpoint(rect));
    }

    const [setElement, revalidate] = useRect(dispatchChange, options);

    return {
        midpoint,
        setElement,
        revalidate
    };
}
