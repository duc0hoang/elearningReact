import React from 'react'
import { useParams } from 'react-router-dom';
import Admin from '../../HOCs/Admin'

export default function Add() {
    const { content } = useParams();
    return (
        <Admin>
            {content}
            <p>add</p>
        </Admin>
    )
}
