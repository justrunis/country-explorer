export interface Country {
    name: { common: string };
    flags: { png: string };
    capital: string[];
    population: number;
    currencies: { [key: string]: { name: string; symbol: string } };
    languages: { [key: string]: string };
    timezones: string[];
}

interface Phonetic {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: {
        name: string;
        url: string;
    };
}

interface Definition {
    definition: string;
    example?: string;
    synonyms?: string[];
    antonyms?: string[];
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms?: string[];
    antonyms?: string[];
}

interface License {
    name: string;
    url: string;
}

export interface Word {
    word: string;
    phonetic?: string;
    phonetics?: Phonetic[];
    meanings: Meaning[];
    license?: License;
    sourceUrls: string[];
}
