const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/junior_phase_project"
);

client.connect();

const sync = async () => {
  const SQL = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS student;
  DROP TABLE IF EXISTS school;
 
  

  CREATE TABLE school(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    school_name VARCHAR(255) NOT NULL UNIQUE
    

  );
  CREATE TABLE student(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    student_name VARCHAR(30) NOT NULL,
    isEnrolled BOOLEAN default false,
    schoolId UUID REFERENCES school(id) 
    );

  INSERT INTO school (school_name) VALUES ('Sandalwood');
  INSERT INTO student (student_name) VALUES ('RJ Celestino');

  `;
  await client.query(SQL);
};

const getSchool = async () => {
  const SQL = `SELECT * from school`;
  const response = await client.query(SQL);
  return response.rows;
};

const deleteSchool = async id => {
  const SQL = `DELETE FROM school WHERE id = $1`;
  const response = await client.query(SQL, [id]);
  return response;
};

const getStudent = async () => {
  const SQL = `SELECT * from student`;
  const response = await client.query(SQL);
  return response.rows;
};

const deleteStudent = async id => {
  const SQL = `DELETE FROM student WHERE id = $1`;
  const response = await client.query(SQL, [id]);
  return response;
};

const createSchool = async schoolName => {
  const SQL = `INSERT INTO school (school_name) VALUES($1) RETURNING *`;
  const response = await client.query(SQL, [schoolName]);
  console.log(schoolName);
  return response;
};

const createStudent = async studentName => {
  const SQL = `INSERT INTO student (student_name) VALUES($1) RETURNING *`;
  const response = await client.query(SQL, [studentName]);
  console.log(studentName);
  return response;
};

module.exports = {
  sync,
  getSchool,
  getStudent,
  deleteSchool,
  deleteStudent,
  createSchool,
  createStudent
};
