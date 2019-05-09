module.exports = {
    beforeEach: browser => {
        browser.url('https://www.amazon.com/')
    },
    after: browser => {
        browser.end()
    },
    'search for item': browser => {
        browser
        .setValue('#twotabsearchtextbox', ['cheesecake', browser.Keys.ENTER])
        .waitForElementPresent('.a-color-state')
        .expect.element('.a-color-state').text.to.contain('cheesecake')
    }
}