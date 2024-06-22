import axios from 'axios';

export default async function fetchData(url: string, headers = {}): Promise<any> {
    try {
        const response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
}
