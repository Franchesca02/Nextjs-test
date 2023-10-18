// components/Layout.js
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
