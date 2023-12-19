import styles from "./newCard.module.css"
import data from "@/app/_data/data"

export default function NewCard() {
    return (
        <div className={styles.new_card_container}>
            <div className={styles.card_icon} dangerouslySetInnerHTML={{ __html: data.newCard.icon }} />
            <div className={styles.card_subheading}>
                <span>{data.newCard.subheading}</span>
            </div>
            <div className={styles.card_description}>
                <span>{data.newCard.description}</span>
            </div>
        </div>
    )
}
