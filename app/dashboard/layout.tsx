import LayoutProps from "@/app/interfaces/layout.interface";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-[100%] w-[100%]">
      <Header />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 bg-[#f5f7fa]">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;