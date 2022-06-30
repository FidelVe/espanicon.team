import { parse } from "rss-to-json";

export async function getDataFromRSSFeed(feed) {
  try {
    let parsedData = [];
    const dataFromRSSFeed = await parse(feed);

    for (let article of dataFromRSSFeed.items) {
      parsedData.push({
        ...article,
        content: null, // passing everything except content
        content_encoded: null
      });
    }
    return JSON.stringify(parsedData);

    // return JSON.stringify(res, null, 3);
  } catch (err) {
    console.log(err);
  }
  return "null";
}
export async function getMediumData() {
  return await getDataFromRSSFeed("https://medium.com/feed/@espanicon");
}

export async function getDevToData() {
  return await getDataFromRSSFeed("https://dev.to/feed/espanicon");
}

const utils = {
  getMediumData: getMediumData,
  getDevToData: getDevToData
};
export default utils;
