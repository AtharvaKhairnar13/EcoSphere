import { apiSlice } from "../apiSlice";
import { CAMPAIGNS_URL } from "../endpoints"; // Define CAMPAIGNS_URL in your endpoints file, e.g., "/api/v1/campaigns"

export const campaignApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Get campaigns filtered by country
    getCampaignsByCountry: builder.query({
        query: (country) => ({
          url: `${CAMPAIGNS_URL}/by-country${country ? `?country=${country}` : ""}`, // Add query string if country is provided
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Assuming the token is stored in localStorage
          },
        }),
      }),
      

    // Optional: Create a new campaign
    addCampaign: builder.mutation({
      query: (data) => ({
        url: `${CAMPAIGNS_URL}/add`,
        method: "POST",
        body: data,
      }),
    }),

    // Optional: Delete a campaign by ID
    deleteCampaign: builder.mutation({
      query: (id) => ({
        url: `${CAMPAIGNS_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    // Optional: Update a campaign by ID
    updateCampaign: builder.mutation({
      query: ({ id, data }) => ({
        url: `${CAMPAIGNS_URL}/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    addParticipant: builder.mutation({
        query: ({ campaignId }) => ({
          url: `${CAMPAIGNS_URL}/add-participant`,
          method: "POST",
          body: { campaignId },
        }),
      }),
  }),
});

export const {
  useGetCampaignsByCountryQuery, // Hook for fetching campaigns by country
  useAddCampaignMutation,       // Hook for creating a new campaign
  useDeleteCampaignMutation,    // Hook for deleting a campaign
  useUpdateCampaignMutation,
  useAddParticipantMutation,    // Hook for updating a campaign
} = campaignApiSlice;
