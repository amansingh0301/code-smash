import * as React from 'react';
export function Lobby() {
    const currentPath = window.location.pathname;
    return (
        <div className={currentPath === '/lobby' ? 'slide-in-right' : '' }>
            Lobby Page
        </div>
    )
}