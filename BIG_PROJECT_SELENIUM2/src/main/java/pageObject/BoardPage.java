package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BoardPage {

    private static WebDriver driver;

    public BoardPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }


    //BoardClickPage   //h1[.='Board']
    @FindBy(xpath = "//h1[.='Board']")
    private WebElement boardPage;

    //AddCardClick
    @FindBy(xpath = "//div[@class='ListContainer_ListContainer__outerList__1PG0-']/div[1]//div[@class='ListContainer_ListContainer__buttonBottom__2kZAI']")
    private WebElement addCard;

    //inputCardName
    @FindBy(xpath = "//input[@class='form-control']")
    private WebElement inputCardName;

    //addcardButton
    @FindBy(xpath = "//div[@class='Button_container__1WNuB']")
    private WebElement buttonAddCard;

    //clickmenuBoardTest
    @FindBy(xpath = "//div[@class='ListContainer_ListContainer__outerList__1PG0-']//div[@class='ListCard_ListDroppable__1sdGc']/div[1]//div[@id='editCardMenu']")
    private WebElement clickmenuBoard;

    //quickCommentMenu
    @FindBy(xpath = "//p[.='Quick Comment']")
    private WebElement clickQuickComment;

    //clickCommentMenu Inside
    @FindBy(xpath = "//input[@class='CreateCommentForm_formInitial__3AVVg form-control']")
    private WebElement clickQuickCommentInside;

    //saveButtonCommentQuick
    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
    private WebElement buttonSaveQuickComment;

    //inputcommentquick
    @FindBy(xpath = "//div[@class='fr-element fr-view']/p[1]")
    private WebElement inputcommentQuickInside2;

    //add list feature click //div[@class='Button_container__1WNuB Button_flexStart__2nS1S']
    @FindBy(xpath = "//a[.='Add List']")
    private WebElement clickAddListFeature;

    //inputfeature
    @FindBy(xpath = "//input[@name='name']")
    private WebElement inputFeatureYubi;

    //buttonCreateFeature
    @FindBy(xpath = "//div[@class='Button_container__1WNuB']")
    private WebElement buttonCreate;

    //Click YUBI TEST
    @FindBy(xpath = "//a[@href='/cards/62512a6496738afb37354a1b']")
    private WebElement cardYubiTest;

    //move button click
    @FindBy(xpath = "//div[@class='CardDetailContainer_CardDetailContainer__sideColumn__3hzRV col-lg-2 col-md-3']//div[@class='CardDetailContainer_buttonAction__2Sfwo']//div[contains(.,'Move')]")
    private WebElement clickMoveButton;

    //chooseMoveFeature
    @FindBy(xpath = "//div[@class='ManageMoveCard_listSection__listName__TN7R2']")
    private WebElement chooseMoveFeature;

    //chooseMove yubi 2
    @FindBy(xpath = "//a[.='Feature Yubi 2']")
    private WebElement chooseMoveYubi2;

    //movebutton green
    @FindBy(xpath = "//button[@class='btn btn-success btn-sm']")
    private WebElement moveButtonGreen;

    //attach file board card
    @FindBy(xpath = "//div[@class='CardDetailContainer_CardDetailContainer__sideColumn__3hzRV col-lg-2 col-md-3']//input[1]")
    private WebElement attachFileBoardYubi;

    //negatif test wrong card
    @FindBy(xpath = "//div[@class='modal-title h4']/h1[contains(.,'test')]]")
    private WebElement wrongCardBoard;

    //negatif click card
    @FindBy(xpath = "//a[@href='/cards/6252df01e1a7f4f45f2ee8f5']")
    private WebElement wrongClickCardBoard;






















    //ClickBoardPage
    public void clickBoardPage(){
        boardPage.click();
    }

    //AddCard
    public void addCardButton(){
        addCard.click();
    }

    //InputCardName
    public void inputCard(String card){
        inputCardName.sendKeys(card);
    }

    //AddCard Button
    public void addCardBtn(){
        buttonAddCard.click();
    }

    //clickMenuBoardTest
    public void menuBoardClick(){
        clickmenuBoard.click();
    }

    //clickQuickComment
    public void menuQuickCommentClick(){
        clickQuickComment.click();
    }

    //click QuickComent inside
    public void clickQuickCommentInside(){
        clickQuickCommentInside.click();
    }

    //clickSaveButtonQuickComment
    public void quickCommentButtonSave(){
        buttonSaveQuickComment.click();
    }

    //input comment inside 2
    public void inputCommentInside2(String comment2){
        inputcommentQuickInside2.sendKeys(comment2);
    }

    //clickaddlist feature
    public void clickAddListFeature(){
        clickAddListFeature.click();
    }

    //input feature yubi
    public void inputfeatureYubiName(String featurenamelist){
        inputFeatureYubi.sendKeys(featurenamelist);
    }

    //clickbutton creature
    public void buttonCreatureFeature(){
        buttonCreate.click();
    }

    //click card Yubi
    public void clickYubiCardTest(){
        cardYubiTest.click();
    }

    //move button click
    public void moveButton(){
        clickMoveButton.click();
    }

    //choose move feature
    public void moveListClick(){
        chooseMoveFeature.click();
    }

    //choose move yubi2
    public void chooseMoveYubi2Click(){
        chooseMoveYubi2.click();
    }

    //choose move button green
    public void moveButtonGreenClick(){
        moveButtonGreen.click();
    }

    //attach file board yubi card
    public void attachFileCardYubi(String cardYubi){
        attachFileBoardYubi.sendKeys(cardYubi);
    }

    //negatif case wrong card
    public boolean negatifTestChatBoard(){
        wrongCardBoard.isDisplayed();
        return true;
    }

    //negatif test card click
    public void wrongClickCardTestBoard(){
        wrongClickCardBoard.click();
    }



















}
