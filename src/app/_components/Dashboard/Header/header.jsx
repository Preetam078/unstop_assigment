"use client";

//imported all the hooks and components to be used
import { useState } from "react";
import MobileLeftBar from "../../MobileLeftbar/mobileLeftbar";
import Hamburger from "./components/Hamburger/hamburger"
import SwitchTabs from "./components/SwitchTabs/switchTabs"
import styles from "./header.module.css"
import data from "@/app/_data/data"
import { useMediaQuery } from "../../customHook/useMediaQuery";


export default function Header() {

  // used custom hooks to get the mobile size screen 
  const isMobile = useMediaQuery("(max-width: 650px)");

  //state to handle the hamburger menu on mobile
  const [openMobileMenu,setOpenMobileMenu]=useState(false)
    return (
        <div className={styles.header_container}>
            <Hamburger setOpenMobileMenu={setOpenMobileMenu}/>
            {
                // conditional rendering
                openMobileMenu && <div className={styles.mobile_left_main_container}> <MobileLeftBar setOpenMobileMenu={setOpenMobileMenu}/></div>
            }
            <span class={styles.heading}>Assessment</span>
            {
                // conditional rendering
                !isMobile &&   <div dangerouslySetInnerHTML={{ __html: data.heading_seperator}} />
            }
            <div className={styles.swtichTabDesktop}>
            <SwitchTabs/>
            </div>
        </div>
    )
}