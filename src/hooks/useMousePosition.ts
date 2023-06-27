import {
    useCallback,
    useEffect,
    useState
} from 'react';

export function useMousePosition(): [number, number] {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const onMouseMove = useCallback((event: MouseEvent) => {
        setX(event.x);
        setY(event.y);
    }, []);

    useEffect(() => {
        addEventListener('mousemove', onMouseMove);

        return function cleanup() {
            removeEventListener('mousemove', onMouseMove);
        };
    }, [onMouseMove]);

    return [x, y];
}
