import React from 'react'
import { useParams } from 'react-router-dom';
import Admin from '../../HOCs/Admin'

export default function Edit() {
    const { content, id } = useParams();
    return (
        <Admin>
            {content}
            <p>edit</p>
            {id}
        </Admin>
    )
}
