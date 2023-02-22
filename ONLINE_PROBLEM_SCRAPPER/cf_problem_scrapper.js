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

const base = "https://codeforces.com/problemset/problem/";

const WebsiteLink = base + "1795/G";

request(WebsiteLink, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    //console.log(html);

    $(".problemindexholder").each((i, el) => {
      var problem_title = $(el).find(".header").find(".title").text().trim();
      var time_limit = $(el).find(".time-limit").text().trim();

      var memory_limit = $(el).find(".memory-limit").text().trim();
      var input_file = $(el).find(".input-file").text().trim();
      var output_file = $(el).find(".output-file").text().trim();

      var input_specification = $(el)
        .find(".input-specification")
        .text()
        .trim();
      var output_specification = $(el)
        .find(".output-specification")
        .text()
        .trim();
      var sample_tests = $(el).find(".sample-tests").text().trim();

      var input = $(el).find(".input").text().trim();
      var output = $(el).find(".output").text().trim();

      var statement = $(el)
        .find(".problem-statement")
        .text()
        .trim()
        .replace(memory_limit, "")
        .replace(problem_title, "")
        .replace(time_limit, "")
        .replace(input_file, "")
        .replace(output_file, "")
        .replace(input_specification, "")
        .replace(output_specification, "")
        .replace(sample_tests, "")
        .replace(input, "")
        .replace(output, "")
        .replace(/\$\$\$/g, " ");

      console.log("\nProblem title\n" + problem_title);
      console.log("\nTime Limit\n" + time_limit.replace(/time limit per test/g, "").trim());
      console.log("\nMemory Limit\n" + memory_limit.replace(/memory limit per test/g, "").trim());
      console.log("\nInput file\n" + input_file.replace(/input/g, "").trim());
      console.log("\nOutput File\n" + output_file.replace(/output/g, "").trim());
      console.log("\nProblem Statement \n" + statement);
      console.log("\nInput Specification\n" + input_specification.replace(/Input/g, "").trim());
      console.log("\nOutput Specification\n" + output_specification.replace(/Output/g, "").trim());
      //console.log(sample_tests);
      console.log("\nSample input\n" + input.replace(/Input/g, "").replace(/\$\$\$/g, " ").trim());
      console.log("\nSample Output\n" + output.replace(/Output/g, "").trim());
    });
  }
});

