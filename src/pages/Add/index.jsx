import React from 'react'
import { useParams } from 'react-router-dom';
import AddForm from '../../components/Add';
import Admin from '../../HOCs/Admin'

export default function Add() {
    const { content } = useParams();
    return (
        <Admin>
            <AddForm content={content}/>
        </Admin>
    )
}
