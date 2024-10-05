import { UserType } from "./user.model"


const users = [
  {
    "id": 21,
    "name": "Captain Piett",
    "hobbies": ["singing", "walking", "guitar"],
    "years": 2,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 27,
    "name": "General Veers",
    "hobbies": ["swimming", "guitar"],
    "years": 12,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 32,
    "name": "Admiral Ozzel",
    "hobbies": ["walking", "swimming", "guitar"],
    "years": 7,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 41,
    "name": "Commander Jerjerrod",
    "hobbies": ["swimming", "singing"],
    "years": 3,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 10,
    "name": "Poe Dameron",
    "hobbies": ["walking", "singing"],
    "years": 14,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 2,
    "name": "Temmin 'Snap' Wexley",
    "hobbies": ["swimming", "drums"],
    "years": 30,
    "team": "axvedw",
    "faction": "Rebels"
  },
  {
    "id": 44,
    "name": "Tallissan Lintra",
    "hobbies": ["walking", "walking"],
    "years": 16,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 99,
    "name": "Ello Asty",
    "hobbies": ["guitar", "singing"],
    "years": 2,
    "team": "axvedw",
    "faction": "Empire"
  },
  {
    "id": 3,
    "name": "Wedge Antilles",
    "hobbies": ["guitar", "walking"],
    "years": 22,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 8,
    "name": "Ciena Ree",
    "hobbies": ["guitar", "singing"],
    "years": 15,
    "team": "clscwe",
    "faction": "Empire"
  },
  {
    "id": 40,
    "name": "Iden Versio",
    "hobbies": ["drums", "walking"],
    "years": 37,
    "team": "clscwe",
    "faction": "Rebels"
  },
  {
    "id": 66,
    "name": "Thane Kyrell",
    "hobbies": ["drums", "singing"],
    "years": 10,
    "team": "axvedw",
    "faction": "Rebels"
  }
]


// DECLARE ACTION FUNCTION

async function readUserAction(): Promise<UserType[]> {
  return users;
}

async function readHobbiesAction(hobby: string): Promise<any[]> {
  return users.filter((user) => user.hobbies.includes(hobby))
}

async function readExistingAction(id: number): Promise<any[]> {
  return users.filter((user) => user.id === id)
}

async function readExperienceAction(team: string): Promise<number> {
  return users.reduce((contador, user) => {
    if (user.team === team) {
      return contador + user.years
    }
    return contador
  }, 0);
}

async function readPilotsAction(faction: string): Promise<any[]> {
  return users.filter((user) => user.faction.toLowerCase() === faction)
}

async function createUserAction(userData: UserType): Promise<UserType> {
  const { id, ...newUserData } = userData;

  const newUser = { id: users.length + 1, ...newUserData }
  users.push(newUser)
  return newUser
}


// EXPORT ACTION FUNCTION
export { readUserAction, readHobbiesAction, readExistingAction, readExperienceAction, readPilotsAction, createUserAction };