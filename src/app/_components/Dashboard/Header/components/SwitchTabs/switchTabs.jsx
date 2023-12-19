import data from "@/app/_data/data";
import Tab from "./Tab/tab";
import styles from "./switchTabs.module.css"

export default function SwitchTab() {
  return (
    <div className={styles.switchtabs_container}>
      {data.tabs.map((item) => (
        <Tab key={item} value={item}/>
      ))}
    </div>
  );
}
