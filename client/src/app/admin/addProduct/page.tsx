'use client'
import { useAdminContext } from "@/app/context/AdminContext";
import Bars from "@/app/components/Bars";

const Page = () => {
  const { isSidebarOpen, setisSidebarOpen } = useAdminContext();
  return (
    <div className="pt-17 h-screen bg-purple-300">
      <button><Bars /></button>
      <h3>Add Products</h3>
    </div>
  );
};

export default Page;
