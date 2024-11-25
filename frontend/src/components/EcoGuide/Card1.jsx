import React from 'react';

const Card1 = () => {
  return (
    <a href="javascript:void(0)">
      <div className="relative flex flex-col my-6 bg-white shadow-lg rounded-lg w-[20rem] h-[30rem] border border-gray-200"> {/* Added shadow-lg and border */}
        <div className="relative h-48 m-2.5 overflow-hidden text-white rounded-md">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
            alt="card-image" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4 flex-1">
          <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
            POPULAR
          </div>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            Website Review Check
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to "Naviglio" where you can enjoy the main nightlife in
            Barcelona.
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              alt="Tania Andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="relative inline-block h-8 w-8 rounded-full"
            />
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">Lewis Daniel</span>
              <span className="text-slate-600">
                January 10, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card1;
