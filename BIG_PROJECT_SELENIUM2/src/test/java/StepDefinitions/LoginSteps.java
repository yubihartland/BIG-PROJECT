package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pageObject.DashboardPaketCPage;
import pageObject.LoginPage;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;

public class LoginSteps {

    private WebDriver webDriver;

    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("User open the Cicle Sign page")
    public void verifyLoginPageIsDisplayed(){
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.ClickloginGoogle();
    }

    @When("User input \"(.*)\" as email \"(.*)\" as password")
    public void inputCreadential(String email, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setEmail(email);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(2000);
        loginPage.setPassword(password);
        Thread.sleep(2000);
        loginPage.clickBtnBerikutnya();

    }

    @Then("User see dashboard")
    public void isDashboardIsDisplayed() throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(2000);
        Assert.assertTrue(dashboardPaketCPage.isPageDisplayed());
    }

    @When("User input \"(.*)\" as email \"(.*)\" as null password")
    public void invalidLogin(String email, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setEmail(email);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(2000);
        loginPage.setPassword(password);
        Thread.sleep(2000);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(2000);

    }




}


