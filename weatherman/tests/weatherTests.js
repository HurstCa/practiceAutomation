var search = (browser, value, selector, city) => {
    browser
    .setValue('@searchBar', value)
    .click ('.enter-location__submit')
    .waitForElementPresent(selector)
    .expect.element(selector).text.to.equal(city)
}
var weatherPage
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    'Search for city': browser => {
       search(weatherPage, 'San Diego', '@resultCity', 'San Diego')
    },
    'Search for zip': browser => {
        search(weatherPage, '95820', '@resultCity', 'Sacramento')
    },
    'Search for blank': browser => {
        search(weatherPage, '', '@errorMessage',  'There was a problem fetching the weather!')
    },
    'Search for bad zip': browser => {
        search(weatherPage, '123456789', '@errorMessage',  'There was a problem fetching the weather!')
    },
    // 'Search again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '95820')
    //         .click('@searchButton')
    //         .waitForElementPresent('@resultCity')
    //         .click('@searchAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'Try again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '')
    //         .click('@searchButton')
    //         .waitForElementPresent('@errorMessage')
    //         .click('@tryAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // }
}