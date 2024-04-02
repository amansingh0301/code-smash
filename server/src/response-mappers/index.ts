import { AuthMapper } from "./auth.mapper";
import { ConnectionMapper } from "./connection.mapper";
import { ContestMapper } from "./contest.mapper";

export const authMapper = new AuthMapper();
export const contestMapper = new ContestMapper();
export const connectionMapper = new ConnectionMapper();