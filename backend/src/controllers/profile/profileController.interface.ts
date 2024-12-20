import { type Request, type Response, type NextFunction } from "express";
import {
  type CreateProfileBody,
  type CreateProfileParams,
  type DeleteProfileParams,
  type GetProfileParams,
  type getProfileDataParams,
} from "@/schemas";

type IProfileController = {
  createProfile(
    req: Request<CreateProfileParams, object, CreateProfileBody, object>,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  getProfile(
    req: Request<GetProfileParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  deleteProfile(
    req: Request<DeleteProfileParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void>;

  getProfileData(
    req: Request<getProfileDataParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void>;
};

export default IProfileController;
