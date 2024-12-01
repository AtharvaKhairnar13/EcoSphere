import Post from "../models/postModel.js";
import asyncHandler from '../middlewares/asyncHandler.js';
import User from "../models/userModel.js";
import Campaign from "../models/campaignModel.js";



export const getCampaignsByCountry = asyncHandler(async (req, res) => {
    try {
      const { country } = req.query;
      const userEmail = req.userEmail;
      // Ensure the country parameter is provided
      if (!country || !userEmail) {
        return res.status(400).json({ error: "Country is required to filter campaigns" });
      }
      const user = await User.findOne({ email: userEmail });
      // Fetch campaigns matching the provided country
      const campaigns = await Campaign.find({ country })
        .populate("user", "username email") // Populate user details (username and email)
        .populate("participants", "username email") // Populate participant details
        .exec();
  
      // Check if campaigns exist for the specified country
      if (campaigns.length === 0) {
        return res.status(404).json({ message: `No campaigns found for country: ${country}` });
      }
  
      // Return the campaigns
      console.log(campaigns)
      res.status(200).json({
        message: "Campaigns fetched successfully",
        campaigns,
        userId: user._id, // Return the current user's ID
      });
    } catch (error) {
      console.error("Error fetching campaigns by country:", error);
      res.status(500).json({ error: "Failed to fetch campaigns by country" });
    }
  });

// Controller to create a new campaign
export const createCampaign = asyncHandler(async (req, res) => {
  try {
    const { name, country } = req.body;
    const userEmail = req.userEmail; // Assuming `req.userEmail` is set by authentication middleware

    // Validate input
    if (!name || !country || !userEmail) {
      return res.status(400).json({ error: "Missing required fields: name, country, or userEmail" });
    }

    // Find the user creating the campaign
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create a new campaign
    const newCampaign = new Campaign({
      campaignId: new Date().toISOString(), // Use ISO string as a unique campaignId
      name,
      user: user._id, // Link to the user who created the campaign
      dateCreated: new Date(), // Current date and time
      country,
      participants: [], // Initialize with no participants
    });

    // Save the campaign to the database
    await newCampaign.save();

    // Respond with the created campaign
    res.status(201).json({
      message: "Campaign created successfully",
      campaign: newCampaign,

    });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ error: "Failed to create campaign" });
  }
});



export const addParticipantToCampaign = asyncHandler(async (req, res) => {
    try {
      const { campaignId } = req.body;
      const userEmail = req.userEmail; // Assuming `req.userEmail` is set by authentication middleware
  
      // Find the user by their email
      const user = await User.findOne({ email: userEmail });
      
      // Validate that the campaign and user exist
      const campaign = await Campaign.findById(campaignId);
  
      if (!campaign) {
        return res.status(404).json({ error: "Campaign not found" });
      }
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Check if the user is already a participant
      if (campaign.participants.includes(user._id.toString())) {
        return res.status(400).json({ error: "User is already a participant" });
      }
  
      // Add user to participants list
      campaign.participants.push(user._id); // Use user._id (not userId)
  
      // Save the campaign with updated participants
      await campaign.save();
  
      // Respond with success message and the updated campaign
      res.status(200).json({ message: "User added to campaign", campaign });
    } catch (error) {
      console.error("Error adding participant:", error);
      res.status(500).json({ error: "Failed to add participant" });
    }
  });
  