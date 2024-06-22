import fs from 'fs';
import path from 'path';

interface PreMarketData {
    date: string;
    close: number;
    volume: number;
}

interface TopPerformer {
    symbol: string;
    averageVolume: number;
    priceMovement: number;
    data: PreMarketData[];
}

export async function saveData(data: TopPerformer[], directory: string): Promise<void> {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
    for (const item of data) {
        const filePath = path.join(directory, `${item.symbol}.csv`);
        const csvContent = item.data.map(d => `${d.date},${d.close},${d.volume}`).join('\n');
        fs.writeFileSync(filePath, csvContent);
    }
}
