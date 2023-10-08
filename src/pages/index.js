import React, { useEffect, useRef } from "react";
import styles from "../styles/page.module.css";
import ImageComponent from "@/components/ImageComponent";
import PageHeadImage from "../../public/images/image_11.jpeg";
import imagUrl1 from "../../public/images/image_1.jpeg";
import imagUrl2 from "../../public/images/image_2.jpeg";
import imagUrl3 from "../../public/images/image_3.jpeg";
import imagUrl4 from "../../public/images/image_4.jpeg";
import imagUrl5 from "../../public/images/image_5.jpeg";
import imagUrl6 from "../../public/images/image_6.jpeg";
import imagUrl7 from "../../public/images/image_7.jpeg";
import imagUrl8 from "../../public/images/image_8.jpeg";
import imagUrl9 from "../../public/images/image_9.jpeg";

import Link from "next/link";
const Home = () => {
  // const gridItemRefs = useRef([]);
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.3, // Adjust the threshold as needed (0.3 means 30% of the element must be in view)
  //   };

  //   const handleScrollAnimation = (entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("in-view");
  //       } else {
  //         entry.target.classList.remove("in-view");
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleScrollAnimation, options);

  //   gridItemRefs.current.forEach((itemRef) => {
  //     observer?.observe(itemRef);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <main>
      <div className={styles.page_container}>
        <div className={styles.page_heading_container}>
          <div className={styles.page_heading_wrapper}>
            <h1 className={styles.page_heading}>Tank</h1>
            <p className={styles.page_description}>
              Tank is a powerful and creative Portfolio Showcase HTML Website
              Template. Designed and handcrafted with care to highlight your
              creativity and promote your services in a unique way.
            </p>
            <div className={styles.button_wrapper}>
              <Link href="/" className={styles.download_button}>
                Download here!
              </Link>
            </div>
          </div>
          <div className={styles.page_heading_image}>
            <div className={styles.page_heading_image_inner}>
              <ImageComponent ImageUrl={PageHeadImage} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.images_container}>
        <div className={styles.images_container_heading}>
          <h3 className={styles.images_container_heading_1}>Explore Demos </h3>
          <h2 className={styles.images_container_heading_2}>
            {" "}
            Stylish & Flexible Layouts
          </h2>

          <div className={styles.images_grid}>
            <div className={styles.images_row_item}>
              <ImageComponent
                ImageUrl={imagUrl1}
                className={styles.grid_image}
              />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Imagine wild! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl2} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Digital world! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl3} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Bring tranform! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl4} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  New world! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl5} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Exprlore nature! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl6} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Beyond Imagination! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl7} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Entertrainer! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl8} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  Be carefull! &nbsp;
                </span>
              </Link>
            </div>
            <div className={styles.images_row_item}>
              <ImageComponent ImageUrl={imagUrl9} />
              <Link href="" className={styles.image_title}>
                <span className={styles.image_title_underline}>
                  cool experience! &nbsp;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
