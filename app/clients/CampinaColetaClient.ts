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

    async getCollectPoints(name?: string): Promise<CollectPoint[]> {
        try {

            const query = name ? `?name=${encodeURIComponent(name)}` : '';
            const response = await fetch(`${this.url}${query}`, { cache: 'no-store' });

            console.log('response', response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('data', data);

            return data as CollectPoint[];
        } catch (error) {
            console.error("Failed to fetch collect points:", error);
            throw error;
        }
    }


    async createCollectPoint(point: CollectPoint): Promise<CollectPoint> {
        try {
            const response = await fetch(this.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(point),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json() as CollectPoint;
        } catch (error) {
            console.error("Failed to create collect point:", error);
            throw error; // or handle it as you see fit
        }
    }


    async searchByName(name: string): Promise<CollectPoint[]> {
        try {
            const response = await fetch(`${this.url}?name=${name}`, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json() as CollectPoint[];
        } catch (error) {
            console.error("Failed to search collect points by name:", error);
            throw error; // or handle it as you see fit
        }
    }
}

export default CampinaColetaClient;