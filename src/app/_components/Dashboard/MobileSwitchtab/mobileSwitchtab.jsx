import styles from "./mobileSwitchtab.module.css"

export default function MobileSwitchTab() {
    return (
        <div className={styles.container}>
            <span className={`${styles.tab} ${styles.activeTab}`}>My Assessments</span>
            <span className={styles.tab}>Unstop Assessments</span>
        </div>
    )
}