import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <Loader2 className="animate-spin text-white" size={50} />
    </div>
  );
};

export default Loader;
