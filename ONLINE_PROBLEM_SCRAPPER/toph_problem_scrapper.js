const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

// 1. npm init - y ->> will crate package .json file in the directory
// 2. npm i cheerio ->> will install required modules for cheerio
// 3. npm i request ->> will install required modules for request which basically sends request to webstie

const fileName = "icpc-dhaka-22-preli.csv";
const writeStream = fs.createWriteStream(fileName);

writeStream.write(`Rank,Team Name,Total Solved,Penalty\n`);

//!FOR ME

const WebsiteLink = "https://toph.co/p/icpc-to-lcpc";

request(WebsiteLink, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    //console.log(html);

    $(".panel").each((i, el) => {
      var problem_title = $(el).find(".artifact__caption").text().trim();

      var problem_limit = $(el)
        .find(".panel__body")
        .find(".dotted")
        .text()
        .trim();

      var problem_body = $(el)
        .find(".panel__body")
        .find(".artifact")
        .text()
        .trim();

      if (problem_title != "" && problem_limit != "" && problem_body != "") {
        console.log("\nProblem Title \n" + problem_title);
        console.log("\nProblem Limit \n" + problem_limit);
        console.log(
          "\nProblem Body \n" +
            problem_body.replace(/Samples/g, "\n\nSamples\n")
        );
      }
    });
  }
});
