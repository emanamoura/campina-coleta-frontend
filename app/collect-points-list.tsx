import CampinaColetaClient from "./clients/CampinaColetaClient";
import CollectPointCard from "./collect-card";
import Header from "./components/Header";
import { CollectPoint } from "./types/collectPoint";

const CollectPointsList = async ({ name }: { name?: string }) => {
  const collectPoints: CollectPoint[] = await CampinaColetaClient.getInstance().getCollectPoints(name);
  
  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectPoints.map((point) => (
          <CollectPointCard key={point.id} point={point} />
        ))}
      </div>
    </div>
  );
}

export default CollectPointsList;