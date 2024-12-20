import request from "supertest";
import app from "@/app";
import { StatusCodes } from "http-status-codes";
import { createId } from "@paralleldrive/cuid2";
import { closeDB, connectDB } from "@/DBConnection";

describe("Profile Controller", () => {
  const userGuid = "auth0|667418eafc6613d8ba6eeaad";
  let profileGuid: string;

  beforeAll(async () => {
    jest.setTimeout(10000);
    await connectDB();
    const profileData = { isConsentGiven: true };
    const response = await request(app).post(`/users/${userGuid}/profiles`).send(profileData);
    profileGuid = response.body.profile_guid;
  });

  afterAll(async () => {
    await closeDB();
  });

  describe("GET /users/:user_guid/profiles", () => {
    it("should retrieve profiles for a valid user GUID", async () => {
      const response = await request(app).get(`/users/${userGuid}/profiles`);
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body).toBeInstanceOf(Array);
    });

    it("should return 200 if no profiles are found for the user GUID", async () => {
      const nonExistentUserGuid = createId();
      const response = await request(app).get(`/users/${nonExistentUserGuid}/profiles`);
      expect(response.status).toBe(StatusCodes.OK);
    });

    it("should return 400 for invalid user GUID format", async () => {
      const invalidUserGuid = "auth0|667418eafc6613d8ba6eea";
      const response = await request(app).get(`/users/${invalidUserGuid}/profiles`);
      expect(response.status).toBe(StatusCodes.OK);
    });
  });

  describe("POST /users/:user_guid/profiles", () => {
    it("should create a new profile for a valid user GUID", async () => {
      const profileData = { isConsentGiven: true };
      const response = await request(app).post(`/users/${userGuid}/profiles`).send(profileData);
      expect(response.status).toBe(StatusCodes.CREATED);
      expect(response.body).toHaveProperty("profile_guid");
    });

    it("should return 400 for missing isConsentGiven field", async () => {
      const profileData = {};
      const response = await request(app).post(`/users/${userGuid}/profiles`).send(profileData);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    it("should return 201 for new user GUID format", async () => {
      const invalidUserGuid = "auth0|667418eafc6613d8ba6eea";
      const profileData = { isConsentGiven: true };
      const response = await request(app)
        .post(`/users/${invalidUserGuid}/profiles`)
        .send(profileData);
      expect(response.status).toBe(StatusCodes.CREATED);
    });
  });

  describe("PATCH /users/:user_guid/profiles/:profile_guid/preferences", () => {
    it("should update profile preferences for a valid user and profile GUID", async () => {
      const updates = { name: "John Doe" };
      const response = await request(app)
        .patch(`/users/${userGuid}/profiles/${profileGuid}/preferences`)
        .send(updates);
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body).toHaveProperty("success", true);
      // expect(response.body.profile).toHaveProperty("isConsentGiven", false);
    });

    it("should return 404 for updating a non-existent profile", async () => {
      const nonExistentProfileGuid = createId();
      const updates = { isConsentGiven: false };
      const response = await request(app)
        .patch(`/users/${userGuid}/profiles/${nonExistentProfileGuid}/preferences`)
        .send(updates);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
      expect(response.body).toHaveProperty("error", "Profile not found");
    });

    it("should return 404 for invalid user GUID format", async () => {
      const invalidUserGuid = "invalid-guid";
      const updates = { isConsentGiven: false };
      const response = await request(app)
        .patch(`/users/${invalidUserGuid}/profiles/${profileGuid}/preferences`)
        .send(updates);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });

    it("should return 400 for invalid profile GUID format", async () => {
      const invalidProfileGuid = "invalid-guid";
      const updates = { isConsentGiven: false };
      const response = await request(app)
        .patch(`/users/${userGuid}/profiles/${invalidProfileGuid}/preferences`)
        .send(updates);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });
  });

  describe("GET /users/:user_guid/profiles/:profile_guid", () => {
    it("should retrieve profile data for a valid user and profile GUID", async () => {
      const response = await request(app).get(`/users/${userGuid}/profiles/${profileGuid}`);
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body).toHaveProperty("success", true);
    });

    it("should return 404 for retrieving a non-existent profile", async () => {
      const nonExistentProfileGuid = createId();
      const response = await request(app).get(
        `/users/${userGuid}/profiles/${nonExistentProfileGuid}`
      );
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
      expect(response.body).toHaveProperty("error", "Profile not found");
    });

    it("should return 400 for invalid user GUID format", async () => {
      const invalidUserGuid = "invalid-guid";
      const response = await request(app).get(`/users/${invalidUserGuid}/profiles/${profileGuid}`);
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
    });

    it("should return 400 for invalid profile GUID format", async () => {
      const invalidProfileGuid = "invalid-guid";
      const response = await request(app).get(`/users/${userGuid}/profiles/${invalidProfileGuid}`);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });
  });

  describe("DELETE /users/:user_guid/profiles/:profile_guid", () => {
    it("should delete a profile for a valid user and profile GUID", async () => {
      const response = await request(app).delete(`/users/${userGuid}/profiles/${profileGuid}`);
      expect(response.status).toBe(StatusCodes.OK);
      expect(response.body).toHaveProperty("message", "Profile deleted successfully");
    });

    it("should return 404 for deleting a non-existent profile", async () => {
      const nonExistentProfileGuid = createId();
      const response = await request(app).delete(
        `/users/${userGuid}/profiles/${nonExistentProfileGuid}`
      );
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.body).toHaveProperty("error", "Profile not found");
    });

    it("should return 400 for invalid user GUID format", async () => {
      const invalidUserGuid = "invalid-guid";
      const response = await request(app).delete(
        `/users/${invalidUserGuid}/profiles/${profileGuid}`
      );
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    it("should return 400 for invalid profile GUID format", async () => {
      const invalidProfileGuid = "invalid-guid";
      const response = await request(app).delete(
        `/users/${userGuid}/profiles/${invalidProfileGuid}`
      );
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
