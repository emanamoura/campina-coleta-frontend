'use client'
import { useState } from 'react';
import clsx from 'clsx';
import { Modal, Button } from '@mantine/core';
import { CollectPoint } from './types/collectPoint';

function CollectPointCard({ point }: { point: CollectPoint }) {
    const { name, status, street, city, phone, openAt, closeAt, maxCapacity, aditionalInfo, embedCode } = point;
    const [opened, setOpened] = useState(false);

    function toggleModal() {
        setOpened(prev => !prev);
    }

    return (
        <>
            <div
                className={clsx(
                    "shadow-md rounded-lg p-4 border-l-4 transition-shadow hover:shadow-lg cursor-pointer",
                    {
                        "bg-green-50 border-green-600": status === 'Ativo',
                        "bg-red-100 border-red-600 text-red-800": status === 'Inativo'
                    }
                )}
                onClick={toggleModal}
            >
                <div className="flex items-center justify-between">
                    <h2
                        className={clsx("text-lg font-semibold", {
                            "text-green-800": status === 'Ativo',
                            "text-red-800": status === 'Inativo'
                        })}
                    >
                        {name}
                    </h2>
                    <p className="text-sm font-medium text-gray-600">
                        Abre às:{openAt}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                        Fecha às:{closeAt}
                    </p>
                </div>
                <p className="text-sm text-gray-600">
                    {street}, {city}
                </p>
            </div>

            <Modal
                opened={opened}
                onClose={toggleModal}
                title="Detalhes do Ponto de Coleta"
                centered
                size="lg"
            >
                <div className="flex gap-6">
                    <div className="w-1/2">
                        <div
                            className="bg-gray-100 rounded-lg overflow-hidden shadow-md max-h-96"
                            dangerouslySetInnerHTML={{ __html: embedCode }}
                        />
                    </div>


                    <div className="w-1/2 space-y-4">
                        <h2 className="text-2xl font-semibold text-green-800">{name}</h2>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Endereço:</strong> {street}, {city}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Telefone:</strong> {phone}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Horário de Funcionamento:</strong> {openAt} - {closeAt}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Status:</strong> {status}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Capacidade Máxima:</strong> {maxCapacity}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium text-gray-900">Informações Adicionais:</strong> {aditionalInfo}
                        </p>
                        <Button onClick={toggleModal} fullWidth color="green" className="mt-4">
                            Fechar
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default CollectPointCard;
