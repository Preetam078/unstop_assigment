import styles from "./skillchip.module.css"
import data from "@/app/_data/data"

export default function Skillchip({value}) {
    return (
        <div className={styles.container}>
            <span className={styles.skillchip_text}>{value}</span>
            <div className={styles.close_icon} dangerouslySetInnerHTML={{ __html: data.closeSkillChip }} />
        </div>
    )
}