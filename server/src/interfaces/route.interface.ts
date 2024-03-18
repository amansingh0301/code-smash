import { Router } from "express";

export interface IRoute {
    createRoutes(): Router
}