export interface Country {
    name: { common: string };
    flags: { png: string };
    capital: string[];
    population: number;
    currencies: { [key: string]: { name: string; symbol: string } };
    languages: { [key: string]: string };
    timezones: string[];
}