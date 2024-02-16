import axios from "axios";

const base = "https://api.starassurance.com/api/";
const baseUrl = "http://test.ghcompare.nsupak.com/"

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000000,
  headers: {
    // 'Access-Control-Allow-Origin': 'http://localhost:5173'
  },
});












export const star_api = axios.create({
  base,
  timeout: 50000,
  headers: {
    Authorization:
      "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9",
  },
});

