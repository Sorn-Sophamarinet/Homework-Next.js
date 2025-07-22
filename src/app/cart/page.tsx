"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/stores";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/lib/features/cartSlice";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";


export default function Cart() {
  const dispatch = useAppDispatch();
  const { items, itemsCount } = useAppSelector(
    (state: RootState) => state.cart
  );

  const totalPrice = items.reduce(
    (total: number, item: ProductType & { quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((item: ProductType & { quantity: number }) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow"
              >
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className="px-2 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className="px-2 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-4 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total Items: {itemsCount} | Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={() => dispatch(clearCart())}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
