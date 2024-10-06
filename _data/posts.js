// _data/posts.js
const EleventyFetch = require("@11ty/eleventy-fetch");
require("dotenv").config();

module.exports = async function() {
  const url =   process.env.URL ;

  try {
    const posts = await EleventyFetch(url, {
      duration: "1d", // Save for 1 day
      type: "json",   // Automatically parse JSON
    });
    return posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array or handle the error as needed
  }
};
