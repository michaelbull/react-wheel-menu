export function rectMidpoint(rect: DOMRect): [number, number] {
    const x = rect.x + (rect.width / 2);
    const y = rect.y + (rect.height / 2);
    return [x, y];
}
