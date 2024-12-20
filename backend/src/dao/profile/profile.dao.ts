import { type PipelineStage } from "mongoose";
import { faker } from "@faker-js/faker";
import { createId } from "@paralleldrive/cuid2";

import Profile, { type IProfileData } from "@/models/profileSchema";
import {
  CreateFailedException,
  FetchFailedException,
  DeleteFailedException,
  FetchEmptyException,
} from "@/exceptions";
import getRandomNumber from "@/utils/randomNumber";
import type IProfileDAO from "@/dao/profile/profileDAO.interface";
import { type IProfile } from "@/schemas";

export class ProfileDAO implements IProfileDAO {
  /**
   * Create a new profile and save it to the database
   * @param user_guid - The GUID of the user
   * @param isConsentGiven - Whether the user has given consent
   * @returns The created profile
   * @throws CreateFailedException if the profile creation fails
   */
  public async createProfile(user_guid: string, isConsentGiven: boolean): Promise<IProfileData> {
    try {
      // Generate new profile properties
      const profile_guid: string = createId();
      const name: string = faker.person.firstName();
      const avatar = getRandomNumber().toString();
      const createdAt: Date = new Date();

      // Create a new profile document using the Mongoose model
      const newProfile = new Profile({
        user_guid,
        profile_guid,
        isConsentGiven,
        name,
        avatar,
        createdAt,
      });

      return await newProfile.save();
    } catch (error) {
      if (error instanceof Error) {
        throw new CreateFailedException("Failed to create profile", {
          code: "CREATE_FAILED",
          description: error.message,
        });
      }
      throw error;
    }
  }

  /**
   * Retrieve profiles for a specific user, sorted by creation date (most recent first)
   * @param user_guid - The GUID of the user whose profiles we want to retrieve
   * @returns An array of profiles for the user
   * @throws FetchFailedException if the profile retrieval fails
   */
  public async getProfilesByUserGuid(user_guid: string): Promise<IProfileData[]> {
    try {
      const pipeline: PipelineStage[] = [{ $match: { user_guid } }, { $sort: { createdAt: -1 } }];
      const profiles = await Profile.aggregate(pipeline).exec();
      return profiles;
    } catch (error) {
      if (error instanceof Error) {
        throw new FetchFailedException("Failed to fetch profiles", {
          code: "FETCH_FAILED",
          description: error.message,
        });
      }
      throw error;
    }
  }

  /**
   * Delete a profile based on user_guid and profile_guid
   * @param user_guid - The GUID of the user
   * @param profile_guid - The GUID of the profile to be deleted
   * @returns The deleted profile or null if no profile is found
   * @throws DeleteFailedException if the profile deletion fails
   */
  public async deleteProfileByUserAndProfileGuid(
    user_guid: string,
    profile_guid: string
  ): Promise<IProfileData | null> {
    try {
      const pipeline: PipelineStage[] = [
        { $match: { user_guid, profile_guid } },
        { $limit: 1 },
        { $project: { _id: 1 } },
      ];

      const result = await Profile.aggregate(pipeline).exec();

      if (result.length === 0) {
        throw new FetchEmptyException("Profile not found", {
          code: "PROFILE_NOT_FOUND",
          description: "No profile found for the given user and profile GUID",
        });
      }

      return await Profile.findByIdAndDelete(result[0]._id).exec();
    } catch (error) {
      if (error instanceof FetchEmptyException) {
        throw error;
      }
      if (error instanceof Error) {
        throw new DeleteFailedException("Failed to delete profile", {
          code: "DELETE_FAILED",
          description: error.message,
        });
      }
      throw error;
    }
  }

  /**
   * Retrieves all preferences for a specific profile.
   * @param user_guid - The GUID of the user
   * @param profile_guid - The GUID of the profile
   * @returns The profile preferences
   * @throws FetchEmptyException if the profile is not found
   */
  public async getProfile(user_guid: string, profile_guid: string): Promise<IProfile> {
    try {
      const pipeline: PipelineStage[] = [{ $match: { user_guid, profile_guid } }, { $limit: 1 }];

      const result = await Profile.aggregate(pipeline).exec();

      if (result.length === 0) {
        throw new FetchEmptyException("Profile not found", {
          code: "FETCH_EMPTY",
          description: "No profile found for the given user_guid and profile_guid",
        });
      }

      return result[0] as IProfile;
    } catch (error) {
      if (error instanceof FetchEmptyException) {
        throw error;
      }
      if (error instanceof Error) {
        throw new FetchFailedException("Failed to fetch profile", {
          code: "FETCH_FAILED",
          description: error.message,
        });
      }
      throw error;
    }
  }
}
