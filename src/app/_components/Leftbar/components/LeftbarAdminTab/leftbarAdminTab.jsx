import data from "@/app/_data/data"
import styles from "./leftbarAdminTab.module.css"
export default function LeftbarAdminTab() {
    return (
        <div className={styles.adminTab_container}>
                <div class={styles.admin_icon} dangerouslySetInnerHTML={{ __html: data.adminTab.adminSign }} />
                <div class={styles.tab_icon} dangerouslySetInnerHTML={{ __html: data.adminTab.AdmintabIcon }} />
                <span className={styles.tab_option}>{data.adminTab.message}</span>
        </div>
    )
}