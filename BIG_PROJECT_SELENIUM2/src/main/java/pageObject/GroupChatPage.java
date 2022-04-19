package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GroupChatPage {

    private static WebDriver driver;

    public GroupChatPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    //groupChat
    @FindBy(xpath = " //h1[.='Group Chat']")
    private WebElement clickGroupChatPage;

    //verifygroupchatPage
    @FindBy(xpath = " //h1[.='Group Chat - Paket soal C']")
    private WebElement verifyGroupChat;

    //inputTextChatPage
    @FindBy(xpath = "//div[@class='fr-element fr-view']/p[1]")
    private WebElement inputTextGroupChat;

    //sendbuttonchat
    @FindBy(xpath = "//button[@class='rounded-circle btn btn-warning btn-sm']")
    private WebElement sendButtonChat;

    //verifyhalochat
    @FindBy(xpath = "//p[.='Halo']")
    private WebElement verifyHaloChat;

    //tagmember
    @FindBy(xpath = "//div[@class='fr-element fr-view']/p[1]")
    private WebElement tagMember;

    //tagmember yubihartland
    @FindBy(xpath = "//li[@class='highlight']//a[.='yubihartland']")
    private WebElement tagMemberYubihartland;

    //Attach File
    @FindBy(xpath = "//input[1]")
    private WebElement attachFileChat;

    //negatif test
    @FindBy(xpath = "//div[@class='infinite-scroll-component ']/div[2]//p[.='Halo']")
    private WebElement wrongChatVerify;

    //Negatif no input null chat verify  //h1[.='logo.png']  ////img[@src='https://storage.googleapis.com/staging-cicle-app/61fd1bca835d691ce6fc470d/624d9c8db4dad6e15911fbc2/d1ccfb46f88fb97df83777f60af63248/logo.png']
    @FindBy(xpath = "//h1[.='logo.png']")
    private WebElement noInputChatNull;

    //negatif null chat input
    @FindBy(xpath = "//div[@class='fr-element fr-view']/p[1]")
    private WebElement clickNoInput;


















    //clickGroupchat
    public void clickGroupChatButtonPage(){
        clickGroupChatPage.click();
    }

    //verifygroupchatpage
    public boolean verifyGroupChat(){
        verifyGroupChat.isDisplayed();
        return true;
    }

    //inputTextCHat
    public void inputTextGroupChat(String chat){
        inputTextGroupChat.sendKeys(chat);
    }

    //sendbuttonchat
    public void clickButtonChatSend(){
        sendButtonChat.click();
    }

    //verify halo chat
    public boolean verifyHaloChat(){
        verifyHaloChat.isDisplayed();
        return true;
    }

    //tagMember
    public void tagMemberYubi(String tag){
        tagMember.sendKeys(tag);
    }

    //tagMember yubihartland
    public void tagMemberYubihartland(){
        tagMemberYubihartland.click();
    }

    //attachFile
    public void attachFileChatGroup(String attach){
        attachFileChat.sendKeys(attach);
    }

    //negatif test
    public boolean negatifTestChat(){
        wrongChatVerify.isDisplayed();
        return true;
    }

    //negatif test null chat verify
    public boolean nullChat(){
        noInputChatNull.isDisplayed();
        return true;
    }

    //click input null
    public void clicknullforinput(){
        clickNoInput.click();
    }

















}
