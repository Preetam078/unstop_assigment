"use client";

// imported some components and hooks to be used
import data from "@/app/_data/data";
import styles from "./assessmentOverview.module.css";
import {
  candidates_score_card_details,
  candidates_source_score_card_details,
} from "./constant";
import { useMediaQuery } from "../../customHook/useMediaQuery";

export default function AssessmentOverview() {

  //using custom hook to get the screen size
  const isSmallScreen = useMediaQuery("(max-width: 1000px)");

  const firstCard = (title, icon, count) => (
    <div className={styles.first_card}>
      <span className={styles.first_card_text}>{title}</span>
      <div className={styles.first_card_information}>
        <div
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
        <span className={styles.first_card_count}>{count}</span>
      </div>
    </div>
  );
  const getCategoryCards = (count, subCount, category, isLastCategory) => {
    return (
      <>
        <div className={styles.category_card_details}>
          <div>
            <span className={styles.category_count}>{count}</span>{" "}
            <span className={styles.category_subcount}>{subCount}</span>
          </div>
          <div className={styles.category_text}>{category}</div>
        </div>
        {!isLastCategory && <span className={styles.category_separator}></span>}
      </>
    );
  };
  const second_card = (title, icon, category_details) => (
    <div className={styles.second_card}>
      <span className={styles.second_card_text}>{title}</span>
      <div className={styles.second_card_information}>
        <div
          dangerouslySetInnerHTML={{
            __html: icon,
          }}
        />
        <span className={styles.category_cards}>
          {category_details.map((detail, idx) => (
            <>
              {getCategoryCards(
                detail.count,
                detail.sub_count,
                detail.category,
                idx == category_details.length - 1
              )}
            </>
          ))}
        </span>
      </div>
    </div>
  );
  const getMobileAssesmentOverview = () => {
    return (
      <>
        {firstCard(
          "Total Assessment",
          data.assessmentOverview.totalAssessment,
          "34"
        )}
        {firstCard(
          "Total Purpose",
          data.assessmentOverview.totalAssessment,
          "11"
        )}
        {second_card(
          "Candidates",
          data.assessmentOverview.totalAssessment,
          candidates_score_card_details
        )}
        {second_card(
          "Candidates Source",
          data.assessmentOverview.totalAssessment,
          candidates_source_score_card_details
        )}
      </>
    );
  };
  const getNormalScreenAssementOverview = () => {
    return (
      <>
        {firstCard(
          "Total Assessment",
          data.assessmentOverview.totalAssessment,
          "34"
        )}
        {second_card(
          "Candidates",
          data.assessmentOverview.totalAssessment,
          candidates_score_card_details
        )}
        {second_card(
          "Candidates Source",
          data.assessmentOverview.totalAssessment,
          candidates_source_score_card_details
        )}
        {firstCard(
          "Total Purpose",
          data.assessmentOverview.totalAssessment,
          "11"
        )}
      </>
    );
  };
  return (
    <div className={styles.assessment_overview}>
      <span className={styles.assessment_overview_text}>
        Assessments Overview
      </span>

      <div className={styles.assessment_overview_container}>
        {isSmallScreen
          ? getMobileAssesmentOverview()
          : getNormalScreenAssementOverview()}
      </div>
    </div>
  );
}
