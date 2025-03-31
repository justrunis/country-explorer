export function makeFirstLetterUppercase(string: string): string{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function round(value: number, precision: number): number {
    const factor: number = 10 ** precision;
    return Math.round(value * factor) / factor;
}

export function formatNumber(num: number): string {
    const units = ["", "K", "M", "B", "T", "Q"];
    let unitIndex = 0;

    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }

    return num.toFixed(1).replace(/\.0$/, "") + units[unitIndex];
}