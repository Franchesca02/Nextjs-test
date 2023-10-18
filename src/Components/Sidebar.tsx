import Image from "next/image";
import Link from "next/link";

import {
  FaHome,
  FaMapMarker,
  FaTicketAlt,
  FaHeart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

// import { User } from "../../public/images/user.webp";

const Sidebar = () => {
  return (
    <aside className="bg-white w-1/4">
      <h1 className="text-center text-2xl font-bold py-4">MimaBooking</h1>
      <div className=" w-32 h-32 mx-auto">
        <img
          src="https://media.istockphoto.com/id/1135940020/photo/all-you-have-to-do-is-impress-your-clients.jpg?s=1024x1024&w=is&k=20&c=isSvp2pe2ZFOaHO2WIOG5q4kSPPBRGr_5ZEn-QMsd-4="
          alt="user icon"
          className="rounded-full w-full h-full object-cover"
        />
        <h3 className="px-5 py-2">Ailia Jan</h3>
      </div>
      <nav className=" mt-16 text-center">
        <ul className="mx-24">
          <li>
            <Link href="/">
              <div className="flex items-center py-2">
                <FaHome className="mr-2 text-gray-400" /> Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="flex items-center py-2">
                <FaMapMarker className="mr-2 text-gray-400" /> Explore city
              </div>
            </Link>
          </li>
          <li>
            <Link href="/ticket">
              <div className="flex items-center py-2">
                <FaTicketAlt className="mr-2 text-gray-400" />
                Ticket
              </div>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <div className="flex items-center py-2">
                <FaHeart className="mr-2 text-gray-400" /> Favorite
              </div>
            </Link>
          </li>
          <li>
            <Link href="/setting">
              <div className="flex items-center py-2">
                <FaCog className="mr-2 text-gray-400" /> Setting
              </div>
            </Link>
          </li>
        </ul>
        <div className="m-24">
          <Link href="/logout">
            <div className="flex items-center py-3">
              <FaSignOutAlt className="mr-2 text-gray-400" /> Logout
            </div>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
