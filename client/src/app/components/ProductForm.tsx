import Image from "next/image";
import Loader from "./Loader";
import { useProductsContext } from "../context/ProductContext";
import React, { useEffect } from "react";

type HandleFunc =
  | ((e: React.FormEvent<HTMLFormElement>) => Promise<void>)
  | ((id: string, e: React.FormEvent<HTMLFormElement>) => Promise<void>);

type FormParamTypes = {
  handleFunc: HandleFunc;
  formRef: React.RefObject<HTMLFormElement | null>;
  previewImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  buttonText: string;
  setudpatedImage?: React.Dispatch<React.SetStateAction<string | null>>;
};

const ProductForm = ({
  handleFunc,
  formRef,
  previewImage,
  handleImageChange,
  loading,
  buttonText,
  setudpatedImage,
}: FormParamTypes) => {
  const { selectedProduct } = useProductsContext();

  useEffect(() => {
    if (selectedProduct && setudpatedImage) {
      setudpatedImage(selectedProduct.image);
    }
  }, [selectedProduct, setudpatedImage]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedProduct?.id) {
      (
        handleFunc as (
          id: string,
          e: React.FormEvent<HTMLFormElement>
        ) => Promise<void>
      )(selectedProduct.id, e);
    } else {
      (handleFunc as (e: React.FormEvent<HTMLFormElement>) => Promise<void>)(e);
    }
  };

  return (
    <form
      className="flex flex-col mt-5 max-w-[500px]"
      onSubmit={handleSubmit}
      ref={formRef}
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
        value={selectedProduct?.name ? selectedProduct.name : ""}
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
        value={selectedProduct?.price ? selectedProduct.price : ""}
      />

      {/* loader  */}
      {loading && <Loader />}

      <label htmlFor="category" className="mt-7.5">
        Category
      </label>
      <select
        id="cateogory"
        name="category"
        className="border mt-3 outline-none max-w-[100px]"
        required
        value={selectedProduct?.category ?? ""}
      >
        <option value="collection">Collection</option>
        <option value="favorite">Favorite</option>
      </select>
      {/* from submit button  */}
      <button
        className="bg-primary text-white max-w-[126px] border-none py-2.5 mt-7.5 cursor-pointer"
        type="submit"
        disabled={loading}
      >
        {buttonText}
      </button>
    </form>
  );
};

export default ProductForm;
