import { motion } from "framer-motion";
import CartProducts from "./CartProducts";
import { useCart } from "../context/CartContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Cart = () => {
  const { isCartOpened, toggleCart, cartItems, findTotal } = useCart();
  const path = usePathname(); 
  return (
    <motion.section
      className={`${path === "/checkout" ? "relative top-17" : "fixed top-17 z-40"} ${
        isCartOpened ? "right-0" : "-right-full"
      } bg-neutral-bg w-full sm:w-[70%] md:w-[60%] lg:w-[47%] h-[95vh] px-5
    pt-7.5 transition-all duration-200 ease-linear max-sm:border-t`}
    >
      <nav className="flex justify-between items-center">
        <h2 className="font-century text-[19.05px] tracking-[0.01em] text-black">
          {path === "/checkout" ? "Your Order" : "Your Cart"}
        </h2>
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleCart}
          className={`${path === '/checkout' ? 'hidden' : 'block'}`}
        >
          <path
            d="M29.2914 7.70833L7.70801 29.2917M7.70805 7.70833L29.2914 29.2917"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </nav>
      <div className="mt-7.5 space-y-2 h-[65vh] overflow-y-scroll styled-scrollbar">
        <CartProducts />
      </div>
      {path === '/checkout' && (
         <div className="flex justify-between border-b border-black/60">
            <p className="font-grotesk-500 text-[19.02px] md:text-[23.03px]">Total</p>
            <p className="md:text-[19.02px]">₹{findTotal()}</p>
         </div>
      )}
      {cartItems.length > 0 && path === "/" && (
        <Link href="/checkout"><button className="bg-primary text-white w-full py-2.5 cursor-pointer">{`Checkout - ₹${findTotal()}`}</button></Link>
      )}
    </motion.section>
  );
};

export default Cart;
