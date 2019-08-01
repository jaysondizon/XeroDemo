@AddBankAccountTesting
Feature: Add a Bank Account 

As a Xero User,
In order to manage my business successfully,
I want to be able to add an “ANZ (NZ)” bank account inside any Xero Organisation.

Scenario: Add an ANZ (NZ) bank account in desired Xero Organisation
Given User has a valid Log-in credentials
And Choose the desired Organisation
When Adding ANZ (NZ) bank account details 
Then Bank account successfully added
And Bank account details shown in Bank Accounts page