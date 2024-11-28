import React from "react";

const Card2 = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // Show a loading state if data is not available
  }

  return (
    <div className="relative grid h-[25rem] w-full flex-col items-end justify-center overflow-hidden rounded-lg bg-white">
      <div
        className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-center"
        style={{ backgroundImage: `url(${data.urlToImage})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
      </div>
      <div className="relative text-center p-6 px-6 py-14 md:px-12">
        <h2 className="mb-6 text-3xl font-medium text-white">{data.title}</h2>
        <h5 className="mb-4 text-xl font-semibold text-slate-300">
          {data.author || "Unknown Author"}
        </h5>
        <img
          alt={data.author || "Author"}
          src={
            data.author
              ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              : "https://via.placeholder.com/150"
          }
          className="relative inline-block h-32 w-32 rounded-full border border-white"
        />
      </div>
    </div>
  );
};

export default Card2;
