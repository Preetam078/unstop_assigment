import styles from "./assessmentIcon.module.css"

export default function AssessmentIcon({icon, setOpenAssementOverview}) {
    function handleClick() {
        if(icon.option === "drag") {
            setOpenAssementOverview((prev)=>!prev)
        }
    }
    return (
        <div className={styles.assessment_icon_container} onClick={handleClick}>
            <div dangerouslySetInnerHTML={{ __html: icon.icon }} />
        </div>
    )
}