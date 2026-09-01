"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={styles.navbar}>
      <div>
        <h2>PARYATAKA</h2>
      </div>

      <div className={styles.tagss}>
        <button
          onClick={() => router.push("/")}
          className={pathname === "/" ? styles.active : ""}
        >
          Home
        </button>
        <button onClick={()=>router.push("/destinations")
        }
        className={pathname === "/destinations" ? styles.active : ""} style={{display: "flex", alignItems: 'center'}}>Destinations <FaAngleDown /></button>

        <button
          onClick={() => router.push("/blogs")}
          className={pathname === "/Gallery" ? styles.active : ""}
        >
          blogs
        </button>


        <button
          onClick={() => router.push("/contact")}
          className={pathname === "/contact" ? styles.active : ""}
        >
          Contact Us
        </button>

        <button
          onClick={() => router.push("/services")}
          className={pathname === "/services" ? styles.active : ""}
        >
          About US
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}