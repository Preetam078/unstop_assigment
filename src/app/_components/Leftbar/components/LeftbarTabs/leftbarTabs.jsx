import LeftbarTab from "./LeftbarTab/leftbarTab"
import styles from "./leftbarTabs.module.css"
export default function LeftbarTabs({data}){
  return (
    <div className={styles.tabs_container}>
        {
                data.leftbar_tabs.map((tab, index) => (
                    <LeftbarTab key={index} tab={tab}/>
                ))
            }
    </div>
  )
}
