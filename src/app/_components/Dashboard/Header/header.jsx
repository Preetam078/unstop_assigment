"use client";

import { useState } from "react";
import MobileLeftBar from "../../MobileLeftbar/mobileLeftbar";
import Hamburger from "./components/Hamburger/hamburger"
import SwitchTabs from "./components/SwitchTabs/switchTabs"
import styles from "./header.module.css"
import data from "@/app/_data/data"
import { useMediaQuery } from "../../customHook/useMediaQuery";


export default function Header() {
  const isMobile = useMediaQuery("(max-width: 650px)");
  const [openMobileMenu,setOpenMobileMenu]=useState(false)
    return (
        <div className={styles.header_container}>
            <Hamburger setOpenMobileMenu={setOpenMobileMenu}/>
            {
                openMobileMenu && <div className={styles.mobile_left_main_container}> <MobileLeftBar setOpenMobileMenu={setOpenMobileMenu}/></div>
            }
            <span class={styles.heading}>Assessment</span>
            {
                !isMobile &&   <div dangerouslySetInnerHTML={{ __html: data.heading_seperator}} />
            }
            <div className={styles.swtichTabDesktop}>
            <SwitchTabs/>
            </div>
        </div>
    )
}