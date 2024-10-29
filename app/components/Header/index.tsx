'use client';

import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Textarea, NumberInput } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import CampinaColetaClient from '@/app/clients/CampinaColetaClient';
import Link from 'next/link';


function Header() {
    const [opened, { open, close }] = useDisclosure(false);
    const [openAt, setOpenAt] = useState('');
    const [closeAt, setCloseAt] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        embedCode: '',
        openAt: new Date().toISOString(),
        closeAt: new Date().toISOString(),
        phone: '',
        street: '',
        city: '',
        status: '',
        maxCapacity: 0,
        aditionalInfo: '',
    });

    function onCreateNewColeta() {
        open();
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }


    async function handleSubmit() {
        await CampinaColetaClient.getInstance().createCollectPoint(formData)
        close();
    }

    return (
        <>
            <header className="flex justify-between items-center mb-6">
                <Link href='/'>
                    <h1 className="text-4xl font-bold text-green-800">Campina Coleta</h1>
                </Link>
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                    onClick={onCreateNewColeta}
                >
                    Novo ponto de coleta
                </button>
            </header>

            <Modal
                opened={opened}
                onClose={close}
                title="Criar Novo Ponto de Coleta"
                centered
            >
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <TextInput
                        label="Nome"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <TextInput
                        label="Código do Mapa"
                        name="embedCode"
                        value={formData.embedCode}
                        onChange={handleInputChange}
                    />
                    <TimeInput
                        label="Horário de Abertura"
                        name="openAt"
                        value={openAt}
                        onChange={(event) => setOpenAt(event.currentTarget.value)}
                    />
                    <TimeInput
                        label="Horário de Fechamento"
                        name="closeAt"
                        value={closeAt}
                        onChange={(event) => setCloseAt(event.currentTarget.value)}
                    />
                    <TextInput
                        label="Telefone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        label="Rua"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        label="Cidade"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        label="Status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                    />
                    <NumberInput
                        label="Capacidade Máxima"
                        name="maxCapacity"
                        value={formData.maxCapacity}
                        onChange={(value) => setFormData(prev => ({ ...prev, maxCapacity: Number(value) }))}
                    />
                    <Textarea
                        label="Informações Adicionais"
                        name="aditionalInfo"
                        value={formData.aditionalInfo}
                        onChange={handleInputChange}
                    />
                    <Button type="submit" fullWidth mt="md" color="green">
                        Salvar
                    </Button>
                </form>
            </Modal>
        </>
    );
}

export default Header;
