import styles from "./assessmentIcon.module.css"

export default function AssessmentIcon({icon}) {
    return (
        <div className={styles.assessment_icon_container}>
            <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
    )
}