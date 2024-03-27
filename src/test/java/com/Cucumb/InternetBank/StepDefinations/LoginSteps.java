package com.Cucumb.InternetBank.StepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import com.Cucumb.InternetBank.Pages.LoginPage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class LoginSteps {
	public WebDriver driver;
	
	LoginPage logpag;

	@Given("Browser is open")
	public void browser_is_open() {
	System.setProperty("webdriver.msedge.driver","/CucumbFramework-InternetBank1/src/test/resources/drivers/msedgedriver.exe");
			driver=new EdgeDriver();
			driver.manage().window().maximize(); 
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	}

	@And("User is in loginpage")
	public void user_is_in_loginpage() throws InterruptedException {
	driver.navigate().to("https://demo.guru99.com/V1/index.php");
	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String username, String password) {
		logpag=new LoginPage(driver);
	 logpag.enterUsername(username);
	 logpag.enterPassword(password);
	
	}

	@Then("User click on submit button")
	public void user_click_on_submit_button() {
	logpag.clicklogin();
	try {
        Alert alert = driver.switchTo().alert();
        // Get the alert text
        String alertMessage = alert.getText();
        // Print alert text
        System.out.println("Alert message: " + alertMessage);
        // Dismiss the alert
        alert.dismiss();
    } catch (NoAlertPresentException e) {
        // Alert not present
    }
    
    // Close the WebDriver instance
    driver.quit();
	
	   
	}

			 

}
