"use client";
import { useAdminContext } from "@/app/context/AdminContext";
import Bars from "@/app/components/Bars";
import Image from "next/image";
import {  useState } from "react";
import toast from "react-hot-toast";



const Page = () => {
  const { setisSidebarOpen } = useAdminContext();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setselectedFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setselectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload an image of prouduct");
      return;
    }
    const formData = new FormData(e.currentTarget);

    for(const [key, value] of formData.entries()){
      console.log(key, value); 
    }
    try {
      const res = await fetch("http://localhost:5000/api/admin/addProduct", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        //TO DO: replace the alert with react hot toast
        alert("Product added successfully!");
        setPreviewImage(null);
        setselectedFile(null);
      } else {
        alert("Error adding product");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Something went wrong");
    }
  };

  return (
    <section className="pt-17 h-screen bg-neutral-bg px-7.5 relative sm:left-66 md:left-70 sm:pt-27 ">
      <div className="container">
        <button
          className="sm:hidden cursor-pointer mt-7.5"
          onClick={() => setisSidebarOpen(true)}
        >
          <Bars />
        </button>
        <h3 className="text-[19.02px] mt-7.5">Add Product</h3>
        <form
          className="flex flex-col mt-5 max-w-[500px]"
          onSubmit={handleSubmit}
        >
          {/* upload image  */}
          <label>Product Image</label>
          <label
            htmlFor="product_image"
            className="size-[100px] flex flex-col items-center justify-center mt-2.5 bg-black/20 overflow-hidden"
          >
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Uploaded preview"
                height={100}
                width={100}
                className="object-cover"
              />
            ) : (
              <>
                <p className="cursor-pointer">
                  <Image
                    src="/images/upload_image.svg"
                    alt="upload product image"
                    height={28}
                    width={28}
                    className="border"
                  />
                </p>
                <span className="text-[14px] cursor-pointer">Choose Image</span>
              </>
            )}
            <input
              type="file"
              id="product_image"
              className="border mt-2.5 hidden"
              onChange={handleImageChange}
              name="product_image"
            />
          </label>

          {/* product name  */}

          <label htmlFor="product_name" className="mt-7.5">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            className="outline-none border-b border-black/70 mt-1 max-w-[350px]"
            required
          />
          {/* product price  */}
          <label htmlFor="product_price" className="mt-7.5">
            Product Price
          </label>
          <input
            type="text"
            id="product_price"
            className="outline-none border-b border-black/70 mt-1 max-w-[350px]"
            required
            name="product_price"
          />

          <label htmlFor="category" className="mt-7.5">
            Category
          </label>
          <select
            id="cateogory"
            name="category"
            className="border mt-3 outline-none max-w-[100px]"
            required
          >
            <option value="collection">Collection</option>
            <option value="favorite">Favorite</option>
          </select>
          {/* from submit button  */}
          <button
            className="bg-primary text-white max-w-[126px] border-none py-2.5 mt-7.5 cursor-pointer"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
