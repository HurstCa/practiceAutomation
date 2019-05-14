var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://www.livepickleball.com/#/')
    },
    after: browser => {
        browser.end()
    },
    'login': browser => {
        browser
        clickByText(browser, 'Profile')
        browser
            .waitForElementVisible('[placeholder=email]')
            .setValue('[placeholder=email]', 'qatest')
            .setValue('[placeholder=password]', 'testpass')
        clickByText(browser, 'Login')
        browser
            .waitForElementVisible('h3')

    },
    //     'add match': browser => {
    //         browser
    //         .click('[href="#/add"]')
    //         .waitForElementVisible('h5')
    //         .setValue('[placeholder="Tournament Name"]', 'testtest123')
    //         .setValue('[placeholder="court number"]', '6')
    //         .click('[value="Doubles"]')
    //         .click('[value="Mixed"]')
    //         .click('[value="Open/ Pro"]')
    //         .click('[value="Senior Open"]')
    //         .click('.startMatchButton')
    //         .waitForElementVisible('.searchName')
    //         .setValue('.searchName', 'Charlie Brwon')
    //         .click('h5')
    //         .click('.startMatchButton')
    //         .waitForElementVisible('.btn-success')
    //         .click('.btn-success')
    //     }
}