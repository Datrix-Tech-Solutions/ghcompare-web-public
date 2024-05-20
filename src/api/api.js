import axios from "axios";

const base = "http://api.starassurance.com/api/";
const baseUrl = "https://api.ghcompare.com/";
// const baseUrl = "http://137.184.6.183:5000/";

export const api = axios.create({
  baseURL: baseUrl,
  timeout: 50000,
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
