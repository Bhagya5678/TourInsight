import React from 'react';

const AccomodationProductInfo = ({ title,  price, expectedPrice }) => {
  return (
    <div className="flex-grow p-8">
      <div className="flex items-center mb-6">
        <div className="flex items-center">
          {/* Displaying stars based on the 'stars' value */}
          {/* {Array.from({ length: stars }, (_, index) => (
            <svg
              key={index}
              className="w-6 h-6 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 0 1 .77.36l1.91 2.32 3.74.54a1 1 0 0 1 .52 1.7l-2.8 2.73.66 3.86a1 1 0 0 1-1.45 1.05L10 12.85l-3.47 1.82a1 1 0 0 1-1.45-1.05l.66-3.86-2.8-2.73a1 1 0 0 1 .52-1.7l3.74-.54L9.23 2.36A1 1 0 0 1 10 2zm-1.58 7.21a1 1 0 0 1 .29-1.38l2.47-1.3-.49-2.86a1 1 0 0 1 .87-1.17 1 1 0 0 1 1.17.87l.49 2.86 2.47 1.3a1 1 0 0 1 .29 1.38l-1.82 1.78.43-2.52a1 1 0 0 1-1.45-1.05L10 13.36l-2.26 1.18a1 1 0 0 1-1.45-1.05l.43-2.52-1.82-1.78z"
              />
            </svg>
          ))} */}
          {/* <span className="ml-2 text-lg font-bold">{stars}/5</span>
          {console.log(price)} */}
        </div>
        {/* <span className="mx-4 text-gray-500 text-lg">({numRatings} reviews)</span> */}
      </div>
      <div className="mb-6">
        <span className="text-2xl font-bold">Price: ₹{price}</span>
        <span className="ml-4 text-gray-500 text-2xl">(Expected: ₹{expectedPrice})</span>
      </div>
      {/* <div className="mb-6">
        <span className="text-lg text-gray-500">{address}</span>
      </div> */}
    </div>
  );
};

export default AccomodationProductInfo;
