import { connection } from "websocket";
import { ConnectionPayload, User } from "../models";

export class ConnectionMapper {
    mapCreateRoom(connection: connection, svcResponse: any) {
        connection.send(JSON.stringify({type: 'create',svcResponse}))
    }

    mapJoinRoom(connection: connection, svcResponse: any) {

        if(svcResponse.users instanceof Error) {
            connection.send(JSON.stringify({type: 'inProgress'}));
            return;
        }

        const users = (svcResponse.users as User[]);
        const currentUserId = svcResponse.userId;
        const currentUser = users.find(user => user.userId === currentUserId) as User;
        users.forEach((user: User) => {
            if(user.connection !== connection) {
                const opponent ={
                    userId: currentUser.userId,
                    name: currentUser.name,
                    status: currentUser.status,
                    score: currentUser.score
                }
                user.connection.send(JSON.stringify({type: 'join',opponent}));
                user.connection.send(JSON.stringify({type: 'infoMessage',text: 'joined',opponent}))
            }
        })

        const opponents = users.filter(user => user.userId !== currentUserId).map(user => {
            const opponent ={
                userId: user.userId,
                name: user.name,
                status: user.status,
                score: user.score
            }
            return opponent;
        });

        connection.send(JSON.stringify({type: 'opponents',opponents, userId: currentUserId }));
    }

    mapLeaveRoom(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    mapCloseRoom(connection: connection, svcResponse: any) {
        console.log(svcResponse);
    }

    mapPostMessage(connection: connection, svcResponse: any) {
        const users = (svcResponse.users as User[]);
        const userId = svcResponse.userId;
        const message = svcResponse.message;
        const currentUser = users.find(user => user.userId === userId)

        users.forEach((user: User) => {
            if(user.userId !== userId) {
                user.connection.send(JSON.stringify({type: 'message', userId: userId, message }));
            }
        })
    }

    mapStatusUpddate(connection: connection, svcResponse: any) {
        const users = (svcResponse.clientResponse.users as User[]);

        const userId = svcResponse.userId;
        const currentUser = users.find(user => user.userId === userId)

        users.forEach((user: User) => {
            if(user.userId !== userId) {
                user.connection.send(JSON.stringify({type: 'status', userId: userId, status: currentUser?.status}));
                if(svcResponse.clientResponse.allReady)
                    user.connection.send(JSON.stringify({type: 'start', time: 11}));
            }else{
                if(svcResponse.clientResponse.allReady)
                    user.connection.send(JSON.stringify({type: 'start', time: 11}));
            }
        })
    }

    mapGetLobbyQuestions(connection: connection, svcResponse: any){
        connection.send(JSON.stringify({type: 'questions', questions: svcResponse.questions, timer: svcResponse.time}));
    }

    getAppropriateConnectionMapper(payload: ConnectionPayload) {
        switch(payload.type) {
            case 'create':
                return this.mapCreateRoom;
            case 'join':
                return this.mapJoinRoom;
            case 'leave':
                return this.mapLeaveRoom;
            case 'close':
                return this.mapCloseRoom;
            case 'message':
                return this.mapPostMessage;
            case 'status':
                return this.mapStatusUpddate;
            case 'questions':
                return this.mapGetLobbyQuestions;
        }
    }

    createOpponent(user: User) {
        return {
            userId: user.userId,
            name: user.name,
            status: user.status,
            score: user.score
        }
    }
}