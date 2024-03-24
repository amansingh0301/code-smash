import * as React from 'react';
import { useNavigate } from 'react-router-dom';
export function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='header'>
            <div className='logo'>
                <div className='logo__image' onClick={goToHome}></div>
            </div>
        </div>
    )
}