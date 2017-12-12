const assert = require('assert'),
    should = require('should'),
    expect = require('chai').expect;
const crawl = require('../crawlbyurl');
const crawlurl = require('../crawlurl');
const cheerio = require('cheerio');
const request = require('request');


describe('Archana Kitchen', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    it('length check', function () {
      //  this.timeout(5000);
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.ARCHANA_KITCHEN).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(1);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.ARCHANA_KITCHEN).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients');
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.ARCHANA_KITCHEN).then((data) => {
            let methodText = data.method[1].text;
            expect(methodText).to.equal('How To Write a Recipe');
        })

    })
});


describe('Recipe Timesofindia', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.TIMESOFINDIA).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(2);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.TIMESOFINDIA).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients of Ice Cream Cake with Oreo Cookies');
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.TIMESOFINDIA).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How to make Ice Cream Cake with Oreo Cookies');
        })

    })
});

describe('Sanjeev Kapoor', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.SANJEEV_KAPOOR).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(2);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.SANJEEV_KAPOOR).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients for Eggless Mawa Elaichi Doughnuts Recipe');           
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.SANJEEV_KAPOOR).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How to make Eggless Mawa Elaichi Doughnuts -  ');
        })

    })
});

describe('Varehvah', function () {
    // beforeEach(function () {
    //     this.timeout(9000);
    // });
   
    it('length check', function (done) {
        var x = "";
        var t = [];
        
        return crawl.crawlbyurl(crawlurl.VAREHVAH).then((data) => {
            setTimeout(()=>{
                t.push(data);
                x = t[0].ingredients;
                expect(x).to.have.lengthOf(4);
            },10000);
          
           
        })
       
    })
    it('ingredient tag check', function (done) {

        return crawl.crawlbyurl(crawlurl.VAREHVAH).then((data) => {

            setTimeout(()=>{
                let ingredientText = data.ingredients[0].text;
                expect(ingredientText).to.equal('Ingredients for Eggless Mawa Elaichi Doughnuts Recipe');  
            },10000)
          
  
           })
          

    })
    it('method tag check', function (done) {
        return crawl.crawlbyurl(crawlurl.VAREHVAH).then((data) => {
            setTimeout(function() {
                let methodText = data.method[0].text;
                expect(methodText).to.equal('How to make Eggless Mawa Elaichi Doughnuts -  ');
            }, 10000);
           
           
            
        })
       
    })
});

describe('Food Ndtv', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.FOOD_NDTV).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(3);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.FOOD_NDTV).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients of Seafood Broth');           
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.FOOD_NDTV).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How to Make Seafood Broth');
        })

    })
});




describe('Scretindianrecipe.com', function () {
    beforeEach(function () {
        this.timeout(5000);
    });
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.SECRET_INDIAN).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(1);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.SECRET_INDIAN).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients:&nbsp;');           
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.SECRET_INDIAN).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How To Use');
        })

    })
});



describe('Cookingshooking.com', function () {
    beforeEach(function () {
        this.timeout(9000);
    });
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(crawlurl.COOKING_SHOOKING).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(2);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(crawlurl.COOKING_SHOOKING).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients used in ');           
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(crawlurl.COOKING_SHOOKING).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('Ingredients used in ');
        })

    })
});

