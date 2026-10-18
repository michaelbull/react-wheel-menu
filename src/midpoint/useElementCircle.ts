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
import type { Circle } from './Circle';
import { rectCircle } from './rectCircle';

export interface UseElementCircleReturn {
    readonly circle: Circle | null;
    readonly setElement: SetElement;
    readonly revalidate: Revalidate;
}

export function useElementCircle(options?: Options): UseElementCircleReturn {
    const [circle, setCircle] = useState<Circle | null>(null);

    const dispatchChange = useCallback((rect: Rect) => {
        setCircle(rectCircle(rect));
    }, []);

    const [setElement, revalidate] = useRect(dispatchChange, options);

    return {
        circle,
        setElement,
        revalidate,
    };
}
