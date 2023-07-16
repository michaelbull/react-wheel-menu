export interface Rect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
}

export function rectMidpoint(rect: Rect): [number, number] {
    const x = rect.x + (rect.width / 2);
    const y = rect.y + (rect.height / 2);
    return [x, y];
}
