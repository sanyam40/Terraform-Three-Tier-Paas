import { type IProfileData } from "@/models/profileSchema";
import { type IProfile, type IProfileUpdate } from "@/schemas";

type IProfileDAO = {
  createProfile(user_guid: string, isConsentGiven: boolean): Promise<IProfileData>;
  getProfilesByUserGuid(user_guid: string): Promise<IProfileData[]>;
  deleteProfileByUserAndProfileGuid(
    user_guid: string,
    profile_guid: string
  ): Promise<IProfileData | null>;
  getProfile(user_guid: string, profile_guid: string): Promise<IProfile>;
};
export default IProfileDAO;
