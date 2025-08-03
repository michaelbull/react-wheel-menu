import {
    useCallback,
    useState,
} from 'react';
import {
    type Options,
    type Rect,
    type Revalidate,
    type SetElement,
    useRect,
} from 'react-use-rect';
import type { Midpoint } from './Midpoint';
import { rectMidpoint } from './rectMidpoint';

export interface UseElementMidpointReturn {
    readonly midpoint: Midpoint | null;
    readonly setElement: SetElement;
    readonly revalidate: Revalidate;
}

export function useElementMidpoint(options?: Options): UseElementMidpointReturn {
    const [midpoint, setMidpoint] = useState<Midpoint | null>(null);

    const dispatchChange = useCallback((rect: Rect) => {
        setMidpoint(rectMidpoint(rect));
    }, []);

    const [setElement, revalidate] = useRect(dispatchChange, options);

    return {
        midpoint,
        setElement,
        revalidate,
    };
}
