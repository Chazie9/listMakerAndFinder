const express = require('express');
const axios = require('axios');
const htmlParser = require('html-parser');
const cheerio = require('cheerio')



let app = express();

app.use('/', express.static(__dirname + '/../client/dist'));

app.get('/api/craigslist', (req, res) => {
    axios.get('https://sfbay.craigslist.org/search/sss?query=solar+panel')
    .then(function (response) {
      //console.log(response);
      //res.send(JSON.stringify(response));
      let page = response.data
      let cData = [];
      const $ = cheerio.load(page);

      //console.log($('.result-row').text())

      $('.result-row').each((i, element) => {
        const $$ = cheerio.load(element);
        
        let almostTitle = $$('.result-info').text();
        let link = $$('.result-info').html().split('<');
        
       // let link = $$('result-price').text();

        let title = almostTitle.split('\n');
        //console.log(title.split('\n')[12], 'the price');
        let theLink = link[7].split("\"");

        let ahref = theLink[1]
        console.log(ahref)


        let obj = {
            title: title[8],
            link: ahref,
            price: title[12]
        }
        cData.push(obj);
      });
      res.send(cData);

    //   let splitData = response.data.split('<')
    //   let cData = [];
    //   let collectingItems = false;
    //   splitData.forEach(element => {
    //       if(element = "ul class=\"rows\">") {
    //         collectingItems = true;
    //       }
    //       if(element = "/ul>") {
    //           collectingItems = false;
    //       }
    //       if(collectingItems) {
    //         cData.push(element);
    //       }

     // });
      //console.log(cData);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(3000, function() {
    console.log('your listening to port 3000');
});