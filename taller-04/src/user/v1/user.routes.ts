import { Router, Request, Response } from "express";
import { createUser, readExisting, readExperience, readHobbies, readPilots, readUsers } from "./user.controller";
import { UserType } from "./user.model";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS

async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

async function GetHobbies(request: Request, response: Response) {
  const hobby = request.query.hobby as string;
  const answer = await readHobbies(hobby);

  response.status(200).json({
    message: "Success.",
    users: answer,
  });
}

async function GetExists(request: Request, response: Response) {
  const id = Number(request.query.id);
  const answer = await readExisting(id);

  response.status(200).json({
    message: "Success.",
    users: answer,
  });
}

async function GetExperience(request: Request, response: Response) {
  const team = request.query.team as string;
  const answer = await readExperience(team);

  response.status(200).json({
    message: "Success.",
    experienceYears: answer,
  });
}

async function GetPilots(request: Request, response: Response) {
  const faction = request.query.faction as string;
  const answer = await readPilots(faction);

  response.status(200).json({
    message: "Success.",
    users: answer,
  });
}

async function PostUser(request: Request, response: Response) {
  try {
    const userData: UserType = request.body; 
    const createdUser = await createUser(userData);

    response.status(201).json({
      message: "User created successfully.",
      user: createdUser,
    });
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      response.status(500).json({
        message: "An error occurred while creating the user.",
        error: error.message,
      });
    } else {
      response.status(500).json({
        message: "An unknown error occurred.",
      });
    }
  }
}


// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.post("/", PostUser);
userRoutes.get("/hobby", GetHobbies);
userRoutes.get("/exists", GetExists);
userRoutes.get("/team-experience", GetExperience);
userRoutes.get("/by-faction", GetPilots);
// EXPORT ROUTES
export default userRoutes;
