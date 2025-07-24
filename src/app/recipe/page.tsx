"use client";
import RecipeCard from "@/components/recipe/PerfumeCard";
import { RecipeType } from "@/types/RecipeType";
import React from "react";
import useSWR from "swr";
import Loading from "../loading";

const fetcher = (url: string): Promise<RecipeType[]> =>
  fetch(url)
    .then((r) => {
      if (!r.ok) {
        throw new Error(`HTTP error! Status: ${r.status}`);
      }
      return r.json();
    })
    .then((data) => {
      // Map DummyJSON products to RecipeType
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return data.products.map((product: any) => ({
        id: product.id,
        image: product.thumbnail,
        name: product.title,
        ingredients: product.description.split(", "), // Split description into array for ingredients
        instructions: [product.returnPolicy], // Use returnPolicy as a placeholder for instructions
      }));
    });

export default function Page() {
  const { data, error, isLoading } = useSWR(
    "https://dummyjson.com/products?limit=10", // Fetch 10 products for demo
    fetcher,
    { revalidateOnFocus: false }
  );

  if (error) {
    console.error("Fetch error:", error);
    return <div>Failed to load: {error.message}</div>;
  }
  if (isLoading) return <Loading />;

  return (
    <div className="grid grid-cols-1 gap-4 p-4 max-w-7xl mx-auto">
      {(data ?? []).map((perfume) => (
        <RecipeCard
          key={perfume.id}
          id={perfume.id}
          image={perfume.image}
          name={perfume.name}
          ingredients={perfume.ingredients}
          instructions={perfume.instructions}
        />
      ))}
    </div>
  );
}