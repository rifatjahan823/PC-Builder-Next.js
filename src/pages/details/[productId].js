import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="w-full mx-auto px-5">
      <div className="grid md:grid-cols-2 gap-4 justify-center items-center mt-10">
        <div className="">
          <img src={product.image} alt="" className="md:w-9/12 w-full h-80 mx-auto" />
        </div>
        <div className="mt-3">
          <h2 className="font-bold sm:text-3xl text-xl">{product.name}</h2>
          <h2 className="text-xl my-2">
            <spn className="font-bold">Price: </spn>{" "}
            <span className="font-bold">&#2547;</span>{" "}
            {product.Price.toLocaleString()}
          </h2>
          <h2 className="text-xl font-bold">Key Features:-</h2>
          {product?.KeyFeatures.map((keyFeature, i) => (
            <li className="pl-4" key={i}>
              {keyFeature}
            </li>
          ))}
          <h2 className="text-xl my-2">
            <spn className="font-bold">Category: </spn> {product.category}
          </h2>
          <h2 className="text-xl">
            <span className="font-bold">Status:</span> {product.Status}
          </h2>
          <h2 className="text-xl mt-2">
            <span className="font-bold">Rating:</span> {product.rating}
          </h2>
        </div>
      </div>
      {/* -------------details----------- */}
      <div className="bg-white p-4 mt-5">
        <h2 className="text-center text-3xl text-black mb-4">Details</h2>
      <p>{product.description}</p>
      </div>
    </div>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-build-tkcl.onrender.com/category`);
  const products = await res.json();

  const paths = products?.products?.map((product) => ({
    params: { productId: product._id.toString() }, // Convert the id to a string
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-build-tkcl.onrender.com/category/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};

export default ProductDetails;
