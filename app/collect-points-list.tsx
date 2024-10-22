import CampinaColetaClient from "./clients/CampinaColetaClient";
import CollectPointCard from "./collect-card";
import { CollectPoint } from "./types/collectPoint";

const CollectPointsList = async () => {
    const collectPoints: CollectPoint[] = await CampinaColetaClient.getInstance().getCollectPoints();
    console.log('k', collectPoints)
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">Campina Coleta</h1>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
          Criar Nova Coleta
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectPoints.map((point) => (
          <CollectPointCard key={point.id} point={point} />
        ))}
      </div>
    </div>
  );
}

export default CollectPointsList;