import React, { useState } from 'react';
import Card1 from './Card1';
import HorizontalFilterBar from './HorizontalFilterBar';


const Articles = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <HorizontalFilterBar/>
        <div className="flex flex-wrap justify-start p-4"> {/* Use flex-wrap to allow cards to wrap to the next line */}
          {/* Repeat Card1 component four times */}
          {Array.from({ length: 8 }).map((_, index) => ( // Change the number as needed for more cards
            <div className="w-1/3 p-2" key={index}> {/* Each card takes 1/4 of the width with padding */}
              <Card1 />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;