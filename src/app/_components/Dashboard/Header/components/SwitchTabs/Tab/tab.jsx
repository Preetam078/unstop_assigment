import styles from "./tab.module.css"

export default function Tab({value}) {
    return (
        <div className={`${styles.tab_container} ${value ==="My Assessments"?styles.active_tab_container:""}`}>
            <span className={`${styles.tab_text} ${value ==="My Assessments"?styles.active_tab:""}`}>{value}</span>
        </div>
    )
}