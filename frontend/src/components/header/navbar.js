import style from "../../styles/Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";
import Navbararr from "./navbararr";
import { Link } from "react-router-dom";

export default function Navbar() {
  console.log(Navbararr);
  const [open, setOpen] = useState(false);
  //   dropdown menu
  const hamburgerIcon = (
    <GiHamburgerMenu
      className={style.hamburgerMenu}
      size="50px"
      color="#D9D9D9"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <AiOutlineCloseCircle
      className={style.closeMenu}
      size="50px"
      color="#D9D9D9"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <div className={style.headerNavbar}>
      <div className={style.navbar}>
        <div className={style.dropdown}>
          {open ? closeIcon : hamburgerIcon}

          <div
            className={
              open
                ? `${style.dropdowncontent} ${style.dropdownactive}`
                : `${style.dropdowncontent}`
            }
          >
            {Navbararr.map((item) => (
              <Link to="#">
                <div className={style.navitems}>
                  <div>
                    <img src={item.icon} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <li>Department</li>
        <li>Services</li>
        <li>Promotion</li>
        <li>Hot Deals</li>
        <li>New Arrivals</li>
      </div>

      <HiShoppingCart className={style.carticon} />
    </div>
  );
}
