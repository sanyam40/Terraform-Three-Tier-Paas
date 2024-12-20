import { StatusCodes } from "http-status-codes";
import express, { type Request, type Response } from "express";
import profileRouter from "./profile.router";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ message: "Welcome to Microservice" });
});

router.get("/health", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({ status: "UP" });
});

router.use(profileRouter);

export default router;
