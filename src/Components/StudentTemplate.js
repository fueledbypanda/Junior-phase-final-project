import React from "react";

export default function StudentTemplate({ student }) {
  if (student.isenrolled == false) {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{student.student_name}</h5>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
}
