package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckOutPage extends Utility {

    private static final Logger log = LogManager.getLogger(CheckOutPage.class.getName());


    // By checkOutText = By.xpath("//h1[contains(text(),'Checkout')]");
   @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Checkout')]")
    WebElement checkOutText;
   // By newCustomerText = By.xpath("//h2[contains(text(),'New Customer')]");
   @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'New Customer')]")
    WebElement newCustomerText;
   // By clickOnRadioButton = By.xpath("//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/label[1]/input[1]");
   @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/label[1]/input[1]")
    WebElement clickOnRadioButton;
    //By clickOnContinueButton = By.id("button-account");
    @CacheLookup
    @FindBy(id = "button-account")
    WebElement clickOnContinueButton;
   // By firstName = By.id("input-payment-firstname");
   @CacheLookup
    @FindBy(id = "input-payment-firstname")
    WebElement firstName;
    @CacheLookup
    @FindBy(id = "input-payment-lastname")
    WebElement lastName;
    @CacheLookup
    @FindBy(id = "input-payment-email")
    WebElement email;
    @CacheLookup
    @FindBy(id = "input-payment-telephone")
    WebElement telephone;
    @CacheLookup
    @FindBy(id = "input-payment-address-1")
    WebElement address;
    @CacheLookup
    @FindBy(id = "input-payment-city")
    WebElement city;
    @CacheLookup
    @FindBy(id = "input-payment-postcode")
    WebElement postcode;
    @CacheLookup
    @FindBy(id = "input-payment-country")
    WebElement country;
    @CacheLookup
    @FindBy(id = "input-payment-zone")
    WebElement state;
    @CacheLookup
    @FindBy(id = "button-guest")
    WebElement continueLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger alert-dismissible'][text()='Warning: Payment method required!']")
    WebElement warningMessage;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/p[2]/textarea[1]")
    WebElement addCommentsText;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='checkout-checkout']/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/input[1]")
    WebElement addTerms;

    @CacheLookup
    @FindBy(id = "button-payment-method")
    WebElement checkoutContinueLink;

    public CheckOutPage() {
        PageFactory.initElements(driver, this);
    }
    public String verifyCheckoutText(){
        log.info ("Checkout Text is: " + checkOutText.toString());
        return getTextFromElement(checkOutText);
    }
    public String verifyCustomerText(){
        log.info ("Customer Text is: " + newCustomerText.toString());
        return getTextFromElement(newCustomerText);
    }

    public void clickOnGuestCheckOut(){
        log.info ("Guest CheckOut Button: " + clickOnContinueButton.toString());
        clickOnElement(clickOnRadioButton);
        clickOnElement(clickOnContinueButton);
    }

    public void enterFirstName(String fname){
        log.info ("Enter firstname " + fname + " to email field " + firstName.toString());
        sendTextToElement(firstName,fname);
    }
    public void enterLastName(String lname) {
        log.info  ("Enter lastname " + lname + " to lastname field " + lastName.toString());
        sendTextToElement(lastName, lname);
    }
    public void enterEmail(String emailId) {
        log.info ("Enter email " + emailId + " to email field " + email.toString());
        sendTextToElement(email, emailId);
    }
    public void enterTelephone(String phone) {
        log.info ("Enter phone " + phone + " to telephone field " + telephone.toString());
        sendTextToElement(telephone, phone);
    }
    public void enterAddress(String add) {
        log.info ("Enter address " + add + " to address field " + address.toString());
        sendTextToElement(address, add);
    }
    public void enterCity(String cityname) {
        log.info ("Enter city name " + cityname + " to cityname field " + email.toString());
        sendTextToElement(city, cityname);
    }
    public void enterPostcode(String pcode) {
        log.info ("Enter postcode " + pcode + " to postcode field " + postcode.toString());
        sendTextToElement(postcode, pcode);
    }
    public void entercountry(String text) {
        log.info("Select country from dropdown");
        selectByValueFromDropDown(country, text);
    }
    public void enterState(String text) {
        log.info("Select state from dropdown");
        selectByValueFromDropDown(state, text);
    }

    public void clickOnContinue(){
        log.info ("Clicking on continue button");
        clickOnElement(continueLink);
    }

    public String verifyWarningMethod(){
        log.info ("Warning method is displayed");
        System.out.println("Warning" + getTextFromElement(warningMessage));
        return getTextFromElement(warningMessage);
    }

    public void addComments(){
        log.info ("Adding comments in text");
        sendTextToElement(addCommentsText, "This is my comment");
    }

    public void clickOnCheckBox(){
        log.info ("Clicking on add to terms checkbox");
        clickOnElement(addTerms);
    }

    public void checkOutContinueButton(){
        log.info ("Clicking on continue link");
        clickOnElement(checkoutContinueLink);
    }
}
