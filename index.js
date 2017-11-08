const crawl = require('./crawlbyurl');
const CRAWL_URL = "http://cookingshooking.com/recipe/attacake-dprc/";


var methodTags;
var ingredientTags;
var t = [];
crawl.crawlbyurl(CRAWL_URL).then(function(data) {
    console.log("Ing...",data.ingredients[0].text);
    console.log("Method...",data.method[0].text);
}).catch(function(data){
    console.log(data);
})