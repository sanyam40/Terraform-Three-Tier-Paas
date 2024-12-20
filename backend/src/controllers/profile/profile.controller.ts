import { type Request, type Response, type NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import {
  type getProfileDataParams,
  type CreateProfileBody,
  type CreateProfileParams,
  type DeleteProfileParams,
  type GetProfileParams,
} from "@/schemas";
import type IProfileController from "@/controllers/profile/profileController.interface";
import { ProfileDAO } from "@/dao";
import {
  FetchFailedException,
  CreateFailedException,
  DeleteFailedException,
  FetchEmptyException,
} from "@/exceptions";

class ProfileController implements IProfileController {
  private profileDAO = new ProfileDAO();

  constructor() {
    this.createProfile = this.createProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.deleteProfile = this.deleteProfile.bind(this);
    this.getProfileData = this.getProfileData.bind(this);
  }

  public async createProfile(
    req: Request<CreateProfileParams, object, CreateProfileBody, object>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_guid } = req.params;
      const { isConsentGiven } = req.body;

      // Save the profile to the database using the DAO layer
      const savedProfile = await this.profileDAO.createProfile(user_guid, isConsentGiven);
      res.status(StatusCodes.CREATED).json(savedProfile);
    } catch (error) {
      if (error instanceof Error) {
        next(
          new CreateFailedException("Failed to create profile", {
            code: "CREATE_FAILED",
            description: error.message,
          })
        );
      } else {
        next(error);
      }
    }
  }

  public async getProfile(
    req: Request<GetProfileParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_guid } = req.params;
      const profiles = await this.profileDAO.getProfilesByUserGuid(user_guid);
      res.status(StatusCodes.OK).json(profiles);
    } catch (error) {
      if (error instanceof FetchEmptyException) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "No profiles found" });
        return;
      }
      if (error instanceof Error) {
        next(
          new FetchFailedException("Failed to fetch profiles", {
            code: "FETCH_FAILED",
            description: error.message,
          })
        );
      } else {
        next(error);
      }
    }
  }

  public async deleteProfile(
    req: Request<DeleteProfileParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_guid, profile_guid } = req.params;

      // Delete the profile from the database using the DAO layer
      await this.profileDAO.deleteProfileByUserAndProfileGuid(user_guid, profile_guid);

      res.status(StatusCodes.OK).json({ message: "Profile deleted successfully" });
    } catch (error) {
      if (error instanceof FetchEmptyException) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: "Profile not found" });
        return;
      }
      if (error instanceof Error) {
        next(
          new DeleteFailedException("Failed to delete profile", {
            code: "DELETE_FAILED",
            description: error.message,
          })
        );
      } else {
        next(error);
      }
    }
  }

  public async getProfileData(
    req: Request<getProfileDataParams, object, object, object>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_guid, profile_guid } = req.params;

      const profile = await this.profileDAO.getProfile(user_guid, profile_guid);

      res.status(StatusCodes.OK).json({ success: true, profile });
    } catch (error) {
      if (error instanceof FetchEmptyException) {
        res.status(StatusCodes.NOT_FOUND).json({ error: "Profile not found" });
        return;
      }
      if (error instanceof Error) {
        next(
          new FetchFailedException("Failed to fetch preferences", {
            code: "FETCH_FAILED",
            description: error.message,
          })
        );
      } else {
        next(error);
      }
    }
  }
}

export default new ProfileController();
