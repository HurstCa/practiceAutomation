let manager = {}
let editTest = require('../testAssets/editTest')
var newEmployee = {name: "Cameron", phone: "1231231234", title: 'Master'}
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employee()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    // 'It can add an employee': browser => {
    //     manager
    //         .click('@addButton')
    //         .clickEmployee('New Employee')
    //         .expect.element('@cardTitle').text.to.equal('New Employee')
    // },
    // 'It can edit a new employee': browser => {
    //     manager
    //         .click('@addButton')
    //         .clickEmployee('New Employee')
    //         .editEmployee({ name: 'Hank Hill', phone: '0000000000' })
    //         .click('@saveButton')
    //         .expect.element('@cardTitle').text.to.equal('Hank Hill')
    //     manager
    //         .clickEmployee('Dollie Berry')
    //         .expect.element('@cardTitle').text.to.equal('Dollie Berry')
    //     manager
    //         .clickEmployee('Hank Hill')
    //         .expect.element('@cardTitle').text.to.equal('Hank Hill')
    // },
    'It can edit an existing employee': browser => {
        manager
            .editTest('Dollie Berry', newEmployee, 'Teresa Osborne')
    }
}