import React from "react";
import styles from "./MobileMenuDrawer.module.css";
import { Drawer } from "@mui/material";
import Image from "next/image";
import arrowmenu from "../../../../public/img/arrowmenu.svg";

const MobileMenuDrawer = () => {
  const menuItems = [
    {
      name: "Industries",
      img: arrowmenu,
    },
    {
      name: "Solutions",
      img: arrowmenu,
    },
    {
      name: "Sustainability",
    },

    {
      name: "Our Catalog",
      img: arrowmenu,
    },
    {
      name: "About Us",
    },
    {
      name: "Newsroom",
      img: arrowmenu,
    },
    {
      name: "Resources",
      img: arrowmenu,
    },
  ];

  return (
    <div className={styles.Drawer_container}>
      {menuItems?.map((item) => {
        return (
          <>
            <div className={styles.Drawer_wrapper}>
              <div className={styles.Drawer_heading}>{item?.name}</div>
              {item?.img && (
                <div className={styles.Drawer_image}>
                  <Image src={item?.img} width={24} height={24} alt="arrow" />
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

const Mobile_menu_Drawer = ({ openMenuDrawer, setOpenMenuDrawer }) => {
  return (
    <Drawer
      open={openMenuDrawer}
      onClose={() => setOpenMenuDrawer(false)}
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          background: "#FFFFFF",
          zIndex: 1250,
          width: 240,
        },
      }}
    >
      <MobileMenuDrawer setOpenMenuDrawer={setOpenMenuDrawer} />
    </Drawer>
  );
};

export default Mobile_menu_Drawer;
