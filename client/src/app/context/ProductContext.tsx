"use client";
import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import toast from "react-hot-toast";

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  createdAt: string;
  updatedAt: string;
};

type ProductContextsType = {
  products: Product[];
  setproducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => Promise<void>;
  selectedProduct: Product | null;
  setselectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
};

type ProductProviderType = {
  children: ReactNode;
};

const ProductContexts = createContext<ProductContextsType | undefined>(
  undefined
);

const ProductContext = ({ children }: ProductProviderType) => {
  const [products, setproducts] = useState<Product[]>([]);
  const [selectedProduct, setselectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://nubra-souvenir-ecomm-13.onrender.com/api/getProducts");

      if (!response.ok) {
        throw new Error(`Error ${response.status} : Failed to fetch products`);
      }

      const { products } = await response.json();
      setproducts(products);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load products.");
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    products,
    setproducts,
    fetchProducts,
    selectedProduct,
    setselectedProduct,
  };

  return (
    <ProductContexts.Provider value={value}>
      {children}
    </ProductContexts.Provider>
  );
};

export const useProductsContext = (): ProductContextsType => {
  const productContext = useContext(ProductContexts);
  if (!productContext) {
    throw new Error(
      "useProducts must be used within the ProductContext provider."
    );
  }
  return productContext;
};

export default ProductContext;
