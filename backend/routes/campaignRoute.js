import { Router } from "express";
import authenticateUser from "../middlewares/authenticateUser.js";
import {
    createCampaign,
    getCampaignsByCountry,
    addParticipantToCampaign
} from "../controllers/campaignControllers.js";
const router = Router();

router.route("/by-country").get(authenticateUser, getCampaignsByCountry);

router.route("/add-participant").post(authenticateUser, addParticipantToCampaign);

// Route to create a new campaign (optional, if needed)
router.route("/add").post(authenticateUser, createCampaign);

export default router;