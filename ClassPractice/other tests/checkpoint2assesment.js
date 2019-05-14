module.exports = {
    'Submit an invalid query': browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent('#versionNumber', 5000)
            .setValue('input[name="namInput"]', 'Waldo Butters')
            .setValue('input[name="offInput"]', 'Polka')
            .verify.value('input[name="offInput"]', 'Polka')
            .click('#saveBtn')
            .expect.element('[name="queryTitle"]').text.to.equal('No results generated due to error.').before(500)
    }
}