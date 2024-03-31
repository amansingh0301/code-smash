import React from 'react';
import { useNavigate } from 'react-router-dom';
export function HomePage() {
    const navigate = useNavigate();

    const openForm = () => {
        navigate('/form');
    }

    return (
        <div className='home slide-in-right'>
            <div className='revision'>
                <h1 className='main-revise'>Let's</h1>
                <h1 className='revise-text'>Revise  Practice and Compete</h1>
            </div>
            <div className='arrow-button'>
                <div className='arrow' onClick={openForm}></div>
            </div>
        </div>
    )
}