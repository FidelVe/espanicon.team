import httpsRequest from "./httpsRequest.js";
import { parse } from "rss-to-json";

export async function getMediumData() {
  try {
    // const res = await httpsRequest({
    //   hostname: "medium.com",
    //   // port: 80,
    //   path: "/feed/@espanicon"
    //   // method: "GET"
    // });
    const res = await parse("https://medium.com/feed/@espanicon");
    return JSON.stringify(res, null, 3);
  } catch (err) {
    console.log(err);
  }
  return "null";
}
const utils = {
  getMediumData: getMediumData
};
export default utils;
