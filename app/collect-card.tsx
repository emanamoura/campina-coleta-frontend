import { CollectPoint } from "./types/collectPoint";

const CollectPointCard: React.FC<{ point: CollectPoint }> = ({ point }) => {
    const { name, openAt, closeAt, phone, street, city, status, maxCapacity, aditionalInfo, embedCode } = point;

    return (
        <div className="bg-green-50 shadow-md rounded-lg p-4 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-semibold text-green-800">{name}</h2>
            <div className="max-w-1/2 overflow-auto max-h-96"
                dangerouslySetInnerHTML={{ __html: embedCode }}
            />
            <p className="mt-2"><strong>Endereço:</strong> {street}, {city}</p>
            <p className="mt-1"><strong>Telefone:</strong> {phone}</p>
            <p className="mt-1"><strong>Horário de Funcionamento:</strong> {openAt} - {closeAt}</p>
            <p className="mt-1"><strong>Status:</strong> {status}</p>
            <p className="mt-1"><strong>Capacidade Máxima:</strong> {maxCapacity}</p>
            <p className="mt-1"><strong>Informações Adicionais:</strong> {aditionalInfo}</p>
        </div>
    );
};
export default CollectPointCard;