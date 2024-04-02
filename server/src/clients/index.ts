import { ConnectionClient } from "./connectionclient";
import { DBClient } from "./dbclient";

export const dbClient = new DBClient();
export const connectionClient = new ConnectionClient();