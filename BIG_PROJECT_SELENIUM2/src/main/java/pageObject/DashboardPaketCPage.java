package pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class DashboardPaketCPage {

    private static WebDriver driver;

    public DashboardPaketCPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }


    @FindBy(xpath = "//p[@class='DashboardPage_leftCol__smallTitle__331B9 mr-auto']")
    private WebElement dasboardPage;

    @FindBy(xpath = "//div[@class='Card_Card__2LWWW']")
    private WebElement paketSoalC;

    @FindBy(xpath = "//h1[.='Paket soal C']")
    private WebElement paketCDashboard;

    //button notif
    @FindBy(xpath = "//span[@class='MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary']")
    private WebElement notifBell;

    //button notif inside
    @FindBy(xpath = "//h1[.='yubihartland mentioned you at : Paket soal C']")
    private WebElement notifBellInside;

    //button click dm
    @FindBy(css = ".NavHeader_navIconSection__2A2RJ > div:nth-of-type(1) .MuiSvgIcon-root")
    private WebElement clickDirectMessage;

    // input dm name
    @FindBy(xpath = "//input[@class='form-control']")
    private WebElement inputDirectMessageName;

    //clickyubihartland dm direct
    @FindBy(xpath = "//div[@class='PrivateChatPopUp_text__3dr7b']")
    private WebElement clickYubidm;









    public boolean isPageDisplayed() {
        dasboardPage.isDisplayed();
        return true;
    }

    public void clickPaketC(){
        paketSoalC.click();
    }

    public boolean isPageDisplayedPaketC(){
        paketCDashboard.isDisplayed();
        return true;
    }

    //bell button notif
    public void bellNotif() {
        notifBell.click();
    }

    //click dm
    public void btnDirectMessage() {
        clickDirectMessage.click();
    }

    //input dm name
    public void inputDirectMessageName(String dmName) {
        inputDirectMessageName.sendKeys(dmName);
    }

    //click yubi dm name
    public void clickYubidmName() {
        clickYubidm.click();
    }
    

}
