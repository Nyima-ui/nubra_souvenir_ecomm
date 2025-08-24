"use client";
import { useAdminContext } from "@/app/context/AdminContext";
import { useProductsContext } from "@/app/context/ProductContext";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/app/components/ProductForm";
import Bars from "@/app/components/Bars";
import toast from "react-hot-toast";

const Page = () => {
  const updateFormRef = useRef<HTMLFormElement | null>(null);
  const [udpatedImage, setudpatedImage] = useState<string | null>(null);
  const [selectedFile, setselectedFile] = useState<File | null>(null);
  const [loading, setloading] = useState(false);

  const { setisSidebarOpen } = useAdminContext();
  const { selectedProduct, setproducts } = useProductsContext();

  const [formValues, setformValues] = useState({
    product_name: selectedProduct?.name ?? "",
    product_price: selectedProduct?.price.toString() ?? "",
    category: selectedProduct?.category ?? "collection",
  });

  const router = useRouter();
  //handle update of product values
  const handleUpdateOfFields = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setformValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (
    e: React.FormEvent<HTMLFormElement>,
    id?: string
  ) => {
    e.preventDefault();
    if (!id) return;

    setloading(true);

    const formData = new FormData();
    formData.append("product_name", formValues.product_name);
    formData.append("product_price", formValues.product_price);
    formData.append("category", formValues.category);

    if (selectedFile) {
      formData.append("product_image", selectedFile);
    } else if (selectedProduct?.image) {
      formData.append("product_image", selectedProduct.image);
    }
  
    try {
      const response = await fetch(
        `https://nubra-souvenir-ecomm-13.onrender.com/api/updateProduct/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        toast.error("Error updating the product");
        return;
      }
      const data = await response.json();
      toast.success("Product successfully updated!");
      setproducts((prev) =>
        prev.map((product) =>
          product.id === id ? data.updatedProduct : product
        )
      );
      router.push("/admin/productList");
      console.log(data?.updatedProduct);
    } catch (error) {
      console.error("Error updating a product", error);
      toast.error("Error updating product");
    } finally {
      setloading(false);
    }
  };

  const handleUpdateImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setudpatedImage(imageURL);
      setselectedFile(file);
    }
  };

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
          formValues={formValues}
          onChange={handleUpdateOfFields}
          handleFunc={handleUpdateProduct}
          formRef={updateFormRef}
          previewImage={udpatedImage}
          handleImageChange={handleUpdateImage}
          loading={loading}
          buttonText={buttonText}
          setudpatedImage={setudpatedImage}
        />
      </div>
    </section>
  );
};

export default Page;
