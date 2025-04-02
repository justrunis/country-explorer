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

export interface GlobalCrypto {
    active_markets: string; // Number of active markets where cryptocurrencies are traded.
    avg_change_percent: string; // The average percentage change in prices across all cryptocurrencies.
    btc_d: string; // Bitcoin dominance - the percentage of total market capitalization held by Bitcoin.
    coins_count: number; // The total number of cryptocurrencies being tracked.
    eth_d: string; // Ethereum dominance - the percentage of total market capitalization held by Ethereum.
    mcap_ath: string; // All-time high (ATH) of the total cryptocurrency market capitalization.
    mcap_change: string; // Percentage change in total market capitalization over a specific period.
    total_mcap: number; // The current total market capitalization of all cryptocurrencies.
    total_volume: number; // The total trading volume of all cryptocurrencies in the market.
    volume_ath: string; // All-time high (ATH) of the total trading volume in the crypto market.
    volume_change: string; // Percentage change in total trading volume over a specific period.
}

export interface Crypto {
    csupply: string;
    id: string;
    market_cap_usd: string;
    msupply: string;
    name: string;
    nameid: string
    percent_change_1h: string;
    percent_change_7d: string;
    percent_change_24h: string
    price_btc: string;
    price_usd: string
    rank: number;
    symbol: string
    tsupply: string;
    volume24: number;
    volume24a: number;
}

export interface Character {    
    index: number;
    fullName: string;
    nickname: string
    hogwartsHouse: string;
    interpretedBy: string
    children: string[];
    image: string;
    birthdate: string;
}
