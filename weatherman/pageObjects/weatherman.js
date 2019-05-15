var weathermanCommands = {
    search: function(value){
        this.navigate()
        .setValue('@searchBar', value.search)
        .click ('.enter-location__submit')
        .waitForElementPresent(value.selector)
        .expect.element(value.selector).text.to.equal(value.result)
        return this
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weathermanCommands],
    elements: {
        searchBar: '.enter-location__input',
        resultCity: '.current-weather__location',
        errorMessage: '.error-message__message'
    }
}