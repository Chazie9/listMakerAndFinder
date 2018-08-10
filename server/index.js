const express = require('express');
const axios = require('axios');
const htmlParser = require('html-parser');
const cheerio = require('cheerio')



let app = express();


app.use('/', express.static(__dirname + '/../client/dist'));


app.get('/allLists', (req, res) => {
    //console.log()

    let obj = [
        {
            title: 'item 1',
            link: 'https://www.youtube.com/embed/j094DDUGJSY'
        },
        {
            title: 'item 2', 
            link: 'https://www.youtube.com/embed/FaC0dlRENk0'
        },
        {
            title: 'item 3', 
            link: 'https://www.youtube.com/embed/TpqUr6bEYOs'
        }
    ]

    res.send({body: 'heyh egfsvasd fsadfasfas'});
});

app.get('/api/ebay/:id', (req, res) => {
    console.log('arrived')
    var id = req.params.id;
    console.log('the id is', id);
    let splitId = id.split('+');
    let finalId =  splitId.join('%');
 
    console.log('the split id is', finalId)

    // Construct the request
    // Replace MyAppID with your Production AppID
    var url = "http://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=1.0.0";
    url += "&SECURITY-APPNAME=CharlesH-MakersMa-PRD-ced5cedf3-74fd89e4";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&REST-PAYLOAD";
    url += `&keywords=${finalId}`;
    url += "&paginationInput.entriesPerPage=1";

    //services/search/FindingService/v1?SECURITY-APPNAME=CharlesH-MakersMa-PRD-ced5cedf3-74fd89e4&OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON&callback=_cb_findItemsByKeywords&REST-PAYLOAD&keywords=iPhone&paginationInput.entriesPerPage=6&GLOBAL-ID=EBAY-US&siteid=0

    axios.get(url)
    .then(function (response) { 
        //console.log(response.data);
        let results = response

        let splitResults = response.data.split(',');
        console.log(splitResults[5])

    });
});


app.get('/api/letgo', (req, res) => {
    //var id = req.params.id;

    axios.get('https://offerup.com/search/?q=solar+panel')
    .then(function (response) {
     
      let page = response.data
      let badResults = [];
      let results = [];
      let doubleChecked = [];
      const $ = cheerio.load(page);

      $('.db-item-tile').each((i, item) => {
        let splitItem = $(item).html().split('<');
        //console.log(splitItem);
        let parsedItem = {
            title: splitItem[8],
            img: splitItem[4],
            price: splitItem[11],
            location: splitItem[15]
        }
       
        let splitParsedTitle = parsedItem.img.split('\"');
        let splitParsedPrice = parsedItem.price.split('$');
        let splitParsedLocation = parsedItem.location.split('>');
        
        let finalParsedItem = {
            title: splitParsedTitle[1],
            img: splitParsedTitle[5],
            price: splitParsedPrice[1],
            location: splitParsedLocation[1],
            link: splitParsedLocation
        }
        results.push(finalParsedItem);
        //console.log(finalParsedItem)

      });
      res.send(results);
    })
    .catch(function (error) {
      console.log(error);    
    });
});


app.get('/api/craigslist/:id', (req, res) => {
    
    var id = req.params.id;
    // console.log('the id is...', id);
    let finalId = id
    let splitId = id.split('+');
    //console.log(id);
    //console.log(finalId);
    let url = `https://sfbay.craigslist.org/search/sss?query=${finalId}`
    
    //console.log('the url is', url)
    axios.get(url)
    .then(function (response) {
      //console.log(response);
      //res.send(JSON.stringify(response));
      let page = response.data
      let cData = [];
      let badResults = [];
      let doubleChecked = [];
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
        //console.log(ahref)
        let titleTest = title[8].toLowerCase().split(' ');
        //console.log(titleTest);
        splitId.forEach(element => {
            if(titleTest.includes(element)){
                // console.log('WHOOPIE!!!     WHOOPIE!!!!       WHOOPIE!!!!!');
                let obj = {
                    title: title[8],
                    link: ahref,
                    price: title[12]
                }
                cData.push(obj);
            } else {
                let voidObj = {
                    title: title[8],
                    link: ahref,
                    price: title[12]
                }
                badResults.push(voidObj);
            }
        });
      });

      res.send(cData);
    })
    .catch(function (error) {
      console.log(error);
    });
});



// app.get('/api/facebook', (req, res) => {
//     //var id = req.params.id;

//     axios.get('https://www.facebook.com/marketplace/sanjose/search?query=solar%20panel')
//     .then(function (response) {
//         let page = response.data
//        // console.log(page);
       
//         let badResults = [];
//         let results = [];
//         const $ = cheerio.load(page);

//         let splitPage = page.split('');

//         splitPage.forEach((item) => {
//             console.log(item);
//         });
//     });
// });


app.listen(3000, function() {
    console.log('your listening to port 3000');
});