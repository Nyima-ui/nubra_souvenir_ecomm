import { useContext, createContext, useState, ReactNode } from "react";

type AdminContextProviderType = {
  children: ReactNode;
};

type AdminContextsType = {
  isSidebarOpen: boolean;
  setisSidebarOpen: (value: boolean) => void;
  isModalOpen: boolean;
  setisModalOpen: (value: boolean) => void;
};

const AdminContexts = createContext<AdminContextsType | undefined>(undefined);

const AdminContext = ({ children }: AdminContextProviderType) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isModalOpen, setisModalOpen] = useState(true);

  return (
    <AdminContexts.Provider
      value={{ isSidebarOpen, setisSidebarOpen, isModalOpen, setisModalOpen }}
    >
      {children}
    </AdminContexts.Provider>
  );
};

export const useAdminContext = () => {
  const context = useContext(AdminContexts);
  if (!context)
    throw new Error("useAdminSidebar must be used inside AdminSidebarProvider");
  return context;
};

export default AdminContext;
