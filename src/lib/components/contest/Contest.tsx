import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../../../store/initialStates";
import { GKContest } from "./GK";
import { CONSTANTS } from "../../../utils";
import { Chat } from "../Chat";

export function Contest() {
    const contestType = useSelector((state: InitialState) => state.contestGk.contestType);
    const mode = useSelector((state: InitialState) => state.form.mode);
    switch(contestType) {
        case 'GK':
            return mode === CONSTANTS.COMPETE ? 
                    <>
                        <GKContest/>
                        <Chat/>
                    </>
                    :
                    <GKContest/>
        default:
            return <GKContest/>
    }
}