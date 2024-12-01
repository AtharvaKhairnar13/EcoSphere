import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { SearchHistory } from "../components/Ecobot/SearchHistory";
import InputBar from "../components/Ecobot/InputBar";
import Chat from "../components/Ecobot/Chat";
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'tailwindcss/tailwind.css';
import { HorizontalCard } from "../components/horizontal2";

const EcoPulse2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} className="h-screen" />

      {/* Main Content */}
      <div className="relative flex flex-col flex-1 overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="grow px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-6 h-full">
            {/* EcoPulse Title */}
            <h2 className="font-bold text-2xl mb-0 text-gray-800">EcoPulse</h2>

            {/* New div below the EcoPulse heading with scrollable content */}
            <div className="bg-black flex-1 shadow-0 rounded-lg border border-gray-300 p-2 flex flex-col relative overflow-y-auto max-h-screen">
              {/* Adding HorizontalCard components */}
              <div className="flex flex-col gap-6">
  <HorizontalCard />
  <hr className="my-0 w-full border-t-2 border-gray-300" />
  <HorizontalCard />
  <HorizontalCard />
</div>
              {/* Add more cards as needed */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EcoPulse2;
