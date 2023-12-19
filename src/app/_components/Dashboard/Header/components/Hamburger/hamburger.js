import data from "@/app/_data/data";
import styles from "./hamburger.module.css"

export default function Hamburger() {
    return (
        <div className={styles.hamburger_container}>
            <div dangerouslySetInnerHTML={{ __html: data.hamburger}} />
        </div>
    )
}