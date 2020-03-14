import React, { useState, useEffect } from "react";
import axios from "axios";
// import AnimeBody from "./AnimeBody";
import Header from "./header";
import CreateStuff from "./CreateStuff";

// import "./index.css";
import MainBody from "./MainBody";

export default function AcmeSchool() {
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/school")
      .then(response => {
        console.log("schools", response.data);
        setSchools(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/student")
      .then(response => {
        console.log("students", response.data);
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const createSchool = async school => {
    try {
      const created = (await axios.post("/api/school", school)).data;
      setSchools([...schools, created]);
      setError("");
    } catch (ex) {
      setError("error");
    }
  };

  const createStudent = async student => {
    try {
      const created = (await axios.post("/api/student", student)).data;
      setStudents([...students, created]);
      setError("");
    } catch (ex) {
      setError("error");
    }
  };

  const studentsRendered = students;

  const schoolsRendered = schools;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <CreateStuff
          createStudent={createStudent}
          createSchool={createSchool}
        />
      </div>
      <div>
        <MainBody schools={schoolsRendered} students={studentsRendered} />
      </div>
    </div>
  );
}
