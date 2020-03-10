const pg = require("pg");
// const client = new pg.Client(
//   process.env.DATABASE_URL || "postgres://localhost/acme_db"
// );

// client.connect();

const sync = async () => {
  const SQL = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS school;
  DROP TABLE IF EXISTS student;
  

  CREATE TABLE school(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    school_name VARCHAR(255) NOT NULL UNIQUE,
    

  );
  CREATE TABLE student(
    id UUID PRIMARY KEY default uuid_generate_v4(),
    isEnrolled BOOLEAN default false,
    schoolId UUID REFERENCE school(id) 
    );

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

// const createSchool = async (animeId, peepsId) => {
//   const SQL = `INSERT INTO sc(mal_id, "peepoId") VALUES($1, $2) RETURNING *`;
//   const response = await client.query(SQL, [animeId, peepsId]);
//   console.log(animeId, peepsId);
//   return response;
// };

module.exports = {
  sync,
  getSchool,
  getStudent,
  deleteSchool,
  deleteStudent
};
