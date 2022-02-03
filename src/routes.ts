import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLas3MessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const router = Router();

const autenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController()
const profileUserController = new ProfileUserController();


router.post("/authenticate", autenticateUserController.handle);

router.post("/messages", ensureAuthenticated, createMessageController.handle);

router.get("/messages/last3", getLast3MessagesController.handle);

router.get("/profile", ensureAuthenticated, profileUserController.handle);

export { router };