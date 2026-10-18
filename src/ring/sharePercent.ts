const PERCENT_DECIMALS = 4;

/**
 * A share as a CSS percentage, rounded so that floating-point noise (`20.000000000000004%`) does
 * not reach the style.
 */
export function sharePercent(share: number): string {
    const percent = Number((share * 100).toFixed(PERCENT_DECIMALS));
    return `${percent}%`;
}
