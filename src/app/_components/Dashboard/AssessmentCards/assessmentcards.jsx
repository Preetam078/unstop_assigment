import Card from "./Card/card"
import NewCard from "./NewCard/newCard"
import styles from "./assessmentcards.module.css"
import data from "@/app/_data/data"

export default function AssessmentCards({setOpenForm}) {
    return (
        <div className={styles.cards_container}>
            <NewCard setOpenForm={setOpenForm}/>
            {
                data.assessmentCardList.map((item, index) => (
                    <Card key={index} data={item}/>
                ))
            }
        </div>
    )
}