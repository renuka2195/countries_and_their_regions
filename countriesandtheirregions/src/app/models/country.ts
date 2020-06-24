import { Currency } from './currency';

export interface Country {
    name?: string;
    capital?: string;
    region?: string;
    subregion?: string;
    population?: number;
    area?: number;
    flag?: string;
    currencies?: Currency[];
}