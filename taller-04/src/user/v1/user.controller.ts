import { createUserAction, readExistingAction, readExperienceAction, readHobbiesAction, readPilotsAction, readUserAction } from "./read.user.action"
import { UserType } from "./user.model"




// DECLARE CONTROLLER FUNCTIONS
async function readUsers(): Promise<UserType[]> {
  const users = await readUserAction();
  return users
}

async function readHobbies(hobby: string): Promise<any[]> {
  const filtered = await readHobbiesAction(hobby)
  return filtered
}

async function readExisting(id: number): Promise<any[]> {
  const filtered = await readExistingAction(id)
  return filtered
}

async function readExperience(team: string): Promise<number> {
  const filtered = await readExperienceAction(team)
  return filtered
}

async function readPilots(faction: string): Promise<any[]> {
  const filtered = await readPilotsAction(faction)
  return filtered
}


async function createUser(userData: UserType): Promise<UserType> {
  const createdUser = await createUserAction(userData)
  return createdUser;
}

export { readUsers, readHobbies, readExisting, readExperience, readPilots, createUser };
