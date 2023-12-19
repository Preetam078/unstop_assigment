import styles from "./label.module.css"

export default function Label({name}) {
    return (
        <div className={styles.label_container}>
            <span className={styles.label_name}>{name}</span>
        </div>
    )
}