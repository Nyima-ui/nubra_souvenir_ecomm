"use client";
import { useAdminContext } from "@/app/context/AdminContext";
import ProductForm from "@/app/components/ProductForm";
import Bars from "@/app/components/Bars";
import { useState, useRef, useEffect } from "react";

const Page = () => {
  const updateFormRef = useRef<HTMLFormElement | null>(null);
  const [udpatedImage, setudpatedImage] = useState<string | null>(null);
  const [selectedFile, setselectedFile] = useState<File | null>(null);
  const [loading, setloading] = useState(false);

  const { setisSidebarOpen } = useAdminContext();

  const handleUpdateProduct = async (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {};

  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setudpatedImage(imageURL);
      setselectedFile(file);
    }
  };

  useEffect(() => {
    console.log(udpatedImage);
    console.log(selectedFile);
  }, [udpatedImage, selectedFile]);

  const buttonText = loading ? "Updating..." : "Update Product";
  return (
    <section className="pt-17 h-screen bg-neutral-bg px-7.5 relative sm:left-66 md:left-70 sm:pt-27 ">
      <div className="container">
        <button
          className="sm:hidden cursor-pointer mt-7.5"
          onClick={() => setisSidebarOpen(true)}
        >
          <Bars />
        </button>
        <h3 className="text-[19.02px] mt-7.5">Update Product</h3>
        <ProductForm
          handleFunc={handleUpdateImage}
          formRef={updateFormRef}
          previewImage={udpatedImage}
          handleImageChange={handleUpdateImage}
          loading={loading}
          buttonText={buttonText}
        />
      </div>
    </section>
  );
};

export default Page;
