import { sql } from "../database/database.js";

const findAll = async () => {
  return await sql`SELECT * FROM programming_assignments;`;
};

const findOne = async (id) => {
  return await sql`SELECT * FROM programming_assignments WHERE id = ${id};`;
};

const findOneAndUpdate = async (id, grader_feedback, correct) => {
  return await sql`
    UPDATE programming_assignment_submissions 
      SET grader_feedback = ${grader_feedback},
      correct = ${correct},
      status = 'processed',
      last_updated = NOW()
    WHERE id = ${id}
    RETURNING *;`;
};

const findTestCode = async (id) => {
  return await sql`SELECT test_code FROM programming_assignments \
                      WHERE id = ${id};`;
};

const findSubmissions = async (id, uuid) => {
  return await sql`
    SELECT * FROM programming_assignment_submissions
    WHERE programming_assignment_id = ${id} AND user_uuid = ${uuid};`;
}

const findSubmission = async (id, uuid) => {
  return await sql`
    SELECT * FROM programming_assignment_submissions
    WHERE programming_assignment_id = ${id} AND user_uuid = ${uuid}
    ORDER BY last_updated DESC
    LIMIT 1;`;
}

const addSubmission = async (pa_id, code, uuid) => {
  return await sql`INSERT INTO programming_assignment_submissions (programming_assignment_id, 
  code, user_uuid) VALUES (${pa_id}, ${code}, ${uuid}) RETURNING *;`;
};

const addSubmissionFull = async (pa_id, code, uuid, status, grader_feedback, correct) => {
  return await sql`INSERT INTO programming_assignment_submissions (programming_assignment_id,
  code, user_uuid, status, grader_feedback, correct) VALUES (${pa_id}, ${code}, ${uuid}, ${status}, ${grader_feedback}, ${correct}) RETURNING *;`;
};

const findDuplicate = async (id, code) => {
  return await sql`SELECT * FROM programming_assignment_submissions WHERE programming_assignment_id = ${id} AND code = ${code} AND status = 'processed' LIMIT 1;`;
};

const findUserPending = async (uuid) => {
  return await sql`SELECT * FROM programming_assignment_submissions WHERE user_uuid = ${uuid} AND status = 'pending' LIMIT 1;`;
};

const findLatest = async (uuid) => {
  const pendings = await sql`SELECT MAX(programming_assignment_id) FROM 
  programming_assignment_submissions 
  WHERE user_uuid = ${uuid} AND status = 'pending' LIMIT 1;`
  if(pendings[0].max) {
    return pendings;
  }
  
  const next = await sql`SELECT MAX(programming_assignment_id + 1) FROM 
  programming_assignment_submissions 
  WHERE user_uuid = ${uuid} LIMIT 1;`;
  return next;
};

export { findAll, findOne, findTestCode, findDuplicate, addSubmission, 
  addSubmissionFull, findOneAndUpdate, findSubmissions, findSubmission,
  findLatest, findUserPending};
