var testData = [
    // {loanType: '', propretyType: '', propertyUse: '', price: '', downPayment: '', creditRating: '', creditHistory: '', results: ['']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="poor"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="poor"]', creditHistory: 'button[value="Has had bankruptcy before"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="poor"]', creditHistory: 'button[value="Has had a foreclosure before"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="poor"]', creditHistory: 'button[value="Has had both a foreclosure and a bankruptcy"]', results: ['unable', 'counselling']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="fair"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="fair"]', creditHistory: 'button[value="Has had bankruptcy before"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="fair"]', creditHistory: 'button[value="Has had a foreclosure before"]', results: ['unable']},
    // {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '100000', downPayment: '20000', creditRating: 'button[value="fair"]', creditHistory: 'button[value="Has had both a foreclosure and a bankruptcy"]', results: ['unable', 'counselling']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '1000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Steve']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '1000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Steve', 'Melissa']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '5000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Steve', 'Stella']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Primary Home"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Steve', 'Melissa', 'Stella']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Secondary Home"]', price: '1000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Jan']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Secondary Home"]', price: '1000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Jan', 'Melissa']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Secondary Home"]', price: '5000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Jan', 'Stella']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Secondary Home"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Jan', 'Melissa', 'Stella']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Rental Property"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Jan', 'Melissa', 'Stella']},
    {loanType: '#loanTypes option[value="Refinance"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Rental Property"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['corporate']},
    {loanType: '#loanTypes option[value="Home Equity"]', propretyType: '#propertyTypes option[value="Condo"]', propertyUse: 'button[value="Rental Property"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['corporate']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Multi Family Dwelling"]', propertyUse: 'button[value="Primary Home"]', price: '1000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Mike']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Multi Family Dwelling"]', propertyUse: 'button[value="Primary Home"]', price: '1000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Mike', 'Melissa']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Multi Family Dwelling"]', propertyUse: 'button[value="Primary Home"]', price: '5000', downPayment: '5000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Mike', 'Stella']},
    {loanType: '#loanTypes option[value="Home Purchase"]', propretyType: '#propertyTypes option[value="Multi Family Dwelling"]', propertyUse: 'button[value="Primary Home"]', price: '251000', downPayment: '251000', creditRating: 'button[value="excellent"]', creditHistory: 'button[value="Has never been in bankruptcy"]', results: ['Mike', 'Melissa', 'Stella']},

]

module.exports = {
    // beforeEach: browser => browser.url('http://localhost:3001'),
    after: browser => browser.end(),
    'Test the form': browser => {
        testData.forEach(test => {
            browser
                .url('http://localhost:3000')
                .click('button')
                .waitForElementVisible('#loanTypes')
                .click(test.loanType)
                .click(test.propretyType)
                .click('button')
                .waitForElementVisible('input[name="city"]')
                .setValue('input[name="city"]', 'Lehi, UT')
                .click('button')
                .waitForElementVisible('button[value="Primary Home"]')
                .click(test.propertyUse)
                .waitForElementVisible('button[name="yesButton"]')
                .click('button[name="yesButton"]')
                .waitForElementVisible('button[name="noButton"]')
                .click('button[name="noButton"]')
                .waitForElementVisible('input[name="price"]')
                .setValue('input[name="price"]', test.price)
                .setValue('input[name="down"]', test.downPayment)
                .click('button')
                .waitForElementVisible('button[value="excellent"]')
                .click(test.creditRating)
                .waitForElementVisible('button[value="Has never been in bankruptcy"]')
                .click(test.creditHistory)
                .waitForElementVisible('#addressOne')
                .setValue('#addressOne', '341 S Main St')
                .setValue('#addressTwo', 'Ste 100')
                .setValue('#addressThree', 'Salt Lake City, UT 84111')
                .click('button')
                .waitForElementVisible('#first')
                .setValue('#first', 'AJ')
                .setValue('#last', 'Larson')
                .setValue('#email', 'aj@devmounta.in')
                .click('button')
                .waitForElementVisible('button[name="sendButton"]')
                .click('button[name="sendButton"]')
                .waitForElementVisible('.margin-btn')
                .useXpath()
            test.results.forEach(result => {
                browser.verify.containsText('//p[2]', result)
            })    
            browser
                .useCss()
        })
    }
}