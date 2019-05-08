module.exports = {
    before: browser => {
        browser.url('https://www.keybr.com/')
    },
    after: browser => {
        browser.end()
    },

    'test': browser => {
        browser
            .waitForElementPresent('path[d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"]')
            .click('path[d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"]')
            .waitForElementPresent('.TextInput-label')
            .click('.TextInput-label')
            .waitForElementPresent('input[type="text"]')
            .setValue('input[type="text"]', '.TextInput-fragment')
            .pause(10000)
    }
}