package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.DashboardPaketCPage;
import pageObject.LoginPage;

public class DasboardPaketCSteps {

    private WebDriver webDriver;

    public DasboardPaketCSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }


    @Given("User Login \"(.*)\" as email \"(.*)\" as password and direct to Dashboard")
    public void loginToAccountPage(String email, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.ClickloginGoogle();
        loginPage.setEmail(email);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(2000);
        loginPage.setPassword(password);
        Thread.sleep(2000);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(3000);
    }

    @And("User Click Paket C")
    public void verifyClickPaket() throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(2000);
        dashboardPaketCPage.clickPaketC();
        Thread.sleep(3000);

    }

    @Then("User see Dasboard Paket C")
    public void isDashboardIsDisplayed() throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(2000);
        Assert.assertTrue(dashboardPaketCPage.isPageDisplayedPaketC());
        Thread.sleep(3000);
    }

    @When("Check bell Notif")
    public void checkBellNotif()throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(8000);
        dashboardPaketCPage.bellNotif();
        Thread.sleep(8000);


    }


    @When("Open and Input Direct Message to \"(.*)\" as a name")
    public void directMessage(String dmName)throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(8000);
        dashboardPaketCPage.btnDirectMessage();
        Thread.sleep(8000);
        dashboardPaketCPage.inputDirectMessageName(dmName);
        Thread.sleep(8000);
        dashboardPaketCPage.clickYubidmName();
        Thread.sleep(8000);

    }


}
