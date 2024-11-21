import http from "k6/http";
import crypto from "k6/crypto";
import { sleep } from 'k6';

function Str_Random(length) {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  
  // Loop to generate characters for the specified length
  for (let i = 0; i < length; i++) {
      const randomInd = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomInd);
  }
  return result;
}
console.log(Str_Random(10));

export const options = {
    duration: "10s",
    vus: 5,
    summaryTrendStats: ["avg", "p(99)"]
  };

export default function () {
  const url = "http://localhost:7800/api/grade";
  const payload = JSON.stringify({
      user: Str_Random(20),
      code: `def hello():\n\tn = ${Str_Random(20)}\n\treturn 'Hello'`,
      id: 1,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
  sleep(1);
}