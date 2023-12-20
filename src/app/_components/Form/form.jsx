import Label from "./components/Label/label"
import Skillchip from "./components/Skillchip/skillchip"
import styles from "./form.module.css"
import data from "@/app/_data/data"
import { useState } from "react"
import { useMediaQuery } from "../customHook/useMediaQuery"

export default function Form({setOpenForm}) {

  const isMobile = useMediaQuery("(max-width: 650px)");
  function handleFormClose() {
    setAddClass(styles.modal_close);
    setOpenForm(false)
  } 

  const [addClass,setAddClass]=useState(null)
  return (
    <div className={`${styles.form_container} ${addClass}}`}>
      <div className={styles.form_header}>
        <div className={styles.form_heading}>
          {
            isMobile == true ?"Sub-Section Details":"Create new assessment"
          }
        </div>
        {
          isMobile == true? <div dangerouslySetInnerHTML={{ __html: data.mobileFormCut }} onClick={handleFormClose} />:<div dangerouslySetInnerHTML={{ __html: data.cutForm }} onClick={handleFormClose} />
        }
      </div>
      <form>
        <div className={styles.form_field_container}>
          <Label name={"Name of assessment"} />
          <div className={styles.input_container}>
            <input className={styles.input_field} type="text" placeholder="Type Here" />
          </div>
          <Label name={"Purpose of the test is"} />
          <div className={styles.input_container}>
            <span className={styles.dropdown_select}>Select</span>
            <div dangerouslySetInnerHTML={{ __html: data.dropdownIcon }} />
          </div>
          <Label name={"Description"} />
          <div className={styles.input_container}>
            <span className={styles.dropdown_select}>Select</span>
            <div dangerouslySetInnerHTML={{ __html: data.dropdownIcon }} />
          </div>
          <Label name={"Skills"} />
          <div className={styles.skill_container}>
            <div className={styles.skill_chip_container}>
              {
                data.skillList.map((item, index) => (
                  <Skillchip key={index} value={item} />
                ))
              }
            </div>
            <div className={styles.skillInput_container}>
              <input className={styles.skill_input_field} type="text" placeholder="Type Here" />
            </div>
          </div>
          <Label name={"Duration of assessment"} />
          <div className={styles.input_container}>
            <input className={styles.input_field} type="text" placeholder="HH:MM:SS" />
          </div>
        </div>
      </form>
        <div className={styles.button_container}>
          <button className={styles.save_button}>save</button>
        </div>
    </div>
  )
}