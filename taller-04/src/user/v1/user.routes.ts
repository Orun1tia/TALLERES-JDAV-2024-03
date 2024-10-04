import { Router, Request, Response } from "express";
import { readUsers } from "./user.controller";

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
  const hobby = request.params.hobby.toLowerCase();
  const users = await readUsers();

  const filtered = users.filter((user) => user.hobbies.includes(hobby))
  response.status(200).json({
    message: "Success.",
    users: filtered,
  });
}

async function GetExists(request: Request, response: Response) {
  const id = request.params.id;
  const users = await readUsers();

  const filtered = users.filter((user) => user.id === Number(id))
  response.status(200).json({
    message: "Success.",
    users: filtered,
  });
}

async function GetExperience(request: Request, response: Response) {
  const team = request.params.team;
  const users = await readUsers();

  const filtered = users.reduce((contador, user) => {
    if (user.team === team) {
      return contador + user.years;
    }
    return contador;
  }, 0);
  response.status(200).json({
    message: "Success.",
    years: filtered,
  });
}

async function GetPilots(request: Request, response: Response) {
  const faction = request.params.faction.toLowerCase();
  const users = await readUsers();

  const filtered = users.filter((user) => user.faction.toLowerCase() === faction)
  response.status(200).json({
    message: "Success.",
    users: filtered,
  });
}

async function CreateUser(request: Request, response: Response) {
  const { name, hobbies, years, team, faction } = request.body; 

  if (!name || !hobbies || !years || !team || !faction) {
    return response.status(400).json({
      message: "Missing data!!!!!!.",
    });
  }

  const users = await readUsers(); 
  const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1; 

  const newUser = {
    id: newId, name, hobbies, years, team, faction,
  };

  users.push(newUser);

  response.status(201).json({
    message: "New user:",
    user: newUser,
  });
}


// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.post("/", CreateUser);
userRoutes.get("/hobby/:hobby", GetHobbies);
userRoutes.get("/exists/:id", GetExists);
userRoutes.get("/team-experience/:team", GetExperience);
userRoutes.get("/by-faction/:faction", GetPilots);
// EXPORT ROUTES
export default userRoutes;
