interface PreMarketData {
    date: string;
    close: number;
    volume: number;
}

interface Performance {
    averageVolume: number;
    priceMovement: number;
}

export function analyzePerformance(data: PreMarketData[]): Performance {
    const volumes = data.map(entry => entry.volume);
    const prices = data.map(entry => entry.close);
    const averageVolume = volumes.reduce((a, b) => a + b, 0) / volumes.length;
    const priceMovement = ((prices[prices.length - 1] - prices[0]) / prices[0]) * 100;
    return { averageVolume, priceMovement };
}
