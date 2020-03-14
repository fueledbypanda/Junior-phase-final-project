import React from "react";
import CardTemplate from "./CardTemplate";
import StudentTemplate from "./StudentTemplate";

const styles = {
  child: {
    borderRadius: "1rem",
    margin: "1rem"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "1rem"
  }
};
export default function MainBody(props) {
  const renderedSchool = props.schools.map(school => (
    <div style={styles.child} key={school}>
      <CardTemplate school={school} />
    </div>
  ));

  const renderedStudent = props.students.map(student => (
    <div style={styles.child} key={student}>
      <StudentTemplate student={student} />
    </div>
  ));

  return (
    <div>
      <div className="card" style={{ width: "25rem" }}>
        <h2>Schools</h2>
        <div style={styles.container}>{renderedSchool}</div>
      </div>
      <div className="card" style={{ width: "25rem" }}>
        <h2>Unenrolled Students</h2>
        <div style={styles.container}>{renderedStudent}</div>
      </div>
    </div>
  );
}
