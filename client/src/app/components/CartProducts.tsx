import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { CartProduct } from "../context/CartContext";

const CartProducts = () => {
  const { cartItems, increaseQuantity } = useCart();
  return (
    <>
      {cartItems.length === 0 && (
        <p className="uppercase font-grotesk-400">Your Cart is empty.</p>
      )}
      {cartItems?.map((product: CartProduct, index: number) => {
        return (
          <div
            className="card flex text-base border border-black/20 text-black"
            key={index}
          >
            <div className="image_div">
              <Image
                src={product.image}
                alt={product.name}
                height={114}
                width={114}
              />
            </div>

            <div className="content_div flex-grow px-3.5 pt-2.5 pb-2.5 flex flex-col justify-between">
              <div className="price_name_total_div upper flex justify-between">
                <div className="name_price_div">
                  <p className="font-grotesk-500">{product.name}</p>
                  <p className="text-[#3F3F3F]">₹{product.price}</p>
                </div>
                <div className="total_div">
                  ₹{parseInt(product.price) * product.quantity}
                </div>
              </div>
              <div className="quantity_div lower flex items-center gap-0.5">
                <button className="cursor-pointer py-0.5 px-2">-</button>
                <p>{product.quantity}</p>
                <button
                  className="cursor-pointer py-0.5 px-2"
                  onClick={() => increaseQuantity(product.productId)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartProducts;
