import React from "react";

const Card1 = ({ data }) => {
  if (!data) {
    return null; // Don't render anything if data is null or undefined
  }

  // Function to truncate text to a fixed number of words
  const truncateText = (text, wordLimit) => {
    if (!text) return "Not available.";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <div className="relative flex flex-col my-6 bg-white shadow-lg rounded-lg w-[20rem] h-[30rem] border border-gray-200">
        {/* Image Section */}
        <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">
          {data.urlToImage ? (
            <img
              src={data.urlToImage}
              alt="Card Visual"
              className="object-cover w-full h-full"
            />
          ) : (
            <img
              src="https://via.placeholder.com/150" // Dummy image URL
              alt="Dummy Visual"
              className="object-cover w-full h-full"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex-1">
          <div className="mb-4 flex items-center">
            {/* Adjust the width of the blue box */}
            <div className="rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm min-w-[6rem] max-w-[100%] text-center truncate whitespace-nowrap overflow-hidden">
              {data.source?.name || "POPULAR"}
            </div>
          </div>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {truncateText(data.title, 15)} {/* Limit title to 15 words */}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            {truncateText(data.description, 20)} {/* Limit description to 20 words */}
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">
                {truncateText(data.author, 2)} {/* Limit author name to 2 words */}
              </span>
              <span className="text-slate-600">
                {data.publishedAt
                  ? new Date(data.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No Date Available"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card1;
