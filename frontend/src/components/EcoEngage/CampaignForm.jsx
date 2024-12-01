import React, { useState } from "react";
import { useAddCampaignMutation } from "../../features/api/apiSlices/campaignApiSlice";
const CampaignForm = ({ selectedCountry }) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [addCampaign, { isLoading, isError, isSuccess, error }] = useAddCampaignMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!subject || !message || !selectedCountry) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Call the API to create a new campaign
      const newCampaign = {
        name: subject,
        country: selectedCountry,
    
      };

      await addCampaign(newCampaign).unwrap(); // Unwrap handles the promise
      alert(`Campaign successfully created for ${selectedCountry}!`);
      
      // Reset form fields
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Failed to create campaign:", err);
    }
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Start a Campaign</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Campaign Title
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Campaign Title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Campaign Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Write your campaign message here..."
            rows="6"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? "Starting..." : "Start Campaign"}
        </button>
      </form>

      {isSuccess && <p className="mt-4 text-green-600">Campaign created successfully!</p>}
      {isError && (
        <p className="mt-4 text-red-600">
          Failed to create campaign: {error?.data?.error || "Unknown error"}
        </p>
      )}
    </section>
  );
};

export default CampaignForm;
