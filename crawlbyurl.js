const request = require('request');
const cheerio = require('cheerio');
const Xpath = require('./xpath');


module.exports = {
    crawlbyurl:function(crawl_url){
        return new Promise(function(resolve, reject) {
            request(crawl_url, function(err, res, body) {
                var $ = cheerio.load(body);
                let tags = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'b', 'u', 'span', 'strong', 'td', 'li', 'center','div'];
                let ingredientkeywords = ['ingredients used', 'ingredients for', 'ingredients in', 'ingredients of', 'ingredients to', 'ingredients'];
                let methodkeywords = ['directions','directions for','method','how to'];
                ingredientTags = Xpath.getElementByXpath(body, tags, ingredientkeywords);
                methodTags = Xpath.getElementByXpath(body, tags, methodkeywords);
    
                var obj = {
                    "ingredients": ingredientTags,
                    "method": methodTags
                }
                resolve(obj);
            })
        })
    }
}




