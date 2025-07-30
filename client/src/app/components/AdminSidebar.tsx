"use client";
import React from "react";
import Cross from "./Cross";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAdminContext } from "../context/AdminContext";



const AdminSidebar = () => {
  const pathName = usePathname(); 
  const {isSidebarOpen, setisSidebarOpen} = useAdminContext(); 
  return (
    <section className="h-screen fixed top-17 z-10 bg-neutral-bg pt-5 w-[283px] border-r border-black/30"
    style={{left : isSidebarOpen ? "0px" : "-283px"}}>
      <button className="block ml-7.5" onClick={() => setisSidebarOpen(false)}>
        <Cross />
      </button>
      <Link
        href="/admin/addProduct"
        className={`flex text-base md:text-[19.02px] items-center  pl-7.5 mt-7.5 py-2 gap-3 ${
          pathName === "/admin/addProduct"
            ? "bg-primary/20  border-primary border-r-5"
            : ""
        }`}
      >
        <Image src="/images/add.svg" alt="Add Product" height={28} width={28} />
        <p>Add Products</p>
      </Link>
      <Link
        href="/admin/productList"
        className={`flex text-base md:text-[19.02px] items-center  pl-7.5 mt-2.5 py-2 gap-3 ${
          pathName === "/admin/productList"
            ? "bg-primary/20  border-primary border-r-5"
            : ""
        }`}
      >
        <Image
          src="/images/list.svg"
          alt="Add Product"
          height={28}
          width={28}
        />
        Product List
      </Link>
    </section>
  );
};

export default AdminSidebar;
