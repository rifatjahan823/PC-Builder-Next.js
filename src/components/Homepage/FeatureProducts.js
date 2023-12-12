import Link from 'next/link';
import React from 'react';

const FeatureProducts = ({product}) => {

    return (
        <div>
              <Link href={`/details/${product._id}`}>
              {" "}
              <div className="bg-white shadow-md p-5 h-full">
                <img src={product.image} alt="" className="w-52 h-52 mx-auto" />
                <div className="mt-3">
                  <h2 className="font-bold text-lg">{product.name}</h2>
                  <h2>
                    <spn className="font-bold">Price: </spn>{" "}
                    <span className="font-bold">&#2547;</span>{" "}
                    {product.Price.toLocaleString()}
                  </h2>
                  <h2>
                    <spn className="font-bold">Category: </spn>{" "}
                    {product.category}
                  </h2>
                  <h2>
                    <span className="font-bold">Status:</span> {product.Status}
                  </h2>
                  <h2>
                    <span className="font-bold">Rating:</span> {product.rating}
                  </h2>
                </div>
              </div>
            </Link>
        </div>
    );
};

export default FeatureProducts;