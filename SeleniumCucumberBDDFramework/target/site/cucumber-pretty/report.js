$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddBankAccount.feature");
formatter.feature({
  "line": 2,
  "name": "Add a Bank Account",
  "description": "\r\nAs a Xero User,\r\nIn order to manage my business successfully,\r\nI want to be able to add an “ANZ (NZ)” bank account inside any Xero Organisation.",
  "id": "add-a-bank-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddBankAccountTesting"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Add an ANZ (NZ) bank account in desired Xero Organisation",
  "description": "",
  "id": "add-a-bank-account;add-an-anz-(nz)-bank-account-in-desired-xero-organisation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User has a valid Log-in credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Choose the desired Organisation",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Adding ANZ (NZ) bank account details",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Bank account successfully added",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Bank account details shown in Bank Accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "AddBankAccountStepDef.user_has_a_valid_Log_in_credentials()"
});
formatter.result({
  "duration": 32758990236,
  "status": "passed"
});
formatter.match({
  "location": "AddBankAccountStepDef.choose_the_desired_Organisation()"
});
formatter.result({
  "duration": 45225991,
  "status": "passed"
});
formatter.match({
  "location": "AddBankAccountStepDef.adding_ANZ_NZ_bank_account_details()"
});
formatter.result({
  "duration": 11563620604,
  "status": "passed"
});
formatter.match({
  "location": "AddBankAccountStepDef.bank_account_successfully_added()"
});
formatter.result({
  "duration": 3426164956,
  "status": "passed"
});
formatter.match({
  "location": "AddBankAccountStepDef.bank_account_details_shown_in_Bank_Accounts_page()"
});
formatter.result({
  "duration": 707717896,
  "status": "passed"
});
});