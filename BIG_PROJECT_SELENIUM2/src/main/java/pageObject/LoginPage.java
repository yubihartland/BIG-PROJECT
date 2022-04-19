package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    private static WebDriver driver;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }



    @FindBy(xpath = " //div[.='Login with Google Account']")
    private WebElement logintoGoogle;

    @FindBy(xpath = "//input[@id='identifierId']")
    private WebElement inputEmail;

    @FindBy(xpath = "//span[.='Berikutnya']")
    private WebElement buttonBerikutnya;

    @FindBy(xpath = "//input[@name='password']")
    private WebElement inputPassword;





    public void ClickloginGoogle(){
        logintoGoogle.click();
    }

    public void setEmail(String eml){
        inputEmail.sendKeys(eml);
    }

    public void clickBtnBerikutnya(){
        buttonBerikutnya.click();
    }

    public void setPassword(String pswd){
        inputPassword.sendKeys(pswd);
    }





}
