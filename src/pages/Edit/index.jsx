import React from 'react'
import { useParams } from 'react-router-dom';
import EditForm from '../../components/Edit';
import Admin from '../../HOCs/Admin'

export default function Edit() {
    const { content, id } = useParams();
    return (
        <Admin>
            <EditForm content={content} id={id} />
        </Admin>
    )
}
