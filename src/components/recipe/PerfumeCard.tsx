import { RecipeType } from "@/types/RecipeType"; // Consider renaming to PerfumeType
import Image from "next/image";
import React from "react";

export default function PerfumeCard({
  id,
  image,
  name,
  ingredients,
  instructions,
}: RecipeType) {
  return (
    <div
      key={id}
      className="bg-indigo-50 dark:bg-indigo-900 shadow-2xl rounded-xl overflow-hidden w-full grid md:grid-cols-2 border border-indigo-200 dark:border-indigo-700"
    >
      {/* Perfume Content */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <span className="inline-block bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-full mb-2">
            Luxury
          </span>
          <h2 className="text-3xl font-semibold text-purple-800 dark:text-purple-200 mb-2">
            {name || "Eau de Nuit"}
          </h2>
          <p className="text-purple-600 dark:text-purple-300 mb-4">
            An enchanting scent blending citrus and spicy notes.
          </p>

          {/* Volume */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-400 mb-1">
              Volume
            </h3>
            <p className="text-sm text-purple-700 dark:text-purple-200">50ml</p>
          </div>

          {/* Scent Notes */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-400 mb-2">
              Scent Notes
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-purple-700 dark:text-purple-200 text-sm">
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Application Tips */}
          <div>
            <h3 className="text-lg font-semibold text-purple-500 dark:text-purple-400 mb-2">
              Application Tips
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-purple-700 dark:text-purple-200 text-sm">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-6 text-right">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
            Shop Now
          </button>
        </div>
      </div>

      {/* Perfume Image */}
      <div className="h-64 md:h-auto relative">
        <Image
          src={
            image ||
            "https://denverformen.com/cdn/shop/files/Desire_100ml.png?v=1737460558"
          }
          alt={`${name || "Eau de Nuit"} Perfume`}
          className="w-full h-full object-cover"
          width={300}
          height={300}
          unoptimized
          onError={(e) => {
            e.currentTarget.src = "/fallback-perfume-bottle.jpg";
            e.currentTarget.alt = "Fallback Perfume Image";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>
    </div>
  );
}
