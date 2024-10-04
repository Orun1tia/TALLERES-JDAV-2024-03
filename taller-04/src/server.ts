import { Request, Response } from "express";
import cors from "cors";
import express from "express";

// API ROUTES IMPORTS
import userRoutes from "./user/v1/user.routes";


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
;

// MIDDLEWARES
const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const SERVER_VERSION = "/api/v1/";

app.use(SERVER_VERSION + "users", userRoutes);

// FALLBACKS

function routeNotFound(request: Request, response: Response) {
  response.status(404).json({
    message: "Route not found.",
  });
}

app.use(routeNotFound);

// START SERVER
app.listen(8080, () => {
  console.log("Server listening to port 8080.");
});
