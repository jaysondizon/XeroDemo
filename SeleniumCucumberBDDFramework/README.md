# SeleniumCucumberBDDFramework

This is a solution for the Coding Exercise - QA Analyst with below User Story.
It is written in java and gherkin in Cucumber and TestNG Framework using Selenium Webdriver in Google Chrome browser

User Story
As a Xero User,
In order to manage my business successfully,
I want to be able to add an “ANZ (NZ)” bank account inside any Xero Organisation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Give examples
1. Download Eclipse IDE for Java Developers Version: 2018-09 (4.9.0) (used in this environment)
2. Install Java SE 12 JDK (used in this environment)
3. Configure Environment variables for system variable and system path
4. Download Google Chrome webdriver (chromedriver.exe).
 
```

### Environment Setup

```
1. Checkout the project in the repository with project name "SeleniumCucumberBDDFramework" to your machine.
2. Open Eclipse IDE Application from the downloaded folder and define the workspace directory when asked during startup.
3. Proceed to WorkBench to be able to use workspace resources.
4. Right click on the Package Explorer window and click Import to import the whole project that has been checked-out on step 1.
5. After all the files has been loaded, you are now ready to execute the test.

```

## Running the tests

1. Before running the test, configure the directory of your your chromedriver.exe.
You can edit it by opening SeleniumCucumberBDDFramework\src\com\testautomation\Utility\Utility.java
```
	// Chrome driver directory
	public static String chromeDir() {
		String chromeDir = "C:\\Training\\chromedriver.exe";
		return chromeDir;
```

2. On the same java class, configure the location of envconfig.properties file.
You can find it in SeleniumCucumberBDDFramework\resources\envconfig.properties. It may depend on you workspace location. 
Just right click the file and click properties to get the directory and change the value below.

```
	// Environment configuration property directory
	public static String envPropertDir() {
		String envPropertDir = "E:\\SeleniumCucumberBDDFramework\\SeleniumCucumberBDDFramework\\resources\\envconfig.properties";
		return envPropertDir;
	}
```

3. Open the file envconfig.properties. This is one of the important file to configure before running the test.
Configure first the static properties for each user such as

```
Email=user email
Password=user password

example:
Email=john.doe@gmail.com
Password=jdp@ss123
```
You do not need to change the baseURL.

Configure the other properties.
Change this if you have a different Organization
```
DesiredOrganisation=Demo Company (AU)

```
Change this parameter every test run 
```
AccountName=Sample Bank Account
AccountNumber=111222333444
```
Change this parameter every test run (quickly run the test after changing so that the Authentication Key can be used before expiring)
```
AuthKey=383488
```

4. You can now run the test by right clicking the TestNG xml file located in \SeleniumCucumberBDDFramework\testng.xml.
Run As a TestNG Suite

5. You can check the logs during execution in the Console view or view the report after execution in:
SeleniumCucumberBDDFramework\target\site\cucumber-pretty\index.html


## Authors

* **Jayson Dizon** - *Initial work*

