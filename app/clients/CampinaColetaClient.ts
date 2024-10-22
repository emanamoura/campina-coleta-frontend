import { CollectPoint } from "../types/collectPoint";

class CampinaColetaClient {
    private static instance: CampinaColetaClient;
    private url: string;

    private constructor(url: string) {
        this.url = url;
    }
    public static getInstance(): CampinaColetaClient {
        if (!CampinaColetaClient.instance) {
            CampinaColetaClient.instance = new CampinaColetaClient('https://campina-coleta-backend.onrender.com/collectPoints');
        }
        return CampinaColetaClient.instance;
    }

    async getCollectPoints(): Promise<CollectPoint[]> {
        try {
            const response = await fetch(this.url, { cache: 'no-store' });
            console.log('response', response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('data', data)
            return data as CollectPoint[];
        } catch (error) {
            console.error("Failed to fetch collect points:", error);
            throw error; // or handle it as you see fit
        }
    }
}

export default CampinaColetaClient;