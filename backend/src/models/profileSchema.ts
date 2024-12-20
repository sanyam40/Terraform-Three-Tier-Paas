import mongoose, { Schema, type Document } from "mongoose";

export type IProfileData = {
  user_guid: string;
  profile_guid: string;
  isConsentGiven: boolean;
  name: string;
  avatar: string;
  createdAt: Date;
} & Document

const ProfileSchema: Schema = new Schema({
  user_guid: { type: String, required: true, index: true },
  profile_guid: { type: String, required: true, index: true },
  isConsentGiven: { type: Boolean, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  createdAt: { type: Date, required: true, index: true },
});

export default mongoose.model<IProfileData>("Profile", ProfileSchema);
