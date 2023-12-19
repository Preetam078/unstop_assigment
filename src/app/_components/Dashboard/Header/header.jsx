import Hamburger from "./components/Hamburger/hamburger"
import SwitchTabs from "./components/SwitchTabs/switchTabs"
import styles from "./header.module.css"
import data from "@/app/_data/data"

export default function Header() {
    return (
        <div className={styles.header_container}>
            <Hamburger/>
            <span class={styles.heading}>Assessment</span>
            <div dangerouslySetInnerHTML={{ __html: data.heading_seperator}} />
            <SwitchTabs/>
        </div>
    )
}