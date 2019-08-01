package com.testautomation.TestRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
		// Tagging and implementing StepDef in the feature/feature folder
		features = "./features", glue = { "com.testautomation.StepDef" }, tags = { "@AddBankAccountTesting" },

		// Generating html report
		plugin = { "pretty", "html:target/site/cucumber-pretty", "json:target/cucumber.json" }, monochrome = true)

public class TestRunner {
	// Creating reference variable of TestNGCucumberRunner
	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun = true)
	public void setUpClass() throws Exception {
		// Getting the TestRunner class and all properties
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		// Provides parameter data provider in features
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		// Provides data to features in CucumberOptions
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass
	public void tearDownClass() throws Exception {
		// Closing the runner
		testNGCucumberRunner.finish();
	}
}
