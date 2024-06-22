import dotenv from 'dotenv';
dotenv.config();

export const config = {
    twelveDataApiKey: process.env.TWELVE_DATA_API_KEY!,
    tiingoApiKey: process.env.TIINGO_API_KEY!,
    headersTiingo: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${process.env.TIINGO_API_KEY!}`
    }
};
