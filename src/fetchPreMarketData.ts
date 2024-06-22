import { config } from './config';
import fetchData from '../utils/fetchData';

interface PreMarketData {
    date: string;
    close: number;
    volume: number;
}

export async function fetchPreMarketData(symbol: string): Promise<PreMarketData[]> {
    const startDate = new Date().toISOString().split('T')[0];
    const endDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    const url = `https://api.tiingo.com/tiingo/daily/${symbol}/prices?startDate=${startDate}&endDate=${endDate}&resampleFreq=1min`;
    const data = await fetchData(url, config.headersTiingo);
    return data;
}
