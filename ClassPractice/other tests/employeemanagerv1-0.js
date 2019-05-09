module.exports = {
    beforeEach: browser => {
        var emp = {
            e1:'[name=employee1]',
            e2:'[name=employee2]',
            e4:'[name=employee4]',
            e5:'[name=employee5]',
            e7:'[name=employee7]',
            e8:'[name=employee8]',
            e9:'[name=employee9]',
            title:'[name="titleEntry"]'
            Name:'[name="nameEntry"]'
            phone:'[name="phoneEntry"]'
            }
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    
    after: browser => {
        browser.end()
    },

    'Problem 1': browser => {
        browser
        // the bug is that the name change is saving without clicking the save button.
            .click('[name="employee7"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'Billy Bob')
            .click('[name="employee9"]')
            .verify.value('[name="nameEntry"]', 'Eve Sparks')
            .click('[name="employee7"]')
            .verify.value('[name="nameEntry"]', 'Ruby Estrada')
    },
    // the phone number is not saving
    'Problem 2': browser => {
        browser
            .click('[name="employee5"]')
            .clearValue('[name="titleEntry"]')
            .setValue('[name="titleEntry"]', 'Best Manager Ever')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '1234567890')
            .click('#saveBtn')
            .click('[name="employee8"]')
            .expect.element('[name="titleEntry"]').value.not.to.equal('Best Manager Ever')
        browser
            .click('[name="employee5"]')
            .expect.element('[name="phoneEntry"]').value.to.equal('1234567890')
        browser
            .expect.element('[name="titleEntry"]').value.to.equal('Best Manager Ever')
    },
    // No bugs.
    'Problem 3': browser => {
        browser
            .click('[name="employee1"]')
            .waitForElementPresent('[name="nameEntry"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', 'New Person')
            .click('#saveBtn')
            .click('[name="employee2"]')
            .expect.element('[name="nameEntry"]').value.not.to.equal('New Person').before(2000)
        browser
            .click('[name="employee1"]')
            .expect.element('[name="nameEntry"]').value.to.equal('New Person').before(2000)
    },
//    It is allowing the name to be blank.
    'Problem 4': browser => {
        browser
            .click('[name="employee5"]')
            .clearValue('[name="nameEntry"]')
            .click('#saveBtn')
            .assert.containsText('.errorCard', 'The name field must be between 1 and 30 characters long.')
            .verify.value('[name="nameEntry"]', 'Dollie Berry')
    },
// the ID: for employee 4 needs to be positive.   
'Problem 5': browser => {
        browser
            .click('[name="employee4"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('[name="phoneEntry"]', '8015551234')
            .click('#cancelBtn')
            .click('[name="employee5"]')
            .click('[name="employee4"]')
            .expect.element('[name="phoneEntry"]').value.not.to.equal('8015551234')
    }
}