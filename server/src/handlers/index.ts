import { AuthHandler } from "./auth.handler";
import { ConnectionHandler } from "./connection.handler";
import { ContestHandler } from "./contest.handler";

export const authHandler = new AuthHandler();
export const contestHandler = new ContestHandler();
export const connectionHandler = new ConnectionHandler();