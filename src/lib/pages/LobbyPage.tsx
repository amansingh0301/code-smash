import React from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialStates';
import { Lobby } from '../components/lobby';

export function LobbyPage() {
    const showLobby = useSelector((state: InitialState) => state.lobby.showLobby);
    return (
        <>
            {showLobby && <Lobby/>}
        </>
    )
}

export default React.memo(LobbyPage);