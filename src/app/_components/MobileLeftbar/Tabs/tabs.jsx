import styles from "./tabs.module.css"

//seperate modular component for the each tab
export default function Tab({data}) {
    return(
        <div className={`${styles.tab_container} ${data.option == "Assessment" ?styles.active_tab_container:""}`}>
            <div className={styles.icon_container} dangerouslySetInnerHTML={{ __html: data.iconSvg }} />
            <span className={`${styles.option_text} ${data.option == "Assessment" ?styles.active_option_text:""}`}>{data.option}</span>
        </div>
    )
}