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

//console.log(WebsiteLink);

Problem title
G. Removal Sequences

Time Limit
4 seconds

Memory Limit
256 megabytes

Input file
standard

Output File
standard

Problem Statement
You are given a simple undirected graph, consisting of  n  vertices and  m  edges. The vertices are numbered from  1  to  n . The  i -th vertex has a value  a_i  written on it.You will be removing vertic
es from that graph. You are allowed to remove vertex  i  only if its degree is equal to  a_i . When a vertex is removed, all edges incident to it are also removed, thus, decreasing the degree of adjacent
 non-removed vertices.A valid sequence of removals is a permutation  p_1, p_2, \dots, p_n   (1 \le p_i \le n)  such that the  i -th vertex to be removed is  p_i , and every removal is allowed.A pair  (x,
 y)  of vertices is nice if there exist two valid sequences of removals such that  x  is removed before  y  in one of them and  y  is removed before  x  in the other one.Count the number of nice pairs  (
x, y)  such that  x < y .

Input Specification
The first line contains a single integer $$$t$$$ ($$$1 \le t \le 10^4$$$) — the number of testcases.The first line of each testcase contains two integers $$$n$$$ and $$$m$$$ ($$$1 \le n \le 10^5$$$; $$$0
 \le m \le \min(10^5, \frac{n \cdot (n - 1)}{2})$$$) — the number of vertices and the number of edges of the graph.The second line contains $$$n$$$ integers $$$a_1, a_2, \dots, a_n$$$ ($$$0 \le a_i \le n
 - 1$$$) — the degree requirements for each removal.Each of the next $$$m$$$ lines contains two integers $$$v$$$ and $$$u$$$ ($$$1 \le v, u \le n$$$; $$$v \neq u$$$) — the description of an edge.The grap
h doesn't contain any self-loops or multiple edges.The sum of $$$n$$$ over all testcases doesn't exceed $$$10^5$$$. The sum of $$$m$$$ over all testcases doesn't exceed $$$10^5$$$.Additional constraint o
n the input: there always exists at least one valid sequence of removals.

Output Specification
For each testcase, print a single integer — the number of nice pairs of vertices.

Sample input
43 21 0 12 31 23 31 2 01 22 31 35 63 0 2 1 01 24 14 23 42 35 11 00

Sample Output
1
0
4
0