package com.Cucumb.InternetBank.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	private WebDriver driver;

	@FindBy(name="uid")
	WebElement uname;
	
	@FindBy(xpath="//input[@name='password']")
	WebElement upass;
	
	@FindBy(name="btnLogin")
	WebElement ulogin;
	public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
	public void enterUsername(String username) {
		uname.sendKeys(username);
	}
	public void enterPassword(String password) {
		upass.sendKeys(password);
	}
	
	public void clicklogin() {
		ulogin.click();
		
	}
	

}
