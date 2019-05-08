module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        browser
        .setValue('.gLFyf', ['cheesecake', browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .verify.containsText('#res', 'cheesecake')
        .pause(5000)
    },
    'Google Search1': browser => {
        browser
        .setValue('.gLFyf', ['software QA', browser.Keys.ENTER])
        .waitForElementVisible('#res')
        .expect.element('#res').text.to.contain('software QA')
        browser
        .pause(5000)
    }

}