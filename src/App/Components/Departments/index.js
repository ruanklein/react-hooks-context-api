import React from 'react';

import { getDepartments } from '../../../Services/Api';

export default function Departments({ showLoading, hideLoading }) {
    const getData = async () => {
        showLoading("Carregando departamentos");

        const response = await getDepartments().then(data => {
            hideLoading();
            return data;
        });
        console.log({ response });
    };

    return (
        <>
            <button onClick={getData}>Buscar departamentos</button>
        </>
    );
}