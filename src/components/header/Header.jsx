import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import "./style.css";

import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const locaton = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locaton]);


  const handleHamburgerSearch = () => {
    if (!showSearch) {
      setShowSearch(true);
      setMobileMenu(false);
    }
  };

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setShowSearch(false);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.key == "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };

  const navgationHandler = (type) => {
    navigate(`/explore/${type}`);
    setMobileMenu(false);
  };

  const toggleNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
    return () => {
      window.removeEventListener("scroll", toggleNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      id="header"
      className={`header ${
        mobileMenu ? "mobileView" : ""
      }  ${show} fixed w-full h-[60px] flex items-center z-[2] transition-all`}
    >
      <div className="max-container flex justify-between items-center">
        <div
          className="logo cursor-pointer h-[45px]"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" />
        </div>

        <ul
          className={`${
            mobileMenu ? "menuItems" : ""
          } text-white gap-7 items-center max-md:hidden flex`}
        >
          <li
            className={`${
              mobileMenu ? "menuItem" : ""
            }  hover:text-pink cursor-pointer`}
            onClick={() => navgationHandler("movie")}
          >
            Movies
          </li>
          <li
            className={`${
              mobileMenu ? "menuItem" : ""
            }  hover:text-pink cursor-pointer`}
            onClick={() => navgationHandler("tv")}
          >
            TV Shows
          </li>
          <li
            className={`${
              mobileMenu ? "menuItem" : ""
            }  hover:text-pink cursor-pointer`}
            onClick={() => handleHamburgerSearch()}
          >
            <HiOutlineSearch />
          </li>
        </ul>

        <div className="mobileMenuItems text-white gap-5 hidden max-md:flex">
          <HiOutlineSearch
            onClick={() => {
              handleHamburgerSearch();
            }}
          />

          <div onClick={() => openMobileMenu()}>
            {mobileMenu ? <VscChromeClose /> : <SlMenu />}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="searchBar w-full h-[60px] bg-white absolute top-[60px] ">
          <div className="max-container">
            <div className="searchInput flex items-center h-[40px] mt-[10px] w-full">
              <input
                type="text"
                placeholder="Search for a movie of tv show..."
                className="outline-none border-0 w-full h-[50px] bg-white px-4 text-sm md:h-[60px] md:text-xl md:px-8"
                onKeyUp={(e) => handleSearch(e)}
              ></input>
              <div
                className="cursor-pointer ml-[10px] text-xl flex-shrink-0"
                onClick={() => setShowSearch(false)}
              >
                <VscChromeClose />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
