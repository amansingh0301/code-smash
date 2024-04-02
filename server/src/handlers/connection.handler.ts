import { IUtf8Message, Message, connection } from "websocket";
import { logger } from "../utils";
import { connectionServiceInterface } from "../service-interface";
import { connectionMapper } from "../response-mappers";

export class ConnectionHandler {
    handleMessage(connection: connection, message: Message) {
        const payload = JSON.parse((message as IUtf8Message).utf8Data)

        const serviceInterface = connectionServiceInterface.getAppropriateConnectionMethod(payload);

        const svcResponse = serviceInterface(connection, payload);

        const mapper = connectionMapper.getAppropriateConnectionMapper(payload);

        mapper(connection, svcResponse);

    }

    async handleError(connection: connection, error: Error) {
        logger.error({error: error});
        connection.close();
    }
}