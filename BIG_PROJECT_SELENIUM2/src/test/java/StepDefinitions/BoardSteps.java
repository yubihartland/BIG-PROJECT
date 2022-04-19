package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.BoardPage;

import static org.junit.Assert.assertEquals;

public class BoardSteps {

    private WebDriver webDriver;

    public BoardSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }


    @Then("User see Board Page")
    public void ClikDirectToBoardPage() throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.clickBoardPage();
        Thread.sleep(3000);
    }


    @When("User Add Card with \"(.*)\" as name card")
    public void InputAddCardName(String card) throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.addCardButton();
        Thread.sleep(2000);
        boardPage.inputCard(card);
        Thread.sleep(2000);
        boardPage.addCardBtn();
        Thread.sleep(3000);


    }

    @When("Input Quick Comment \"(.*)\" as comment")
    public void InputQuickComment(String comment2) throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.menuBoardClick();
        Thread.sleep(2000);
        boardPage.menuQuickCommentClick();
        Thread.sleep(2000);
        boardPage.clickQuickCommentInside();
        Thread.sleep(2000);
        boardPage.inputCommentInside2(comment2);
        Thread.sleep(2000);
        boardPage.quickCommentButtonSave();
        Thread.sleep(2000);

    }

    @When("Add list Feature and input \"(.*)\" as name")
    public void addList(String featurenameList) throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.clickAddListFeature();
        Thread.sleep(2000);
        boardPage.inputfeatureYubiName(featurenameList);
        Thread.sleep(2000);
        boardPage.buttonCreatureFeature();
        Thread.sleep(2000);
    }

    @When("Move Card YUBI TEST")
    public void moveCard() throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.clickYubiCardTest();
        Thread.sleep(2000);
        boardPage.moveButton();
        Thread.sleep(2000);
        boardPage.moveListClick();
        Thread.sleep(2000);
        boardPage.chooseMoveYubi2Click();
        Thread.sleep(2000);
        boardPage.moveButtonGreenClick();
        Thread.sleep(2000);

    }

    @When("Attach file in board card Yubi \"(.*)\" as a file")
    public void attachCardYubi(String attachcardyubi) throws InterruptedException {
        BoardPage boardPage = new BoardPage(webDriver);
        Thread.sleep(2000);
        boardPage.clickYubiCardTest();
        Thread.sleep(2000);
        boardPage.attachFileCardYubi(attachcardyubi);
        Thread.sleep(2000);

    }





}
