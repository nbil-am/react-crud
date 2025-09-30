import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-200 w-auto fixed top-3 right-4 left-4 p-2 flex items-center justify-around rounded-lg">
      <h1 className="text-2xl font-extrabold font-serif">
        <Link to="/">Artike</Link>
      </h1>
      <nav className="flex gap-10">
        <ul className="flex gap-4">
          <li className="p-2 rounded-lg transition font-sans cursor-pointer hover:bg-gray-100">
            <Link to="#">fasdfadsf</Link>
          </li>
          <li className="p-2 rounded-lg transition font-sans cursor-pointer hover:bg-gray-100">
            <Link to="#">Test</Link>
          </li>
          <li className="p-2 rounded-lg transition font-sans cursor-pointer hover:bg-gray-100">
            <Link to="#">Test</Link>
          </li>
        </ul>
        <ul className="flex gap-2 font-semibold font-sans">
          <li className="py-2 px-6 rounded-3xl  transition duration-200 cursor-pointer hover:bg-gray-500 hover:text-gray-100">
            <Link to="/login" className="p-2">Log In</Link>
          </li>
          <li className="py-2 px-6 rounded-3xl transition duration-200 bg-green-500 text-gray-100 cursor-pointer hover:bg-gray-100 hover:text-green-500">
            <Link to="/signup" className="p-2">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
