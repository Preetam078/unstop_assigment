import Label from "./components/Label/label"
import styles from "./form.module.css"
import data from "@/app/_data/data"

export default function Form() {
    return (
        <div className={styles.form_container}>
            <div className={styles.form_header}>
                <div className={styles.form_heading}>Create new assessment</div>
                <div dangerouslySetInnerHTML={{ __html: data.cutForm }} />
            </div>
            <div className={styles.form_field_container}>
              <Label name={"Name of assessment"} />
              <div className={styles.input_container}>
                <input className={styles.input_field} type="text" placeholder="Type Here"/>
              </div>
              <Label name={"Purpose of the test is"}/>
              <div className={styles.input_container}>
                <input className={styles.input_field} type="text" placeholder="Type Here"/>
              </div>
              <Label name={"Description"}/>
              <div className={styles.input_container}>
                <input className={styles.input_field} type="text" placeholder="Type Here"/>
              </div>
              <Label name={"Skills"}/>
              <div className={styles.skill_container}>
                <div className={styles.skill_chip_container}>

                </div>
                <div className={styles.skill_input_container}>
                  <input className={styles.input_field} type="text" placeholder="Type Here"/>
                </div>
              </div>
            </div>
        </div>
    )
}