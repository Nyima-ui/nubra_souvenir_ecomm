"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { CartProduct } from "../context/CartContext";
import { useProductsContext } from "../context/ProductContext";

const ProductGrid = () => {
  const { addToCart, toggleCart } = useCart();
  const { products } = useProductsContext();

  const productsToRender = products.filter((p) => p.category === "collection");

  const handleAddtoCart = (product: CartProduct) => {
    addToCart(product);
    toggleCart();
  };
  return (
    <section className="pt-7.5 md:pt-15 pb-15">
      <motion.h2
        className="font-century text-center text-[19.02px] tracking-[0.01em] 
      sm:text-[23.05px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        Our Collection
      </motion.h2>

      {/* grid  */}
      <div className="px-3 font-grotesk-400 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-7.5 md:mt-15 gap-x-3 md:gap-x-5 gap-y-5 md:gap-y-11.5 max-w-[90vw] mx-auto">
        {productsToRender.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-[#FFF6F1] shadow-xs cursor-pointer group overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              height={330}
              width={330}
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            ></Image>
            <div className="flex items-center justify-between p-3.5">
              <div>
                <p className="text-base font-grotesk-500 leading-5">
                  {product.name}
                </p>
                <p className="font-grotesk-300 mt-0.5">₹{product.price}</p>
              </div>
              <div>
                <span className="sr-only">Add to Cart</span>
                <button
                  aria-label="Add to Cart"
                  className="md:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 cursor-pointer"
                  onClick={() =>
                    handleAddtoCart({
                      productId: product.id,
                      name: product.name,
                      image: product.image,
                      price: product.price,
                      category: product.category,
                      quantity: 1,
                    })
                  }
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.71215 7.70833H32.375L29.2917 18.5H11.3724M30.8333 24.6667H12.3333L9.25 4.625H4.625M13.875 30.8333C13.875 31.6848 13.1848 32.375 12.3333 32.375C11.4819 32.375 10.7917 31.6848 10.7917 30.8333C10.7917 29.9819 11.4819 29.2917 12.3333 29.2917C13.1848 29.2917 13.875 29.9819 13.875 30.8333ZM30.8333 30.8333C30.8333 31.6848 30.1431 32.375 29.2917 32.375C28.4402 32.375 27.75 31.6848 27.75 30.8333C27.75 29.9819 28.4402 29.2917 29.2917 29.2917C30.1431 29.2917 30.8333 29.9819 30.8333 30.8333Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <button
        className="border py-2 px-6 block mx-auto mt-7.5 md:mt-11 font-grotesk-400 cursor-pointer
       hover:bg-primary hover:text-white hover:border-transparent transition-all duration-100 ease-in"
      >
        View More
      </button>
    </section>
  );
};

export default ProductGrid;
