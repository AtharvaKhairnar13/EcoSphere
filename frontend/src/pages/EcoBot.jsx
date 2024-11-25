import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { SearchHistory } from "../components/Ecobot/SearchHistory";
import InputBar from "../components/Ecobot/InputBar";
import Chat from "../components/Ecobot/Chat";

const EcoBot = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} className="h-screen" />

      {/* Main Content */}
      <div className="relative flex flex-col flex-1 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Chat Section */}
            <div className="bg-white flex-[2] shadow-md rounded-lg border border-gray-300 p-6 flex flex-col relative h-full">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">EcoChat</h2>
              <div className="flex-grow overflow-y-auto">
                <Chat />
              </div>
              <div className="mt-4">
                <InputBar />
              </div>
            </div>

            {/* History Section */}
            <div className="bg-white flex-[1] shadow-md rounded-lg border border-gray-300 p-6 flex flex-col h-full">
              <h2 className="font-bold text-2xl mb-4 text-gray-800">
                History
              </h2>
              <div className="flex-grow overflow-y-auto">
                <SearchHistory />
              </div>
              <div className="mt-4">
                <Button
                  variant="outlined"
                  className="text-red-500 border-red-500 hover:bg-red-100 w-full"
                >
                  Clear History
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EcoBot;
