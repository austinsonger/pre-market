import { fetchStockList } from './fetchStockList';
import { identifyTopPerformers } from './identifyTopPerformers';
import { saveData } from './saveData';
import path from 'path';

async function main() {
    const marketCap = 'smallcap'; // Example market cap
    const stocks = await fetchStockList(marketCap);
    const topPerformers = await identifyTopPerformers(stocks);
    const today = new Date().toISOString().split('T')[0];
    const directory = path.join(__dirname, '..', 'data', today);
    await saveData(topPerformers, directory);
    console.log('Top 10 Pre-Market Stocks:', topPerformers);
}

main().catch(console.error);
