import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className='header'>
            {(location.pathname === '/form' || location.pathname === '/result') && <div className='header-back' onClick={goToHome}></div>}
            <div className='logo'>
                <div className='logo__image' onClick={goToHome}></div>
            </div>
        </div>
    )
}