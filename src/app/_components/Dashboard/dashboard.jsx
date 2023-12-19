import MobileLeftBar from "../MobileLeftbar/mobileLeftbar";
import AssessmentBar from "./AssessmentBar/assessmentBar";
import AssessmentCards from "./AssessmentCards/assessmentcards";
import Header from "./Header/header";
import styles from "./dashboard.module.css";

export default function Dashboard() {
    return (
        <div className={styles.dashboard_container}>
            <MobileLeftBar/>
            <Header/>
            <div className={styles.dashboard_subheading}>
                <span className={styles.dashboard_subheading_text}>Assessments Overview</span>
            </div>
            {/**TODO stats bar */}
            <AssessmentBar/>
            <AssessmentCards/>
        </div>
    )
}