import React from 'react';

import { getUsers } from '../../../Services/Api';

export default function Users({ showLoading, hideLoading }) {
    const getData = async () => {
        showLoading("Carregando usuários");

        const response = await getUsers().then(data => {
            hideLoading();
            return data;
        });
        console.log({ response });
    };

    return (
        <>
            <button onClick={getData}>Buscar usuários</button>
        </>
    );
}