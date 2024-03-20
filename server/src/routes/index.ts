import { Router } from "express";
import { AuthenticationRoutes } from "./auth.routes";
import { ContestRoutes } from "./contest.routes";

export const authRoutes: Router = new AuthenticationRoutes().createRoutes();
export const contestRoutes: Router = new ContestRoutes().createRoutes();