import { Router, Request, Response } from "express";
import { readExisting, readExperience, readHobbies, readPilots} from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

// DECLARE ENDPOINT FUNCTIONS
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

// async function CreateUser(request: Request, response: Response) {
//   const { name, hobbies, years, team, faction } = request.body; 

//   if (!name || !hobbies || !years || !team || !faction) {
//     return response.status(400).json({
//       message: "Missing data!!!!!!.",
//     });
//   }

//   const users = await readUsers(); 
//   const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1; 

//   const newUser = {
//     id: newId, name, hobbies, years, team, faction,
//   };

//   users.push(newUser);

//   response.status(201).json({
//     message: "New user:",
//     user: newUser,
//   });
// }


// DECLARE ENDPOINTS
// userRoutes.post("/", CreateUser);
userRoutes.get("/hobby", GetHobbies);
userRoutes.get("/exists", GetExists);
userRoutes.get("/team-experience", GetExperience);
userRoutes.get("/by-faction", GetPilots);
// EXPORT ROUTES
export default userRoutes;
