import styles from "./card.module.css"

export default function Card({data}) {
    return (  
            <div className={styles.card_container}>
                <div className={styles.card_title}>
                    <div className={styles.heading}>
                        <div dangerouslySetInnerHTML={{ __html: data.cardIcon }} />
                        <div className={styles.icon_container}>
                            <div className={styles.heading}><span>Math Assessment</span></div>
                            <div className={styles.event_detail}>
                                <div className={styles.job_name}><span>Job</span></div>
                                <div dangerouslySetInnerHTML={{ __html: data.seperator }} />
                                <div className={styles.meta_data}>
                                    <div dangerouslySetInnerHTML={{ __html: data.calenderIcon }} />
                                    <span className={styles.date}>{data.venue}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.option_container} dangerouslySetInnerHTML={{ __html: data.optionIcon }} />
                </div>
                <div className={styles.subdetails}>
                    <div className={styles.assessment_data}>
                        <div className={styles.assessment_meta}>
                            <span className={styles.numeric_val}>{data.duration}</span>
                            <span className={styles.numeric_name}>Duration</span>
                        </div>
                        <div className={styles.assessment_meta}>
                            <span className={styles.numeric_val}>{data.questions}</span>
                            <span className={styles.numeric_name}>Questions</span>
                        </div>
                    </div>
                    <div className={styles.social_container}>
                        <div dangerouslySetInnerHTML={{ __html: data.shareIcon }} />
                        <div className={styles.avatar_container} dangerouslySetInnerHTML={{ __html: data.multiAvatar }} />
                        <div className={styles.people_container}><span>{data.peeple}</span></div>
                    </div>
                </div>
            </div>
    )
}