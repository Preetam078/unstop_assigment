import styles from "./leftbarTab.module.css";

export default function LeftbarTab({ tab }) {
  return (
    <div className={`${styles.tab_container} ${tab.option === "Assessment" ? styles.active_tab : ""}`}>
      <div dangerouslySetInnerHTML={{ __html: tab.iconSvg }} />
      <span className={styles.tab_name}>{tab.option}</span>
    </div>
  );
}
