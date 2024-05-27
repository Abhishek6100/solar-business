import React from "react";
import styles from "./exploreBlog.module.css";
import Image from "next/image";
import solareExplore from "../../../public/img/solareExplore.PNG";
import solarEnergy from "../../../public/img/solarEnergy.PNG";
import cataylze from "../../../public/img/cataylze.PNG";
import { IoArrowForward } from "react-icons/io5";


const BlogsData = [
  {
    id: 1,
    image: solareExplore,
    date: "November 8, 2023",
    heading:
      "What Does the 500 GW Capex opportunity in Solar Energy Mean for EPC Companies?",
    btntext: "Read More",
  },
  {
    id: 2,
    image: solarEnergy,
    date: "November 8, 2023",
    heading:
      "The Road to 500 GW Solor Energy in India and what EPC Companies Need?",
    btntext: "Read More",
  },
  {
    id: 3,
    image: cataylze,
    date: "November 8, 2023",
    heading:
      "EPC Companies Can Catalyze India's WEF Davos 2022 Golas. Here'sHow",
    btntext: "Read More",
  },
];

const ExploreBlog = () => {
  return (
    <div className={styles.ExploreBlog_container}>
      <div className="container">
        <div className={styles.ExploreBlog_heading}>
          Explore Blogs
        </div>
        <div className={styles.ExploreBlog_trends}>
          Explore insights on trends, business pain points, opportunities
        </div>
        <p className={styles.ExploreBlog_desc}>
          Moglix Business Solutions for strategic souring of Solor PV cells and
          modules and custom fabrication of <br /> module mounting structures
          for Solar energy projects.
        </p>

        <div className={styles.ExploreBlog_wrapper}>
          {BlogsData?.map((data) => {
            return (
              <div className={styles.ExploreBlog_box} key={data?.id}>
                <div className={styles.ExploreBlog_image}>
                  <Image
                    src={data?.image}
                    alt="Solar image"
                    width={330}
                    height={320}
                    layout="responsive"
                  />
                </div>
                <div className={styles.ExploreBlog_date}>{data?.date}</div>

                <div className={styles.ExploreBlog_content}>
                  {data?.heading}
                </div>
                <div className={styles.ExploreBlog_readmore}>
                  <div className={styles.ExploreBlog_readmore_content}>{data?.btntext} </div>
                 <div><IoArrowForward style={{color:"#0000ff"}}/></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreBlog;
