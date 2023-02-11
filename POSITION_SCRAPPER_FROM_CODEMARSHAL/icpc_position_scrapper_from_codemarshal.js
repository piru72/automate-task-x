const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const fileName = "icpc-dhaka-22-preli.csv";
const writeStream = fs.createWriteStream(fileName);

writeStream.write(`Rank,Team Name,Total Solved,Penalty\n`);

//!FOR ME

for (let i = 1; i <= 7; i++) {
  const WebsiteLink =
    "https://algo.codemarshal.org/contests/icpc-dhaka-22-preli/standings?page=" +
    i;

  request(WebsiteLink, (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      // console.log(html);
      var position = "";
      var rank = "";
      $("td").each((i, el) => {
        var team_name = $(el).text().trim();

        if (position.startsWith("AUST")) {
          var solved = $(el).find(".label-info").text().trim();
          var penalty = $(el).find(".label-default").text().trim();
          // console.log(solved);
          // console.log(penalty);
          var team = position.split(" ")[0];
          writeStream.write(`${rank},${team},${solved},${penalty}\n`);
          console.log(`${rank} \t${team} \t\t\t${solved}\t${penalty}\n`);
        }
        rank = position;
        position = team_name;
      });
    }
  });

  //console.log(WebsiteLink);
}
