import React from 'react';
import CarouselDef from './components/Carousel';
import ProductInfo from './components/ProductInfo';

const ProductFullscreen = ({ data }) => {
  const { images, stars, numRatings, title, price, expectedPrice ,info } = data;

  return (
    <div className="flex flex-row h-screen">
      {/* Carousel - 2/3 of the screen */}
      <div className="w-2/3 flex-1">
        <CarouselDef images={images} />
        {/* Additional Information below the carousel */}
        <div className="p-4 text-center bg-gray-200">
          <p>{info}</p>
        </div>
      </div>

      {/* Product Info - 1/3 of the screen */}
      <div className="bg-gray-100 p-8 flex flex-col justify-between justify-self-end">
        <div>
          <ProductInfo
            title={title}
            stars={stars}
            numRatings={numRatings}
            price={price}
            expectedPrice={expectedPrice}
          />
        </div>
        <div className="mt-4 w-full">
          {/* Add to Cart and Add to Wishlist buttons */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2">Add to Cart</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md w-full">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductFullscreen;
