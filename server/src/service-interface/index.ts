import { AuthServiceInterface } from "./auth.service-interface";
import { ConnectionServiceInterface } from "./connection.service-interface";
import { ContestServiceInterface } from "./contest.service-interface";

export const authServiceInterface = new AuthServiceInterface();
export const contestServiceInterface = new ContestServiceInterface();
export const connectionServiceInterface = new ConnectionServiceInterface();