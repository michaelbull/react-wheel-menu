import {
    useLayoutEffect,
    useState
} from 'react';

export function useElementRect(element: Element): DOMRect | null {
    const [rect, setRect] = useState<DOMRect | null>(null);

    useLayoutEffect(() => {
        setRect(element.getBoundingClientRect());
    }, [element]);

    return rect;
}
