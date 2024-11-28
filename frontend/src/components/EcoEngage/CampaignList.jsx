import React from "react";

const CampaignList = ({ selectedCountry }) => {
  // Sample data; replace with real data fetching
  const campaigns = {
    India: [
      { title: "Reduce Air Pollution in Delhi", creator: "John Doe" },
      { title: "Plant More Trees", creator: "EcoWarrior" },
    ],
    "United States": [
      { title: "Stop Wildfires in California", creator: "Jane Smith" },
      { title: "Clean Up Water Bodies", creator: "SaveNature" },
    ],
    // Add more countries as needed
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ongoing Campaigns</h2>

      {campaigns[selectedCountry]?.length ? (
        <ul className="space-y-4">
          {campaigns[selectedCountry].map((campaign, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-lg">
              <h3 className="text-lg font-semibold">{campaign.title}</h3>
              <p className="text-sm text-gray-600">Created by: {campaign.creator}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600">No campaigns found for this country.</p>
      )}
    </section>
  );
};

export default CampaignList;
