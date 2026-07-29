"use client";

import { useRouter, usePathname } from "next/navigation";
import "../app/globals.css";
import { FaAngleDown } from "react-icons/fa";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="navbar">
      <div>
        <h2>PARYATAKA</h2>
      </div>

      <div className="tagss">
        <button
          onClick={() => router.push("/")}
          className={pathname === "/" ? "active" : ""}
        >
          Home
        </button>
        <button onClick={()=>router.push("/destinations")
        }
        className={pathname === "/destinations" ? "active" : ""} style={{display: "flex", alignItems: 'center'}}>Destinations <FaAngleDown /></button>

        <button
          onClick={() => router.push("/blogs")}
          className={pathname === "/Gallery" ? "active" : ""}
        >
          blogs
        </button>


        <button
          onClick={() => router.push("/contact")}
          className={pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </button>

        <button
          onClick={() => router.push("/services")}
          className={pathname === "/services" ? "active" : ""}
        >
          About US
        </button>
        <button>Login</button>
      </div>
    </div>
  );
}