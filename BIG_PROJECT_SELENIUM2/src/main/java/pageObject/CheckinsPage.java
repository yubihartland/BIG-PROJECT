package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckinsPage {

    private static WebDriver driver;

    public CheckinsPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    // click checkinMenu
    @FindBy(xpath = "//h1[.='Check-Ins']")
    private WebElement clickCheckins;

    //verify tulisan checkin
    @FindBy(xpath = "//h1[.='Check-Ins']")
    private WebElement verifyCheckinsPage;

    //click button create
    @FindBy(xpath = " //button[@class='btn btn-primary btn-sm']")
    private WebElement clickCreateCheckinButton;

    //verify create check in page
    @FindBy(xpath = " //h1[.='What question do you want to ask?']")
    private WebElement verifyCreateCheckinButton;

    //Question box input
    @FindBy(xpath = " //input[@class='form-control']")
    private WebElement inputQuestionBox;

    //Day Ask
    @FindBy(xpath = "//div[.='Tue']")
    private WebElement tuesdayClick;

    @FindBy(xpath = "//div[.='Wed']")
    private WebElement wednesdayClick;

    @FindBy(xpath = "//div[.='Thu']")
    private WebElement thursdayClick;

    @FindBy(xpath = "//div[.='Fri']")
    private WebElement fridayClick;

    @FindBy(xpath = "//div[.='Sat']")
    private WebElement saturdayClick;

    @FindBy(xpath = "//div[.='Sun']")
    private WebElement sundayClick;

    //member
    @FindBy(css = "[d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z']")
    private WebElement clickPlusTagMember;

    @FindBy(xpath = "//p[.='yubihartland']")
    private WebElement clickYubi;

    //checkprivate
    @FindBy(xpath = "//input[@name='switchItem']")
    private WebElement checkPrivate;

    //starcollectingAnswer
    @FindBy(xpath = "//div[.='Start collecting answers']")
    private WebElement clickStartCollecting;

    //cancelCollectingAnswerButton
    @FindBy(xpath = "//button[@class='btn btn-danger']")
    private WebElement clickCancelCollectingAnswerButton;

    //click Data checkin
    @FindBy(xpath = "//h1[contains(.,'Meeting')]")
    private WebElement clickDataCheckin;

    //verify Data checkin
    @FindBy(xpath = "//h1[contains(.,'Meeting')]")
    private WebElement verifyDataCheckin;

    //homeButton
    @FindBy(xpath = "//span[.='Home']")
    private WebElement clickHomeButton;

    //Clickcommentbox
    @FindBy(xpath = "//input[@class='CreateCommentForm_formInitial__3AVVg form-control']")
    private WebElement clickCommentBox;

    //Inputcommentbox
    @FindBy(xpath = "//div[@class='fr-element fr-view']/p[1]")
    private WebElement inputCommentBox;

    //IsaveButtonComment
    @FindBy(xpath = "//div[@class='Button_container__1WNuB']")
    private WebElement saveButtonComment;

    //setTime
    @FindBy(xpath = "//input[@id='time-picker']")
    private WebElement setTimeDate;

    //negarif card click pick
    @FindBy(xpath = "//div[@class='infinite-scroll-component ']/div[2]//h1[contains(.,'Meeting')]")
    private WebElement negatifTestCardClick;

    //negatif click card meeting judul
    @FindBy(xpath = "//h1[contains(.,'123')]")
    private WebElement negatifVerifyMeeting;

    //mondayclick //div[@class='DayBox_container__2GPGE DayBox_color__3jRrD']
    @FindBy(xpath = "//div[@class='DayBox_container__2GPGE DayBox_color__3jRrD']")
    private WebElement mondayClick;

    //starcollectingNull
    @FindBy(xpath = "//div[.='Start collecting answers']")
    private WebElement clickStartNullCase;

    // verify null day
    @FindBy(xpath = " //h1[.='What question do you want to ask?']")
    private WebElement verifyNullDay;






















    public void clickCheckinsButton(){
        clickCheckins.click();
    }

    public boolean isPageDisplayedCheckins(){
        verifyCheckinsPage.isDisplayed();
        return true;
    }

    public void clickCreateCheckin(){
        clickCreateCheckinButton.click();
    }

    public boolean isPageDisplayedCreateCheckin(){
        verifyCreateCheckinButton.isDisplayed();
        return true;
    }

    public void inputQuestion(String qstn){
        inputQuestionBox.sendKeys(qstn);
    }

    //day
    public void clickTuesday(){
        tuesdayClick.click();
    }
    public void clickWednesday(){
        wednesdayClick.click();
    }
    public void clickThursday(){
        thursdayClick.click();
    }
    public void clickFriday(){
        fridayClick.click();
    }
    public void clickSaturday(){
        saturdayClick.click();
    }
    public void clickSunday(){
        sundayClick.click();
    }

    //tagmember
    public void clickTagMember() {
        clickPlusTagMember.click();
    }
    //tagYubi
    public void clickTagYubi(){
        clickYubi.click();
    }

    //checkPrivate
    public void clickCheckPrivate() {
        checkPrivate.click();
    }

    //StartCollecting
    public void clickStartColletingButton() {
        clickStartCollecting.click();
    }

    //CancelStartCollectingButton
    public void clickCancelStartColletingButton() {
        clickCancelCollectingAnswerButton.click();
    }

    //clickDataCheckin
    public void clickDataCheckinPage() {
       clickDataCheckin.click();
    }

    //verify data checkin
    public boolean verifyDataCheckin(){
        verifyDataCheckin.isDisplayed();
        return true;
    }

    //clickHomeButton
    public void clickHome() {
        clickHomeButton.click();
    }

    //clickcommentbox
    public void clickCommentBoxInput() {
        clickCommentBox.click();
    }

    //inputcommentbox
    public void inputCommentBoxInside(String comment) {
        inputCommentBox.sendKeys(comment);
    }

    //savebuttoncomment
    public void saveButtonCommentInside() {
        saveButtonComment.click();
    }

    //Set Time Date
    public void setTimeDate(String date) {
        setTimeDate.sendKeys(date);
    }

    //negatif card click
    public void negatifCardClick() {
        negatifTestCardClick.click();
    }

    //Negatif verif meeting judul
    public boolean negatifTestCheckin(){
        negatifVerifyMeeting.isDisplayed();
        return true;
    }

    //CLICK MONDAY
    public void clickMonday(){
        mondayClick.click();
    }

    //clickStartColecting
    public void clickStartNull(){
        clickStartNullCase.click();
    }

    //checkin Verify Null day
    public boolean verifyNullDay(){
        verifyNullDay.isDisplayed();
        return true;
    }


















}
