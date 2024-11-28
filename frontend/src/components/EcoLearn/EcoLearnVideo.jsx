import React, { useState } from 'react';

import Sidebar from '../../partials/Sidebar';
import Header from '../../partials/Header';
import Banner from '../../partials/Banner';
import VdoButton from '../VdoButton';
const EcoLearnVideo = () => {
    const items = [
        {
          id: "How to Reduce Your Carbon Footprint | Sustainability Tips | WWF",
          title: "How to Reduce Your Carbon Footprint | Sustainability Tips | WWF",
          description: "Everyone has an Environmental Footprint 🌍 \nYour daily choices—like the energy you consume, the food you eat, and the products you buy—all contribute to your environmental footprint. This video breaks down what it means and offers practical tips to make eco-friendly decisions that reduce your impact on the planet.\n💡 Watch to learn how small changes can lead to big environmental benefits!",
          imageSrc: "https://img.youtube.com/vi/YbEFJd-fJpQ/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/YbEFJd-fJpQ"
        },
        {
          id: "20 Ways To Save Electricity at Home - Frugal Living",
          title: "20 Ways To Save Electricity at Home - Frugal Living",
          description:"In this video we will tell you 20 ways you can save electricity and money at home. Frugal living is the essence and requires we go over all expenses that can be avoided.",
          imageSrc: "https://img.youtube.com/vi/EB9I2Wp7stg/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/EB9I2Wp7stg",
        },
        {
          id: "Stock Market",
          title: "Stock Market",
          imageSrc: "https://img.youtube.com/vi/HNPbY6fSeo8/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/HNPbY6fSeo8",
        },
        {
          id: "Mutual Funds",
          title: "Mutual Funds",
          imageSrc: "https://img.youtube.com/vi/ACpQo1a_RBk/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/ACpQo1a_RBk",
        },
        {
          id: "Taxes Explained",
          title: "Taxes Explained",
          imageSrc: "https://img.youtube.com/vi/MQpbxF_RngI/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/MQpbxF_RngI",
        },
        {
          id: "SIP",
          title: "SIP",
          imageSrc: "https://img.youtube.com/vi/Wy2aEUmf_OE/sddefault.jpg",
          videoUrl: "https://www.youtube.com/embed/Wy2aEUmf_OE",
        },
      ];
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");
    const handleItemClick = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setShowModal(true);
      };
    
    const closeModal = () => {
        setShowModal(false);
        setCurrentVideoUrl("");
      };
    
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex items-center justify-center p-4">
          
        </div>
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                {/* Site header */}
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-2 py-0 w-full max-w-9xl mx-auto">

                        {/* Dashboard actions */}
                        <div className="sm:flex sm:justify-between sm:items-center mb-8">

                            {/* Left: Title */}
                            <div className="mb-4 sm:mb-0">
                                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                                    Videos
                                </h1>
                            </div>

                            {/* Right: Actions */}
                            
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 p-9">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-2xl shadow-lg relative overflow-hidden"
            style={{
              
              backgroundSize: "cover",
              height: "350px",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <VdoButton
                imageSrc={item.imageSrc}
                title={item.title}
                description={item.description}
                onClick={() => handleItemClick(item.videoUrl)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-black bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-md focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
            <iframe
              width="100%"
              height="500px"
              src={currentVideoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
                    </div>
                </main>

                <Banner />
            </div>
        </div>
    );
};

export default EcoLearnVideo;
