import { Currency } from './currency';

export class Country {
    name?: string;
    capital?: string;
    region?: string;
    subregion?: string;
    population?: number;
    area?: number;
    flag?: string;
    currencies?: Currency[];
}