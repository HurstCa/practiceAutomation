var enterWanted = (browser, selector, info, error) => {
    browser
    .click('@burger')
    .waitForElementVisible('@ewpage')
    .click('@ewpage')
    .click('@clbrg')
    .setValue(selector, info)
    .pause(500)
    .click('#saveBtn')
    .verify.containsText('#errorList', error)
}

var modifyWanted = (browser, selector, info, error) => {
    browser
    .click('@burger')
    .waitForElementVisible('@mwpage')
    .click('@mwpage')
    .click('@clbrg')
    .setValue(selector, info)
    .pause(500)
    .click('#saveBtn')
    .verify.containsText('#errorList', error)
}

var cancelWanted = (browser, selector, info, error) => {
    browser
    .click('@burger')
    .waitForElementVisible('@cwpage')
    .click('@cwpage')
    .click('@clbrg')
    .setValue(selector, info)
    .pause(500)
    .click('#saveBtn')
    .verify.containsText('#errorList', error)
}

var wantedpg
module.exports = {
    beforeEach: browser => {
        wantedpg = browser.page.wantedQueries()
        wantedpg.navigate()
    },
    'header min': browser => {
       enterWanted(wantedpg, '@header', 'asdlfj78', 'The "Header" field should be between 9 and 19 characters long.')
    },
    'header max': browser => {
        enterWanted(wantedpg, '@header', '12345678912345678912', 'The "Header" field should be between 9 and 19 characters long.')
    },
    'MKE invalid characters': browser => {
        enterWanted(wantedpg, '@mke', '123', 'The "MKE" field can only include characters from the English Alphabet or special characters.')
    },
    'MKE min': browser => {
        enterWanted(wantedpg, '@mke', '1', 'The "MKE" field should be between 2 and 4 characters long.')
    },
    'MKE max': browser => {
        enterWanted(wantedpg, '@mke', '12345', 'The "MKE" field should be between 2 and 4 characters long.')
    },
    'OAI min': browser => {
        enterWanted(wantedpg, '@oai', '12345678', 'The "Originating Agency Identifier" field should be 9 characters long.')
    },
    'OAI max': browser => {
        enterWanted(wantedpg, '@oai', '1234567891', 'The "Originating Agency Identifier" field should be 9 characters long.')
    },
    'name min': browser => {
        enterWanted(wantedpg, '@name', 'ab', 'The "Name" field should be between 3 and 30 characters long.')
    },
    'name max': browser => {
        enterWanted(wantedpg, '@name', 'qwertyuiopasdfghjklzxcvbnmlkjhg', 'The "Name" field should be between 3 and 30 characters long.')
    },
    'height invalid characters': browser => {
        enterWanted(wantedpg, '@height', 'abc', 'The "Height" field can only include numeric characters.')
    },
    'height min': browser => {
        enterWanted(wantedpg, '@height', '12', 'The "Height" field should be 3 characters long.')
    },
    'height max': browser => {
        enterWanted(wantedpg, '@height', '1234', 'The "Height" field should be 3 characters long.')
    },
    'weight invalid characters': browser => {
        enterWanted(wantedpg, '@weight', 'abc', 'The "Weight" field can only include numeric characters.')
    },
    'weight min': browser => {
        enterWanted(wantedpg, '@weight', '0', 'The "Weight" field needs to have a value greater than 0.')
    },
    'weight max': browser => {
        enterWanted(wantedpg, '@weight', '1234', 'The "Weight" field should be between 1 and 3 characters long.')
    },
    'hair invalid characters': browser => {
        enterWanted(wantedpg, '@hair', '123', 'The "Hair" field can only include characters from the English Alphabet or special characters.')
    },
    'hair min': browser => {
        enterWanted(wantedpg, '@hair', 'ab', 'The "Hair" field should be between 3 and 10 characters long.')
    },
    'hair max': browser => {
        enterWanted(wantedpg, '@hair', 'qwertyuiopa', 'The "Hair" field should be between 3 and 10 characters long.')
    },
    'offense min': browser => {
        enterWanted(wantedpg, '@offense', 'abcd', 'The "Offense" field should be between 5 and 15 characters long.')
    },
    'offense max': browser => {
        enterWanted(wantedpg, '@offense', 'qwertyuiopasdfgh', 'The "Offense" field should be between 5 and 15 characters long.')
    },
    'Date of Warrant min': browser => {
    enterWanted(wantedpg, '@dow', '12311899', `The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today's date.`)
    },
    'Date of Warrant max': browser => {
    enterWanted(wantedpg, '@dow', '05152019', ``)
    },

    // Modify Wanted
    'Warrant ID invalid': browser => {
        modifyWanted(wantedpg, '@warrantID', 'asdfghjklp', 'The "Warrant ID" field can only include numeric characters.')
    },
    'Warrant ID min': browser => {
        modifyWanted(wantedpg, '@warrantID', '123456789', `The "Warrant ID" field should be 10 characters long.`)
    },
    'Warrant ID max': browser => {
        modifyWanted(wantedpg, '@warrantID', '12345678912', `The "Warrant ID" field should be 10 characters long.`)
    },
    'header min': browser => {
        modifyWanted(wantedpg, '@header', 'asdlfj78', 'The "Header" field should be between 9 and 19 characters long.')
     },
     'header max': browser => {
        modifyWanted(wantedpg, '@header', '12345678912345678912', 'The "Header" field should be between 9 and 19 characters long.')
     },
     'MKE invalid characters': browser => {
        modifyWanted(wantedpg, '@mke', '123', 'The "MKE" field can only include characters from the English Alphabet or special characters.')
     },
     'MKE min': browser => {
        modifyWanted(wantedpg, '@mke', '1', 'The "MKE" field should be between 2 and 4 characters long.')
     },
     'MKE max': browser => {
        modifyWanted(wantedpg, '@mke', '12345', 'The "MKE" field should be between 2 and 4 characters long.')
     },
     'OAI min': browser => {
        modifyWanted(wantedpg, '@oai', '12345678', 'The "Originating Agency Identifier" field should be 9 characters long.')
     },
     'OAI max': browser => {
        modifyWanted(wantedpg, '@oai', '1234567891', 'The "Originating Agency Identifier" field should be 9 characters long.')
     },
     'name min': browser => {
        modifyWanted(wantedpg, '@name', 'ab', 'The "Name" field should be between 3 and 30 characters long.')
     },
     'name max': browser => {
        modifyWanted(wantedpg, '@name', 'qwertyuiopasdfghjklzxcvbnmlkjhg', 'The "Name" field should be between 3 and 30 characters long.')
     },
     'height invalid characters': browser => {
        modifyWanted(wantedpg, '@height', 'abc', 'The "Height" field can only include numeric characters.')
     },
     'height min': browser => {
        modifyWanted(wantedpg, '@height', '12', 'The "Height" field should be 3 characters long.')
     },
     'height max': browser => {
        modifyWanted(wantedpg, '@height', '1234', 'The "Height" field should be 3 characters long.')
     },
     'weight invalid characters': browser => {
        modifyWanted(wantedpg, '@weight', 'abc', 'The "Weight" field can only include numeric characters.')
     },
     'weight min': browser => {
        modifyWanted(wantedpg, '@weight', '0', 'The "Weight" field needs to have a value greater than 0.')
     },
     'weight max': browser => {
        modifyWanted(wantedpg, '@weight', '1234', 'The "Weight" field should be between 1 and 3 characters long.')
     },
     'hair invalid characters': browser => {
        modifyWanted(wantedpg, '@hair', '123', 'The "Hair" field can only include characters from the English Alphabet or special characters.')
     },
     'hair min': browser => {
        modifyWanted(wantedpg, '@hair', 'ab', 'The "Hair" field should be between 3 and 10 characters long.')
     },
     'hair max': browser => {
        modifyWanted(wantedpg, '@hair', 'qwertyuiopa', 'The "Hair" field should be between 3 and 10 characters long.')
     },
     'offense min': browser => {
        modifyWanted(wantedpg, '@offense', 'abcd', 'The "Offense" field should be between 5 and 15 characters long.')
     },
     'offense max': browser => {
        modifyWanted(wantedpg, '@offense', 'qwertyuiopasdfgh', 'The "Offense" field should be between 5 and 15 characters long.')
     },
     'Date of Warrant min': browser => {
        modifyWanted(wantedpg, '@dow', '12311899', `The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today's date.`)
     },
     'Date of Warrant max': browser => {
        modifyWanted(wantedpg, '@dow', '05152019', ``)
     },

    //  Cancel Wanted
    'Warrant ID invalid': browser => {
        cancelWanted(wantedpg, '@warrantID', 'asdfghjklp', 'The "Warrant ID" field can only include numeric characters.')
    },
    'Warrant ID min': browser => {
        cancelWanted(wantedpg, '@warrantID', '123456789', `The "Warrant ID" field should be 10 characters long.`)
    },
    'Warrant ID max': browser => {
        cancelWanted(wantedpg, '@warrantID', '12345678912', `The "Warrant ID" field should be 10 characters long.`)
    },
    'reason for cancellation min': browser => {
        cancelWanted(wantedpg, '@roc', 'abcd12345', 'The "Reason for Cancellation" field should be between 10 and 150 characters long.')
     },
     'reason for cancellation max': browser => {
        cancelWanted(wantedpg, '@roc', 'AaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadddddddddddddddsagadgdaewvwererwervSDwvWCFDSADFADFSFBGBSERTHDNNHtfhndthdnghbsrgpkjhafpiuhekjvnpuhdfvklajd12345678901', 'The "Reason for Cancellation" field should be between 10 and 150 characters long.')
    },
    'Date of Cancellation min': browser => {
        cancelWanted(wantedpg, '@doc', '12311899', `The "Date of Cancellation" field can only include characters from the English Alphabet or numeric characters.`)
     },
     'Date of Cancellation max': browser => {
        cancelWanted(wantedpg, '@doc', '05152019', ``)
     },
}