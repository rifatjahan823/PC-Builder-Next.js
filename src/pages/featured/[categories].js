// pages/featured/[categories].js
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const FeaturedCategories = ({ products }) => {
  const router = useRouter();
  const filteredProducts = products.filter(
    (product) => product.category === router.query.categories
  );

  return (
    <div className="w-full mx-auto px-5 my-10">
      <h2 className="text-black text-3xl text-center">Featured Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center mt-10">
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <div className="bg-white shadow-md p-5">
              <img src={product.image} alt="" className="w-52 h-52 mx-auto" />
              <div className="mt-3">
                <h2 className="font-bold text-lg">{product.name}</h2>
                <h2>
                  <spn className="font-bold">Price: </spn>{" "}
                  <span className="font-bold">&#2547;</span>{" "}
                  {product.Price.toLocaleString()}
                </h2>
                <h2>
                  <spn className="font-bold">Category: </spn> {product.category}
                </h2>
                <h2>
                  <span className="font-bold">Status:</span> {product.Status}
                </h2>
                <h2>
                  <span className="font-bold">Rating:</span> {product.rating}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

FeaturedCategories.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  // Fetch data to determine dynamic paths at build time
  const res = await fetch("http://localhost:5000/product");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { categories: product.category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps() {
  // Fetch data from an external API, file, or database
  const res = await fetch("http://localhost:5000/product");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
