import {
    useEffect,
    useState,
} from 'react';

export function useMousePosition(): [number, number] {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined;
        } else {
            function onMouseMove(event: MouseEvent) {
                setX(event.x);
                setY(event.y);
            }

            window.addEventListener('mousemove', onMouseMove);

            return function cleanup() {
                window.removeEventListener('mousemove', onMouseMove);
            };
        }
    }, []);

    return [x, y];
}
