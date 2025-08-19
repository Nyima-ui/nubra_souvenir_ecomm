"use client";
import { useAdminContext } from "@/app/context/AdminContext";
import { useProductsContext } from "@/app/context/ProductContext";
import { useState, useRef } from "react";
import Bars from "@/app/components/Bars";
import toast from "react-hot-toast";
import ProductForm from "@/app/components/ProductForm";

const Page = () => {
  const { setisSidebarOpen } = useAdminContext();
  const { fetchProducts } = useProductsContext();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setselectedFile] = useState<File | null>(null);
  const [loading, setloading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  //handling change in image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL);
      setselectedFile(file);
    }
  };

  //handling form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please upload an image of the product.");
      return;
    }

    setloading(true);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const res = await fetch("http://localhost:5000/api/admin/addProduct", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Product added successfully");
        setPreviewImage(null);
        setselectedFile(null);
        formRef.current?.reset();

        await fetchProducts();
      } else {
        toast.error("Error adding product.");
      }
    } catch (error) {
      console.error("Error", error);
      toast.error("Something went wrong.");
    } finally {
      setloading(false);
    }
  };

  const buttonText = loading ? "Adding..." : "Add a Product";
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

        <ProductForm
          handleFunc={handleSubmit}
          formRef={formRef}
          previewImage={previewImage}
          handleImageChange={handleImageChange}
          loading={loading}
          buttonText={buttonText}
        />
      </div>
    </section>
  );
};

export default Page;
