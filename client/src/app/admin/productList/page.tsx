"use client";
import { useAdminContext } from "@/app/context/AdminContext";
import { useProductsContext } from "@/app/context/ProductContext";
import { useRouter } from "next/navigation";
import { Product } from "@/app/context/ProductContext";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import Bars from "@/app/components/Bars";
import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";

const Page = () => {
  const [productIdtoDelete, setproductIdtoDelete] = useState<string | null>(
    null
  );
  const [loading, setloading] = useState(false);
  const { setisSidebarOpen, isModalOpen, setisModalOpen } = useAdminContext();
  const { products, setproducts, setselectedProduct } = useProductsContext();
  const router = useRouter();

  const handleDeleteProduct = async () => {
    if (!productIdtoDelete) {
      toast.error("No product selected for deletion");
      return;
    }

    try {
      setloading(true);
      const response = await fetch(
        `https://nubra-souvenir-ecomm-13.onrender.com/api/deleteProduct/${productIdtoDelete}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        toast.error("Error deleting product");
        return;
      }

      setproducts((prev) =>
        prev.filter((product) => product.id !== productIdtoDelete)
      );
      toast.success("Product successfully deleted!");
    } catch (error) {
      console.error("Delete product failed:", error);
      toast.error("Something went wrong");
    } finally {
      setproductIdtoDelete(null);
      setisModalOpen(false);
      setloading(false);
    }
  };
  const handleUpdate = (product: Product): void => {
    setselectedProduct(product);
    router.push("/admin/updateProduct");
  };
  return (
    <>
      {isModalOpen && (
        <div className="overlay fixed top-0 left-0 h-screen w-screen bg-black/70 z-20 flex items-center justify-center">
          <div className="w-[287px]  bg-neutral-bg relative -translate-y-10 flex flex-col items-center py-7.5">
            <Image
              src="/images/pala&cha.png"
              alt="Admin picture"
              width={69}
              height={101}
            />
            <p className="text-center leading-4 md:leading-5 mt-5 md:text-[19.02px]">
              Are you sure you want to <br />
              delete the product?
            </p>
            {loading && <Loader2 className="animate-spin mt-4" color="black" size={40} />}
            <div className="space-x-5 mt-8 md:mt-5">
              <button
                className="border py-1 px-7.5 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              >
                NO
              </button>
              <button
                className="text-white bg-primary py-1 px-7.5 cursor-pointer"
                onClick={handleDeleteProduct}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      )}
      <section className="pt-17 min-h-screen bg-neutral-bg px-[15px] relative sm:left-66 md:left-70 sm:pt-27 pb-10">
        <button
          className="sm:hidden cursor-pointer mt-7.5"
          onClick={() => setisSidebarOpen(true)}
        >
          <Bars />
        </button>
        <h3 className="text-[19.02px] mt-7.5">All Products</h3>
        {/* grid container  */}
        <main className="grid grid-cols-5 border mt-5 max-w-[900px] max-md:max-w-[400px] max-lg:max-w-[500px] max-xl:max-w-[600px]">
          {/* grid header  */}
          {/* frist child  */}
          <div className="border border-black/20 col-span-2">
            <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">
              Product
            </p>
          </div>
          {/* second child  */}
          <div className="border border-black/20 col-span-1">
            <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">
              Category
            </p>
          </div>
          {/* third child  */}
          <div className="border border-black/20 col-span-1">
            <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">
              Price
            </p>
          </div>
          {/* fourth child  */}
          <div className="border border-black/20 col-span-1">
            <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">
              Action
            </p>
          </div>
          {products.length === 0 && (
            <p className="text-xl px-2 py-1 text-red-500">No Products</p>
          )}

          {/* grid rows  */}
          {products.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className="col-span-2 flex flex-col items-center gap-1 border border-black/20">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={70}
                    width={70}
                  />
                  <span className="text-[14px] font-medium">
                    {product.name}
                  </span>
                </div>

                <div className="col-span-1 flex items-center justify-center border border-black/20">
                  <p className="text-[14px]">{product.category}</p>
                </div>
                <div className="col-span-1 border flex items-center justify-center border-black/20">
                  <p className="text-[14px]">₹{product.price}</p>
                </div>
                <div className="col-span-1 border flex flex-col items-center justify-center gap-2 border-black/20">
                  <button
                    className="text-[14px] text-white bg-primary py-[3px] w-[60px] cursor-pointer"
                    onClick={() => handleUpdate(product)}
                  >
                    Update
                  </button>
                  <button
                    className="text-[14px] border w-[60px] py-[3px] cursor-pointer"
                    onClick={() => {
                      setproductIdtoDelete(product.id);
                      setisModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </main>
      </section>
    </>
  );
};

export default Page;
