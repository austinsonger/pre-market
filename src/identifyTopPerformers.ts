import { fetchPreMarketData } from './fetchPreMarketData';
import { analyzePerformance } from './analyzePerformance';

interface Stock {
    symbol: string;
    name: string;
    exchange: string;
    market_cap: string;
}

interface TopPerformer extends Stock {
    averageVolume: number;
    priceMovement: number;
}

export async function identifyTopPerformers(stocks: Stock[]): Promise<TopPerformer[]> {
    const analysisResults: TopPerformer[] = [];
    for (const stock of stocks) {
        const data = await fetchPreMarketData(stock.symbol);
        const analysis = analyzePerformance(data);
        analysisResults.push({ symbol: stock.symbol, ...analysis, ...stock });
    }
    analysisResults.sort((a, b) => (b.averageVolume - a.averageVolume) || (b.priceMovement - a.priceMovement));
    return analysisResults.slice(0, 10);
}
