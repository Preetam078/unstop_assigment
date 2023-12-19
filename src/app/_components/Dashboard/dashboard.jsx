import AssessmentBar from "./AssessmentBar/assessmentBar";
import AssessmentCards from "./AssessmentCards/assessmentcards";
import AssessmentOverview from "./AssessmentOverview/assessmentOverview";
import Header from "./Header/header";
import styles from "./dashboard.module.css";
import SwitchTab from "./Header/components/SwitchTabs/switchTabs";
export default function Dashboard({setOpenForm}) {
    return (
        <div className={styles.dashboard_container}>
            <Header/>
            <div className={styles.swtichTabMobile}>
            <SwitchTab/>
            </div>
            {/* <div className={styles.dashboard_subheading}>
                <span className={styles.dashboard_subheading_text}>Assessments Overview</span>
            </div> */}
			<AssessmentOverview/>
            {/**TODO stats bar */}
            
            <AssessmentBar/>
            <AssessmentCards setOpenForm={setOpenForm}/>
        </div>
    )
}