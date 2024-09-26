import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import navbar from "../../assets/images/navbar.png";
import { useGetBrandsQuery } from "../../redux/api/categoreyApi";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className=" flex items-center  gap-[69px] justify-between py-[39px] ">
            <Link to={"/"}>
              <img
                className="w-[130px] h-[50px] object-contain "
                src={navbar}
                alt=""
              />
            </Link>

            <div
              className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
            >
              <div className="flex items-center gap-[40px] navbar navbar__collection">
                <NavLink
                  className={"text-[20px] font-bold text-[#0D2612]  "}
                  to={"/products"}
                >
                  Products
                </NavLink>

                <NavLink  className={"text-[20px] font-bold text-[#0D2612]  "}>
                  Brands
                </NavLink>

                <NavLink   className={"text-[20px] font-bold text-[#0D2612]  "}>
                  What’s new
                </NavLink>

                <NavLink  className={"text-[20px] font-bold text-[#0D2612]  "}>
                  Sales
                </NavLink>
                <NavLink   className={"text-[20px] font-bold text-[#0D2612]  "}>
                  Help
                </NavLink>
                <NavLink  className={"text-[20px] font-bold text-[#0D2612]  "}>
                  About
                </NavLink>
              </div>
            </div>
            <div className="flex gap-5 items-center ">
              <IoSearchOutline   className={"text-[30px] font-bold text-[#0D2612]  "} />
              <AiOutlineUser   className={"text-[30px] font-bold text-[#0D2612]  "} />
              <Link to={"/cartProducts"}>
                <GiShoppingCart   className={"text-[30px] font-bold text-[#0D2612]  "} >

                  </GiShoppingCart>
              </Link>
            </div>
            <div onClick={toggleMenu} className="navbar__menu">
              <RiMenu2Fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
