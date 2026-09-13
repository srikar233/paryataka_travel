"use client";

import { useRouter, usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

import styles from "./Navbar.module.css";
import LoginSidebar from "../common/LoginSidebar";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
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

        <button
          onClick={() => router.push("/destinations")}
          className={pathname === "/destinations" ? styles.active : ""}
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          Destinations
          <FaAngleDown />
        </button>

        <button
          onClick={() => router.push("/blogs")}
          className={pathname === "/blogs" ? styles.active : ""}
        >
          Blogs
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
          About Us
        </button>

        {/* Login */}
        <button onClick={() => setShowLogin(true)}>
          Login
        </button>

      </div>
       
    </div>
    {/* Login Sidebar */}
        {showLogin && (
          <LoginSidebar
            onClose={() => setShowLogin(false)}
          />
        )}
    </>
  );
}