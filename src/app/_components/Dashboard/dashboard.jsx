//import all the small or reusable components for the Dashboard to used further.
import AssessmentBar from "./AssessmentBar/assessmentBar";
import AssessmentCards from "./AssessmentCards/assessmentcards";
import AssessmentOverview from "./AssessmentOverview/assessmentOverview";
import Header from "./Header/header";
import styles from "./dashboard.module.css";
import SwitchTab from "./Header/components/SwitchTabs/switchTabs";
import { useMediaQuery } from "../customHook/useMediaQuery";
import { useState } from "react";
import MobileSwitchTab from "./MobileSwitchtab/mobileSwitchtab";


export default function Dashboard({setOpenForm}) {
    // using custom hook to get the mobile size size
    const isMobile = useMediaQuery("(max-width: 650px)");

    const [openAssementOverview,setOpenAssementOverview]=useState(false)
    return (
        <div className={styles.dashboard_container}>
            <div className={styles.sticky_header}>
                <Header/>
                <div className={styles.swtichTabMobile}>
                <SwitchTab/>
                </div>
                {
                    isMobile && <MobileSwitchTab/>
                }
            </div>
            <div>
                
                {
                    // consditional component rendering 
                    !isMobile && <AssessmentOverview/>
                }
                {
                    // conditional component rendering
                    openAssementOverview && isMobile && <AssessmentOverview/>
                }
            <AssessmentBar setOpenAssementOverview={setOpenAssementOverview}/>
            <AssessmentCards setOpenForm={setOpenForm}/>
            </div>
        </div>
    )
}