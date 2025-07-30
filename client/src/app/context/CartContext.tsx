"use client";
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";

export type CartProduct = {
  productId: string;
  name: string;
  image: string;
  price: string;
  category: "collection" | "favorite";
  quantity: number;
};

export type CartContextType = {
  cartItems: CartProduct[];
  addToCart: (product: CartProduct) => void;
  isCartOpened: boolean;
  toggleCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  findTotal: () => number;
};

export type CartProdviderProps = {
  children: ReactNode;
};

//creating the context
const CartContexts = createContext<CartContextType | undefined>(undefined);

const CartContext = ({ children }: CartProdviderProps) => {
  const [cartItems, setcartItems] = useState<CartProduct[]>([]);
  const [isCartOpened, setisCartOpened] = useState<boolean>(false);

  const toggleCart = () => {
    setisCartOpened((prev) => !prev);
  };

  const increaseQuantity = (productId: string) => {
    const updatedCart = cartItems.map((product, i) => {
      if (product.productId === productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setcartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId: string) => {
    const updatedCart = cartItems
      .map((product) => {
        if (product.productId === productId) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return null;
          }
        }
        return product;
      })
      .filter((product): product is CartProduct => product !== null);

    setcartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const findTotal = () => {
    return cartItems.reduce((total, product) => {
      return total + parseInt(product.price) * product.quantity;
    }, 0);
  };

  const addToCart = (product: CartProduct) => {
    const existingProduct = cartItems.find(
      (item) => item.productId === product.productId
    );
    if (existingProduct) {
      increaseQuantity(product.productId);
    } else {
      const updatedCart = [...cartItems, product];
      setcartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartItems");
    if (storedCartProducts) {
      setcartItems(JSON.parse(storedCartProducts));
    }
  }, []);

  return (
    <CartContexts.Provider
      value={{
        cartItems,
        addToCart,
        isCartOpened,
        toggleCart,
        increaseQuantity,
        decreaseQuantity,
        findTotal,
      }}
    >
      {children}
    </CartContexts.Provider>
  );
};

export const useCart = (): CartContextType => {
  const cartContext = useContext(CartContexts);
  if (!cartContext) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cartContext;
};

export default CartContext;
