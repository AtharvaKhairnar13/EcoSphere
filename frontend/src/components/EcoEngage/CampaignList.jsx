import React,{ useState }  from "react";
import { useGetCampaignsByCountryQuery, useAddParticipantMutation } from "../../features/api/apiSlices/campaignApiSlice";


const CampaignList = ({ selectedCountry }) => {
  const { data: campaignsData, isLoading: campaignLoading, error: campaignError } = useGetCampaignsByCountryQuery(selectedCountry);
  
  const [addParticipant, { isLoading: addingParticipant, error: addParticipantError }] = useAddParticipantMutation();
  const [joinedCampaigns, setJoinedCampaigns] = useState([]);
  const userId = campaignsData.userId;
  console.log(userId)
  // Handle loading state
  if (campaignLoading) {
    return <p className="text-sm text-gray-600">Loading campaigns...</p>;
  }

  // Handle error state
  if (campaignError) {
    return (
      <p className="text-sm text-red-600">
        Error loading campaigns: {campaignError.message || "Unknown error"}
      </p>
    );
  }

  // Handle case when no campaigns are found
  if (!campaignsData.campaigns || campaignsData.campaigns.length === 0) {
    return (
      <p className="text-sm text-gray-600">
        No campaigns found for {selectedCountry}.
      </p>
    );
  }

  // Handle join campaign
  const handleJoinCampaign = async (campaignId) => {
    try {
      const response = await addParticipant({ campaignId }).unwrap();
      setJoinedCampaigns((prev) => [...prev, campaignId]);
      window.location.reload();
      console.log("Joined campaign successfully:", response);
    } catch (error) {
      console.error("Error joining campaign:", error);
    }
  };

  // Render campaign list
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ongoing Campaigns</h2>
      <ul className="space-y-4">
      {campaignsData.campaigns.map((campaign, index) => {
          // Check if the user is already a participant by comparing the userId with campaign.participants
          
          const isJoined = campaign.participants.some(participant => participant._id === userId);
          
          console.log(campaign.participants);
          return (
            <li key={index} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{campaign.name}</h3>
                <p className="text-sm text-gray-600">Created by: {campaign.user?.username}</p>
              </div>
              <button
                className="bg-blue-500 text-white font-bold py-1 px-3 rounded-lg hover:bg-blue-600"
                onClick={() => handleJoinCampaign(campaign._id)}
                disabled={isJoined} // Disable button if already joined or if the request is in progress
              >
                {isJoined ? "Joined" : "Join"}
              </button>
            </li>
          );
        })}
      </ul>

      {addParticipantError && (
        <p className="text-sm text-red-600">
          Error joining campaign: {addParticipantError.message || "Unknown error"}
        </p>
      )}
    </section>
  );
};

export default CampaignList;
