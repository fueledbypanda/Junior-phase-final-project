import React, { useState } from "react";

export default function CreateStuff({ createSchool, createStudent }) {
  const [school, setSchool] = useState({});
  //   const [student, setStudent] = useState([]);
  const onSchoolChange = ev => {
    const updatedSchool = [...school, ev.target.value];
    setSchool(updatedSchool);
  };
  const onCreateSchool = ev => {
    ev.preventDefault();
    createSchool(school);
  };

  //   const onCreateStudent = () => {};
  return (
    <div>
      <div className="card w-25">
        <div className="card-body">
          <div>
            <form onSubmit={onCreateSchool}>
              <input type="text" onChange={onSchoolChange} />
              <button type="submit">Add School </button>
            </form>
          </div>
          <div>
            <form>
              <input type="text" />
              <button type="submit">Add Student </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
