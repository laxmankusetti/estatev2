import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {

  const { currentUser } = useSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className="bg-slate-100 shadow-md">
      <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">
        <h1 className="font-bold text-sm sm:text-2xl text-slate-600">
          Estates
        </h1>
        <form
          className="bg-slate-200 rounded-lg w-32 sm:w-80 flex items-center p-2 justify-between"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none p-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="text-slate-600 flex gap-3 font-semibold">
          <Link to={"/"}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline hover:underline cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
