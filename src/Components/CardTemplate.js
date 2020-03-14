import React from "react";

export default function CardTemplate({ school }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{school.school_name}</h5>
        </div>
      </div>
    </div>
  );
}
