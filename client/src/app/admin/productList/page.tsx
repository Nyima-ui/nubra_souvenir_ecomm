"use client";
import Bars from "@/app/components/Bars";
import { useAdminContext } from "@/app/context/AdminContext";
import Image from "next/image";
import { adminProductList } from "@/app/lib/dummyData";

const Page = () => {
  const { setisSidebarOpen } = useAdminContext();
  return (
    <section className="pt-17 h-screen bg-neutral-bg px-[15px] relative sm:left-66 md:left-70 sm:pt-27 ">
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
          <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">Price</p>
        </div>
        {/* fourth child  */}
        <div className="border border-black/20 col-span-1">
          <p className="font-grotesk-500 text-base md:text-[19.02px] text-center">Action</p>
        </div>

        {/* grid rows  */}
        {adminProductList.map((product) => {
          return (
            <>
              <div key={product.productId} className="col-span-2 flex flex-col items-center gap-1 border border-black/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  height={80}
                  width={80}
                />
                <span className="text-[14px] font-semibold">{product.name}</span>
              </div>

              <div className="col-span-1 flex items-center justify-center border border-black/20">
                  <p className="text-[14px]">{product.category}</p>
              </div>
              <div className="col-span-1 border flex items-center justify-center border-black/20">
                  <p className="text-[14px]">₹{product.price}</p>
              </div>
              <div className="col-span-1 border flex flex-col items-center justify-center gap-2 border-black/20">
                  <button className="text-[14px] text-white bg-primary py-[3px] w-[60px] cursor-pointer">Update</button>
                  <button className="text-[14px] border w-[60px] py-[3px] cursor-pointer">Delete</button>
              </div>
            </>
          );
        })}
      </main>
    </section>
  );
};

export default Page;
