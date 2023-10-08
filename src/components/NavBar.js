import React from "react";
import styles from "../styles/navbar.module.css";
import Image from "next/image";
import avatar from "../../public/images/avatar.jpg"
const NavBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image />
      </div>
        <div className={styles.avatar}>
          <Image src={avatar}
           alt="Avatar"
           style={{ width: "60px", height: "60px", borderRadius: "50px"}}
           sizes="(max-width: 768px) 80vw, (max-width: 1220px) 100vw, 100vw"
          />
        </div>
    </header>
  );
};

export default NavBar;
