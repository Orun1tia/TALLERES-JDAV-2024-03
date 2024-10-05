import { readExistingAction, readExperienceAction, readHobbiesAction, readPilotsAction } from "./read.user.action";
import { UserType } from "./user.model";




// DECLARE CONTROLLER FUNCTIONS
async function readHobbies(hobby: string): Promise<any[]> {
  const filtered = await readHobbiesAction(hobby);
  return filtered
}

async function readExisting(id: number): Promise<any[]> {
  const filtered = await readExistingAction(id);
  return filtered
}

async function readExperience(team: string): Promise<number> {
  const filtered = await readExperienceAction(team);
  return filtered
}

async function readPilots(faction: string): Promise<any[]> {
  const filtered = await readPilotsAction(faction);
  return filtered
}

export { readHobbies, readExisting, readExperience, readPilots };
