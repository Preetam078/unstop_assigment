import AssessmentIcon from "./AssessmentIcon/assessmentIcon"
import styles from "./assessmentBar.module.css"
import data from "@/app/_data/data"

export default function AssessmentBar() {
    return (
        <div className={styles.assessment_bar}>
            <div>
                <span className={styles.assessment_text}>My Assessment</span>
            </div>
            
            <div class={styles.assessment_icon_list}>
                {
                    data.myAssessmentIcons.map((item, index)=> (
                        <AssessmentIcon icon={item}/>
                    ))
                }
            </div>
        </div>
    )
}