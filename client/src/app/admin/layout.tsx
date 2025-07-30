"use client";
import { ReactNode } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Header from "../components/Header";
import DesktopHeader from "../components/DesktopHeader";
import AdminContext from "../context/AdminContext";

type AdminLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: AdminLayoutProps) => {
  return (
    <AdminContext>
      <div className="bg-neutral-bg">
        <Header />
        <DesktopHeader />
        <AdminSidebar />
        {children}
      </div>
    </AdminContext>
  );
};

export default Layout;
