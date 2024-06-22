import { config } from './config';
import fetchData from '../utils/fetchData';

interface Stock {
    symbol: string;
    name: string;
    exchange: string;
    market_cap: string;
}

export async function fetchStockList(marketCap: string): Promise<Stock[]> {
    const url = `https://api.twelvedata.com/stocks?apikey=${config.twelveDataApiKey}&exchange=NASDAQ,NYSE&market_cap=${marketCap}`;
    const data = await fetchData(url);
    return data.data.slice(0, 50); // Return the first 50 stocks for detailed analysis
}
