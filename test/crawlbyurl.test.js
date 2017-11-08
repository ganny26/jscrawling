const assert = require('assert'),
    should = require('should'),
    expect = require('chai').expect;
const crawl = require('../crawlbyurl');
const craulurl = require('../crawlurl');
const cheerio = require('cheerio');
const request = require('request');


describe('Archana Kitchen', function () {
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(craulurl.ARCHANA_KITCHEN).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(1);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(craulurl.ARCHANA_KITCHEN).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients');
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(craulurl.ARCHANA_KITCHEN).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('Directions for Sweet Lime Soda Recipe ');
        })

    })
});


describe('Recipe Timesofindia', function () {
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(craulurl.TIMESOFINDIA).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(2);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(craulurl.TIMESOFINDIA).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients of Ice Cream Cake with Oreo Cookies');
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(craulurl.TIMESOFINDIA).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How to make Ice Cream Cake with Oreo Cookies');
        })

    })
});

describe('Sanjeev Kapoor', function () {
    it('length check', function () {
        var x = "";
        var t = [];
        return crawl.crawlbyurl(craulurl.SANJEEV_KAPOOR).then((data) => {
            t.push(data);
            x = t[0].ingredients;
            expect(x).to.have.lengthOf(2);
        })
    })
    it('ingredient tag check', function () {
        return crawl.crawlbyurl(craulurl.SANJEEV_KAPOOR).then((data) => {
            let ingredientText = data.ingredients[0].text;
            expect(ingredientText).to.equal('Ingredients for Eggless Mawa Elaichi Doughnuts Recipe');           
           })

    })
    it('method tag check', function () {
        return crawl.crawlbyurl(craulurl.SANJEEV_KAPOOR).then((data) => {
            let methodText = data.method[0].text;
            expect(methodText).to.equal('How to make Eggless Mawa Elaichi Doughnuts -  ');
        })

    })
});

