const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const fileName = "icpc-dhaka-22-preli.csv";
const writeStream = fs.createWriteStream(fileName);

writeStream.write(`Rank,Team Name,Total Solved,Penalty\n`);

//!FOR ME

const WebsiteLink = "https://codeforces.com/problemset/problem/1795/G";

request(WebsiteLink, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    //console.log(html);
    
    $(".problemindexholder").each((i, el) => {
      var problem_title = $(el).find(".header").find(".title").text().trim();
      var time_limit = $(el).find(".time-limit").text().trim().replace(/time limit per test/g, '');
      var memory_limit = $(el).find(".memory-limit").text().trim().replace(/memory limit per test/g, '');;
      var input_file = $(el).find(".input-file").text().trim();
      var output_file = $(el).find(".output-file").text().trim();

      var input_specification = $(el).find(".input-specification").text().trim();
      var output_specification = $(el).find(".output-specification").text().trim();
      var sample_tests = $(el).find(".sample-tests").text().trim();

      var input = $(el).find(".input").text().trim();
      var output = $(el).find(".output").text().trim();


      console.log(problem_title);
      console.log(time_limit);
      console.log(memory_limit);
      console.log(input_file);
      console.log(output_file);
      console.log(input_specification);
      console.log(output_specification);
      //console.log(sample_tests);
      console.log(input);
      console.log(output);

    //   if (
    //     position.includes("[ Ahsanullah University of Science and Technology ]")
    //   ) {
    //     var solved = $(el).find(".label-info").text().trim();
    //     var penalty = $(el).find(".label-default").text().trim();
    //     // console.log(solved);
    //     // console.log(penalty);
    //     var team = position.split(" ")[0];
    //     writeStream.write(`${rank},${team},${solved},${penalty}\n`);
    //     console.log(`${rank} \t${team} \t\t\t${solved}\t${penalty}\n`);
    //   }
    //   rank = position;
    //   position = team_name;
    });
  }
});

//console.log(WebsiteLink);


// Erfan Ahmed Siam11:36 PM
// https://codeforces.com/blog/entry/50170
// Erfan Ahmed Siam11:41 PM
// https://github.com/bentrevett/codeforces-scraper