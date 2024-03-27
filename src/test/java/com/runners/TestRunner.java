package com.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
		features = "C:\\Users\\Dell\\eclipse-workspace\\CucumbFramework-InternetBank1\\src\\test\\resources\\Features\\Login.feature",
glue = {"com.Cucumb.InternetBank.StepDefinations"},
plugin = {"pretty", "html:target/cucumber-reports"}
)

public class TestRunner {

}
