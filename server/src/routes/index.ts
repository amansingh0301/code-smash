import { Router } from "express";
import { AuthenticationRoutes } from "./auth.routes";

export const authRoutes: Router = new AuthenticationRoutes().createRoutes();