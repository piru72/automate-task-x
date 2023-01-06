const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('single_page_notice.csv');

// Write headers to csv file
writeStream.write(`Text,Link,Date\n`);

request('https://www.beecrowd.com.br/judge/en/runs', (error, response, html) => {

    if (!error && response.statusCode == 200) {
        console.log('Successfully scraped the website.');
        const $ = cheerio.load(html);

        const pageHeaderHeading = $('.filter-box');

        console.log(pageHeaderHeading.find('h3').text());

        // $('.impar').each((i, el) => {
        //     const Text = $(el).find('.tiny').children('a').attr('href');
        //     // const Link = $(el).find('.notice_text').children('a').attr('href');
        //     // const month = $(el).find('.notice_date').find('.month').text();
        //     // const day = $(el).find('.notice_date').find('.day').text();
        //     // const year = $(el).find('.notice_date').find('.year').text();
        //     // const Date = month + ' ' + day + ' ' + year;

        //     console.log(Text);
        //     // console.log(Link);
        //     // console.log(Date);
        //     // console.log('\n');
        //     // writeStream.write(`${Text},${Link},${Date}\n`);
        // });
        console.log('Scraping Complete');
    }
});