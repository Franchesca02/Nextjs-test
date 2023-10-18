import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white text-black rounded-md p-4 w-[97%] mx-4">
      <nav className="ml-auto">
        <div className="flex justify-between px-4">
          <div>
            <div className="relative">
              <input
                type="search"
                placeholder="Search anything..."
                className="border-2 border-gray-100 outline-none py-3 rounded-xl px-10 text-base text-gray-200"
              />
              <span className="absolute top-4 left-3">
                <FaSearch size={17} color="#888" />
              </span>
            </div>
          </div>
          <div className="flex justify-between px-2 mt-4">
            <p className="font-medium text-base">Saturday, May 3, 2023</p>
            <span className="px-2">
              <FaBell size={18} color="#888" />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
