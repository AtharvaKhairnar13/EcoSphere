import React from 'react';
import {
  Button,
  
} from "@material-tailwind/react";

const VdoCard = ({ imageSrc, title, description, category, onClick }) => {
  return (
    <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
        <img
          src={imageSrc}
          alt="card-image"
          className="h-full w-full rounded-md md:rounded-lg object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 rounded-full bg-teal-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
          {category}
        </div>
        <h4 className="mb-2 text-slate-800 text-xl font-semibold">{title}</h4>
        <p className="mb-8 text-slate-600 leading-normal font-light">{description}</p>
        <div>
          <Button onClick={onClick} color="green" className="mt-0">
        Watch Now
      </Button>
        </div>
      </div>
    </div>
  );
};

export default VdoCard;








