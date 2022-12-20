package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
    WebElement accountLogOutText;
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement continueButton;

    public LogoutPage() {
        PageFactory.initElements(driver, this);
    }
    public String verifyAccountLogoutText() {
        return getTextFromElement(accountLogOutText);

    }

    public void clickOnContinue() {
        clickOnElement(continueButton);
    }
}
