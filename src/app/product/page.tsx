import React from "react";
import ProductCard from "@/components/product/ProductCard";
// import { products } from "../../data/product";
import Link from "next/link";
import { ProductType } from "@/types/ProductType";

export default async function Page() {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const BASE_URL = `${process.env.BASE_URL}products`;
  const res = await fetch(BASE_URL, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  const products: ProductType[] = data.products;

  return (
    <section className="bg-yellow-50 dark:bg-yellow-900 min-h-screen py-20 px-8 bg-[url('/path-to-tropical-pattern.png')] bg-repeat-round">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 dark:text-teal-200">
          Discover Tropical Essentials
        </h1>
        <p className="mt-6 text-lg text-teal-600 dark:text-teal-300 max-w-2xl mx-auto">
          Explore vibrant tech and lifestyle gear with free shipping on orders
          over $50.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/shop"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-teal-600 hover:to-teal-700 filter drop-shadow-md hover:drop-shadow-lg transition-all"
          >
            Shop Now
          </Link>
          <Link
            href="/shop"
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-teal-600 hover:to-teal-700 filter drop-shadow-md hover:drop-shadow-lg transition-all"
          >
            បញ្ជាទិញទំនិញ
          </Link>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="w-full h-6 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23facc15%22 fill-opacity=%221%22 d=%22M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22/%3E%3C/svg%3E')] bg-no-repeat"></div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-teal-800 px-4 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-600 transition-all">
          All
        </button>
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-teal-800 px-4 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-600 transition-all">
          Headphones
        </button>
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-teal-800 px-4 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-600 transition-all">
          Shoes
        </button>
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-teal-800 px-4 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-600 transition-all">
          Watches
        </button>
        <button className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-teal-800 px-4 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-600 transition-all">
          Accessories
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            className="no-underline"
            key={product.id}
          >
            <ProductCard
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              thumbnail={product.thumbnail}
              rating={product.rating}
              images={product.images}
              warrantyInformation={product.warrantyInformation}
              shippingInformation={product.shippingInformation}
              availabilityStatus={product.availabilityStatus}
            >
              {product.availabilityStatus === "In Stock" && (
                <span className="absolute top-2 left-2 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  New Arrival
                </span>
              )}
            </ProductCard>
          </Link>
        ))}
      </div>
    </section>
  );
}