var searchres = (browser, value) => {
browser
.setValue('.gLFyf', [value, browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .verify.containsText('#res', value)
        .pause(5000)

}
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        searchres(browser, 'cheesecake')
    },
    'Google Search1': browser => {
        searchres(browser, 'software QA')
    }

}