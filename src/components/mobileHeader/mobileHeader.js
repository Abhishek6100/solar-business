import React, { useState } from "react";
import styles from "./mobileHeader.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo2 from "../../../public/img/Logo2.svg";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import MenuDrawer from "./mobilemenudrawer/mobilemenudrawer";
import Link from "next/link";

const MobileHeader = () => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(undefined);
  const menuClickHandler = (e) => {
    setOpenMenuDrawer(true);
  };
  return (
    <div className={styles.MobileHeader_container}>
      <div className={styles.MobileHeader_left}>
        <GiHamburgerMenu
          style={{ fontSize: "24px", marginTop: "2px" }}
          onClick={menuClickHandler}
        />
        <div className={styles.Header_image}>
        <Link href="/">
          <Image
            src={Logo2}
            width={150}
            height={34}
            alt="Logo"
            layout="responsive"
          />
          </Link>
        </div>
      </div>

      <div className={styles.MobileHeader_search}>
        <FaSearch style={{ fontSize: "24px", marginTop: "2px" }} />
        <button className={styles.header_btn}>Contact Us</button>
      </div>
      <MenuDrawer
        openMenuDrawer={openMenuDrawer}
        setOpenMenuDrawer={setOpenMenuDrawer}
      />
    </div>
  );
};

export default MobileHeader;
