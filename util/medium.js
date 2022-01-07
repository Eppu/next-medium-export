// import axios from "axios";
// import xml2js from "xml2js";

// export async function getMediumData(url) {
//   return axios.get(url).then((response) => {
//     const parser = new xml2js.Parser();
//     console.log(parser.parseStringPromise(response.data));
//     return parser.parseStringPromise(response.data);
//   });
// }

var axios = require("axios");
var toJSON = require("xml2js").parseString;

var url = process.env.MEDIUM_FEED || "https://medium.com/feed/netlify";

export function getMediumData() {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        // turn the feed XML into JSON
        toJSON(response.data, function (err, result) {
          // create a path for each item based on Medium's guid URL
          result.rss.channel[0].item.forEach((element) => {
            var url = element.link[0].split("/");
            element.path = url[url.length - 1].split("?")[0];
          });
          resolve({ url: url, posts: result.rss.channel[0].item });
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export async function getPostData(id) {
  const mediumData = await getMediumData();

  const post = mediumData.posts.find((p) => p.path === id);
  console.log(post);

  // Find the post with the given id
  //   const post = mediumData.posts.find((post) => post.path === id);
  //   console.log(post);
  // Return the post data
  return post;
  //   const post = mediumData.posts.find((post) => post.path === id);
  //   return {
  //     id,
  //     post,
  //   };
}
