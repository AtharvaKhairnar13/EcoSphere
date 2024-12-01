import fetch from 'node-fetch'; // Ensure you have node-fetch installed
import dotenv from "dotenv";
dotenv.config();

const SentimentHuggingFace = async (content) => {
  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
      {
        headers: {
          Authorization: `Bearer ${process.env.ZSCM}`, // Replace with your Hugging Face API key
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: content,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Model query failed: ${response.statusText}`);
    }

    const result = await response.json();

    // Ensure the result is in the correct format
    if (result && Array.isArray(result[0])) {
      const sentimentResults = result[0];

      // Filter out neutral results
      const filteredResults = sentimentResults.filter(result => result.label !== 'neutral');

      // Find the sentiment label with the highest score (either negative or positive)
      const maxResult = filteredResults.reduce((max, current) => {
        return current.score > max.score ? current : max;
      });

      console.log(maxResult);
      return maxResult.label; // Return the result with the highest score (negative or positive)
    } else {
      throw new Error('Unexpected response format from Hugging Face API');
    }

  } catch (error) {
    console.error("Error querying Hugging Face model:", error);
    return null;
  }
};

export default SentimentHuggingFace;
