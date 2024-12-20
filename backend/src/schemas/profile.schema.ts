import { z } from "zod";

export const createProfileParamsSchema = z.object({
  user_guid: z.string(),
});

export const createProfileBodySchema = z.object({
  isConsentGiven: z.boolean({ message: "Privacy Consent Not Given By the user" }),
});

export const getProfileParamsSchema = z.object({
  user_guid: z.string(),
});

export const deleteProfileParamsSchema = z.object({
  user_guid: z.string(),
  profile_guid: z.string().cuid2(),
});

// Define the schema for the parameters required to get preferences
export const getProfileDataParamsSchema = z.object({
  user_guid: z.string(),
  profile_guid: z.string().cuid2(),
});

// Exporting the types
export type CreateProfileParams = z.infer<typeof createProfileParamsSchema>;
export type CreateProfileBody = z.infer<typeof createProfileBodySchema>;
export type GetProfileParams = z.infer<typeof getProfileParamsSchema>;
export type DeleteProfileParams = z.infer<typeof deleteProfileParamsSchema>;
export type getProfileDataParams = z.infer<typeof getProfileDataParamsSchema>;

export type IProfileUpdate = {
  name?: string;
  voice?: string;
  country?: string;
  favoritePlayers?: string[];
  favoriteTeams?: string[];
  experienceLevel?: string;
  favoriteEvents?: string[];
};

export type IProfile = {
  name: string;
  avatar: string;
  voice: string;
  favoritePlayers: string[];
  favoriteTeams: string[];
  country: string;
  experienceLevel: string;
  favoriteEvents: string[];
};
