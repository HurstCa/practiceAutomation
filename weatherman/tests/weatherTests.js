var myData = [
    {search: 'San Diego', result: 'San Diego', selector: '@resultCity'},
    {search: '95820', result: 'Sacramento', selector: '@resultCity'},
    {search: '',  result: 'There was a problem fetching the weather!', selector: '@errorMessage'},
    {serch: '123456789',  result: 'There was a problem fetching the weather!', selector: '@errorMessage'}
]

var weatherPage
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    // 'Search for city': browser => {
    //     search(weatherPage, myData[0])
    // },
    // 'Search for zip': browser => {
    //     search(weatherPage, myData[1])
    // },
    // 'Search for blank': browser => {
    //     search(weatherPage, myData[2])
    // },
    // 'Search for bad zip': browser => {
    //     search(weatherPage, myData[3])
    // },
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
    // },
    'new test': browser => {
        myData.forEach(test=>{
            weatherPage
            .search(test)
        })
    }
}