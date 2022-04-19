package StepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.CheckinsPage;
import pageObject.DashboardPaketCPage;
import pageObject.LoginPage;

import static java.lang.Thread.sleep;

public class CheckinsSteps {

    private WebDriver webDriver;

    public CheckinsSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("User Login \"(.*)\" as email \"(.*)\" as password and direct to Paket C")
    public void inputCreadential(String email, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.ClickloginGoogle();
        loginPage.setEmail(email);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(2000);
        loginPage.setPassword(password);
        Thread.sleep(2000);
        loginPage.clickBtnBerikutnya();
        Thread.sleep(5000);
    }

    @And("User go to Dasboard Paket C")
    public void verifyClickPaket() throws InterruptedException {
        DashboardPaketCPage dashboardPaketCPage = new DashboardPaketCPage(webDriver);
        Thread.sleep(3000);
        dashboardPaketCPage.clickPaketC();
        Thread.sleep(5000);
    }

    @Then("User see Check-ins page")
    public void isDashboardIsDisplayed() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickCheckinsButton();
        Thread.sleep(2000);
        Assert.assertTrue(checkinsPage.isPageDisplayedCheckins());
        Thread.sleep(5000);
    }

    @When("User Click Create Checkin")
    public void clickCreateCheckin() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(2000);
        checkinsPage.clickCreateCheckin();
        Assert.assertTrue(checkinsPage.isPageDisplayedCreateCheckin());
        Thread.sleep(3000);
    }

    @When("input \"(.*)\" in question box")
    public void inputQuestionBox(String question) throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(2000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(2000);
        checkinsPage.inputQuestion(question);
        Thread.sleep(3000);
    }

    @When("Click day and Choose Monday until Sunday")
    public void clickAndChooseDay() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(2000);
        checkinsPage.clickCreateCheckin();
        checkinsPage.clickTuesday();
        Thread.sleep(2000);
        checkinsPage.clickWednesday();
        Thread.sleep(2000);
        checkinsPage.clickThursday();
        Thread.sleep(2000);
        checkinsPage.clickFriday();
        Thread.sleep(2000);
        checkinsPage.clickSaturday();
        Thread.sleep(2000);
        checkinsPage.clickSunday();
        Thread.sleep(3000);

    }

    @When("User Tag Member yubihartland")
    public void ClicktagMember() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(2000);
        checkinsPage.clickCreateCheckin();
        checkinsPage.clickTagMember();
        Thread.sleep(5000);
        checkinsPage.clickTagYubi();
        Thread.sleep(3000);
    }

    @When("User Click private check")
    public void privateCheck() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(2000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(2000);
        checkinsPage.clickCheckPrivate();
        Thread.sleep(3000);
    }

    @Then("User input \"(.*)\" as Question and Click Start Collecting Answer")
    public void ClickstartCollecting(String qstn) throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(3000);
        checkinsPage.inputQuestion(qstn);
        Thread.sleep(3000);
        checkinsPage.clickStartColletingButton();
        Thread.sleep(3000);
    }

    @Then("Click Cancel Button And go to Checkin Page")
    public void cancelStartCollectingButton() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(3000);
        checkinsPage.clickCancelStartColletingButton();
        Thread.sleep(3000);
        Assert.assertTrue(checkinsPage.isPageDisplayedCheckins());
        Thread.sleep(3000);

    }

    @Then("Click Data Checkin and verify")
    public void clickDataheckin() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickDataCheckinPage();
        Thread.sleep(3000);
        Assert.assertTrue(checkinsPage.verifyDataCheckin());
        Thread.sleep(3000);

    }

    @When("Click Home Button")
    public void clickHomeButton() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickDataCheckinPage();
        Thread.sleep(3000);
        checkinsPage.clickHome();
        Thread.sleep(3000);

    }

    @When("Input \"(.*)\" as Comment and save Comment")
    public void InputComment(String comment) throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickDataCheckinPage();
        Thread.sleep(3000);
        checkinsPage.clickCommentBoxInput();
        Thread.sleep(5000);
        checkinsPage.inputCommentBoxInside(comment);
        Thread.sleep(3000);
        checkinsPage.saveButtonCommentInside();
        Thread.sleep(3000);

    }

    @When("Set Date \"(.*)\" as a time")
    public void SetdateCheckIn(String date) throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(3000);
        checkinsPage.setTimeDate(date);
        Thread.sleep(3000);

    }

    @When("Input \"(.*)\" in Question box")
    public void InputBoxNoDay(String noDay) throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickCreateCheckin();
        Thread.sleep(3000);
        checkinsPage.inputQuestion(noDay);
        Thread.sleep(3000);
        checkinsPage.clickMonday();
        Thread.sleep(3000);

    }

    @And("Null Input Day with verify response")
    public void NullDayInput() throws InterruptedException {
        CheckinsPage checkinsPage = new CheckinsPage(webDriver);
        Thread.sleep(3000);
        checkinsPage.clickFriday();
        Thread.sleep(8000);
        checkinsPage.clickMonday();
        Thread.sleep(2000);
        checkinsPage.clickFriday();
        Thread.sleep(2000);
        checkinsPage.clickStartNull();
        Thread.sleep(2000);
        Assert.assertTrue(checkinsPage.verifyNullDay());
        Thread.sleep(2000);


    }




}

