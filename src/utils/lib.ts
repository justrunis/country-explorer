export function makeFirstLetterUppercase(string: string): string{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function round(value: number, precision: number): number {
    const factor: number = 10 ** precision;
    return Math.round(value * factor) / factor;
}