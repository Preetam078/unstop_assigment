import AssessmentBar from "./AssessmentBar/assessmentBar";
import AssessmentCards from "./AssessmentCards/assessmentcards";
import AssessmentOverview from "./AssessmentOverview/assessmentOverview";
import Header from "./Header/header";
import styles from "./dashboard.module.css";
import SwitchTab from "./Header/components/SwitchTabs/switchTabs";
import { useMediaQuery } from "../customHook/useMediaQuery";
import { useState } from "react";
export default function Dashboard({setOpenForm}) {
    const isMobile = useMediaQuery("(max-width: 650px)");
    const [openAssementOverview,setOpenAssementOverview]=useState(false)
    return (
        <div className={styles.dashboard_container}>
            <Header/>
            <div className={styles.swtichTabMobile}>
            <SwitchTab/>
            </div>
            {/* <div className={styles.dashboard_subheading}>
                <span className={styles.dashboard_subheading_text}>Assessments Overview</span>
            </div> */}
            <div>
                {
                    !isMobile && <AssessmentOverview/>
                }
                {
                    openAssementOverview && isMobile && <AssessmentOverview/>
                }
			
            {/**TODO stats bar */}
            
            <AssessmentBar setOpenAssementOverview={setOpenAssementOverview}/>
            <AssessmentCards setOpenForm={setOpenForm}/>
            </div>
        </div>
    )
}