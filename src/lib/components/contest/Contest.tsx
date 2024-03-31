import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../../../store/initialState";
import { GKContest } from "./GK";

export function Contest() {
    const contestType = useSelector((state: InitialState) => state.contest.contestType);
    switch(contestType) {
        case 'GK':
            return <GKContest/>
        default:
            return <GKContest/>
    }
}