import Tab from "./Tabs/tabs"
import styles from "./mobileLeftBar.module.css"
import data from "@/app/_data/data"

export default function MobileLeftBar({setOpenMobileMenu}) {
    return (
        <div className={styles.mobileleftbar_container}>
            <div className={styles.menu_heading}>
                <span>Menu</span>
                <div dangerouslySetInnerHTML={{ __html: data.cutIcon }} onClick={()=>{setOpenMobileMenu(false)}} />
            </div>
            <div className={styles.tabs_container}>
                {
                    data.leftbar_tabs.map((item, index) => (
                        <Tab key={index} data={item}/>
                    ))
                }
            </div>
            <div className={styles.admin_tab}>
                <div class={styles.admin_container}>
                    <div className={styles.admin_subcontainer}>
                        <div dangerouslySetInnerHTML={{ __html: data.adminTab.AdmintabIcon }} />
                        <span class={styles.admin_option}>{data.adminTab.message}</span>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: data.adminTab.adminSign }} />
                </div>
            </div>
        </div>
    )
}