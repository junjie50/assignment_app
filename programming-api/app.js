import * as db from "./services/programmingAssignmentService.js";
import { serve } from "./deps.js";
import { sql } from "./database/database.js";

const handleGradeRequest = async (request) => {
  const requestData = await request.json();

  // check if there is another pending assignment
  const pending = await db.findUserPending(requestData.user);
  if(pending.length !== 0) {
    console.log('pending');
    return new Response("There is current pending assignment.", {status: 403});
  }


  // check if there is another assignment smaller and incomplete
  const latest = await db.findLatest(requestData.user);
  console.log(latest);
  if((latest[0].max && requestData.id > latest[0].max)) {
    return new Response(`Please complete assignment ${latest.max}.`, {status: 403});
  }

  // check same code to same assignment
  const duplicate = await db.findDuplicate(requestData.id, requestData.code);
  if(duplicate.length !== 0) {
    // there is duplicate
    const result = await db.addSubmissionFull(requestData.id, requestData.code, requestData.user, duplicate[0]["status"], duplicate[0]["grader_feedback"], duplicate[0]["correct"]);
    return Response.json(result);
  }


  // no duplicate, send to grade
  const added = await db.addSubmission(requestData.id, requestData.code, requestData.user);
  if(added.rowCount === 0) {
    return new Response("Error 400", {status: 400});
  }

  const assignment = await db.findOne(requestData.id)
  const test_code = assignment[0]["test_code"];
  const data = {
    id: added[0]["id"], // get the id of the submission
    test_code: test_code,
    code: requestData.code,
  };

  // send to the grader service
  const response = await fetch("http://grader-api:7000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return  Response.json(added);
};

const handleGetAssignments= async (request) => {
  const assignments = await db.findAll();
  return Response.json(assignments);
};

const handleUpdateAssignment= async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  const requestData = await request.json();
  const updated = await db.findOneAndUpdate(id, requestData.grader_feedback, requestData.correct);
  return Response.json(updated);
};

const handleGetAssignment= async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  const ans = await db.findOne(id);
  if(ans.length === 0) {
    return new Response("Error", {status: 404});
  }
  return Response.json(ans);
};

const handleGetSubmissions = async (request, urlPatternResult) => {
  const id = urlPatternResult.pathname.groups.id;
  const uuid = urlPatternResult.pathname.groups.uuid;
  const ans = await db.findSubmissions(id, uuid); // a list of items
  return Response.json(ans);
};

const handleGetSubmission = async (request, urlPatternResult) => {
  console.log(request);
  const id = urlPatternResult.pathname.groups.id;
  const uuid = urlPatternResult.pathname.groups.uuid;
  const ans = await db.findSubmission(id, uuid); // return one item
  return Response.json(ans);
};

const handleGetLatest = async (request, urlPatternResult) => {
  console.log("request here:" ,request);
  const uuid = urlPatternResult.pathname.groups.uuid;
  const ans = await db.findLatest(uuid); // return one item
  console.log(uuid,ans);
  return Response.json(ans);
};

const urlMapping = [
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/assignments" }),
    fn: handleGetAssignments,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/assignments/:id" }),
    fn: handleGetAssignment,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/submissions/:id/:uuid" }),
    fn: handleGetSubmissions,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/latest/:uuid" }),
    fn: handleGetLatest,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/submission/:id/:uuid" }),
    fn: handleGetSubmission,
  },
  {
    method: "GET",
    pattern: new URLPattern({ pathname: "/pending/:uuid" }),
    fn: handleGetAssignment,
  },
  {
    method: "PATCH",
    pattern: new URLPattern({ pathname: "/assignments/:id" }),
    fn: handleUpdateAssignment,
  },
  {
    method: "POST",
    pattern: new URLPattern({ pathname: "/grade" }),
    fn: handleGradeRequest,
  },
];

const handleRequest = async (request) => {
  const mapping = urlMapping.find(
    (um) => um.method === request.method && um.pattern.test(request.url)
  );

  if (!mapping) {
    return new Response("Not found", { status: 404 });
  }

  const mappingResult = mapping.pattern.exec(request.url);
  try {
    return await mapping.fn(request, mappingResult);
  } catch(e) {
    // generic error handling, printing it out log it.
    console.log(e);
    return new Response(e.stack, {status: 500});
  }
};

const portConfig = { port: 7777, hostname: "0.0.0.0" };
serve(handleRequest, portConfig);
