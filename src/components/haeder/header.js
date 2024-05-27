import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Logo2 from "../../../public/img/Logo2.svg";
import MobileHeader from "../mobileHeader/mobileHeader";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const router = useRouter();

  const HeadernavBar = [
    "Industries",
    "Solutions",
    "Sustainability",
    router.pathname === "/" ? "Our Catalog" : "catalog",
  ];

  useEffect(() => {
    if (router.asPath === "/") {
      setSelectedTab("Our Catalog");
    } else {
      setSelectedTab("catalog");
    }
  }, [router.asPath]);

  return (
    <div className="container_desktop">
      <div className={styles.header_container}>
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
        <div className={styles.Header_leftside}>
          {HeadernavBar?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.Header_content} ${
                  selectedTab === item ? styles.Header_content_active : ""
                }`}
                onClick={() => setSelectedTab(item)}
              >
                {item}
                {item !== "Sustainability" && (
                  <FaChevronDown style={{ marginTop: "2px" }} />
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.Header_rightside}>
          <div className={styles.Header_content}>About Us</div>
          <div className={styles.Header_content}>
            Newsroom <FaChevronDown style={{ marginTop: "2px" }} />
          </div>
          <div className={styles.Header_content}>
            Resources <FaChevronDown style={{ marginTop: "2px" }} />
          </div>
          <div className={styles.Header_content}>
            <FaSearch />
          </div>
          <div className={styles.Header_border}></div>
          <button className={styles.header_btn}>Contact Us</button>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
