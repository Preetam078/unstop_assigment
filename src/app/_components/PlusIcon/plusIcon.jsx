import styles from "./plusIcon.module.css"
import data from "@/app/_data/data"
export default function PlusIcon() {
    return (
        <div className={styles.plus_icon_container}>
             <div className={styles.plus_icon} dangerouslySetInnerHTML={{ __html: data.plusIconSvg }} onClick={()=>{setOpenMobileMenu(false)}} />
        </div>
    )
}