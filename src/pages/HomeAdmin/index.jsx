import React from 'react';
import Admin from '../../HOCs/Admin';
import { useSelector } from 'react-redux';
import BasicTable from '../../components/Table';

export default function HomeAdmin() {
    

    return (
        <Admin>
            <BasicTable />
        </Admin>
    )
}
