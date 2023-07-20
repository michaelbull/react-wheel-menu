export function modulo(dividend: number, divisor: number): number {
    if (dividend === 0) {
        return 0;
    } else if (dividend === divisor) {
        return dividend;
    } else {
        const remainder = dividend % divisor;
        return (remainder + divisor) % divisor;
    }
}
