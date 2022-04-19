package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pageObject.GroupChatPage;

public class GroupChatSteps {

    private WebDriver webDriver;

    public GroupChatSteps() {
        super();
        this.webDriver = Hooks.webDriver;
    }


    @Then("User see Group Chat page")
    public void verifyDasboardGroupChat() throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(3000);
        groupChatPage.clickGroupChatButtonPage();
        Thread.sleep(3000);
        Assert.assertTrue(groupChatPage.verifyGroupChat());
        Thread.sleep(3000);
    }

    @When("Input \"(.*)\" as a Chat and Send")
    public void inputTextSend(String chat) throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(5000);
        groupChatPage.inputTextGroupChat(chat);
        Thread.sleep(5000);
        groupChatPage.clickButtonChatSend();
        Thread.sleep(3000);
    }

    @When("Verify \"(.*)\" as a Chat")
    public void verifyTextChat(String chatHalo) throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(3000);
        Assert.assertTrue(groupChatPage.verifyHaloChat());
        Thread.sleep(8000);
    }

    @When("Tag \"(.*)\" as member")
    public void inputTagMember(String tag) throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(3000);
        groupChatPage.tagMemberYubi(tag);
        Thread.sleep(3000);
        groupChatPage.tagMemberYubihartland();
        Thread.sleep(3000);
        groupChatPage.clickButtonChatSend();
        Thread.sleep(3000);

    }

    @When("Attach file \"(.*)\" as a file")
    public void attachFile(String attach) throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(3000);
        groupChatPage.attachFileChatGroup(attach);
        Thread.sleep(3000);
    }

    @When("Input Null Chat With Verify it")
    public void NullChat() throws InterruptedException {
        GroupChatPage groupChatPage = new GroupChatPage(webDriver);
        Thread.sleep(3000);
        groupChatPage.clicknullforinput();
        Thread.sleep(3000);
        groupChatPage.clickButtonChatSend();
        Thread.sleep(3000);
        Assert.assertTrue(groupChatPage.nullChat());
        Thread.sleep(3000);




    }



}
