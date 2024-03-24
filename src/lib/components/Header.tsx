import * as React from 'react';
import { useNavigate } from 'react-router-dom';
export function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='header'>
            <div className='logo' onClick={goToHome}>
                <div className='logo__image'></div>
            </div>
        </div>
    )
}