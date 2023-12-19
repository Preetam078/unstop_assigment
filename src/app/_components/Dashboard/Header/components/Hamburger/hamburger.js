import data from "@/app/_data/data";
import styles from "./hamburger.module.css"

export default function Hamburger({setOpenMobileMenu}) {
    return (
        <div className={styles.hamburger_container} onClick={()=>{setOpenMobileMenu(true)}}>
            <div dangerouslySetInnerHTML={{ __html: data.hamburger}} />
        </div>
    )
}