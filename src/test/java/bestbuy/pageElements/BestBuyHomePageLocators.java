package bestbuy.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestBuyHomePageLocators {
@FindBy(xpath="//button[@aria-label='Menu']")
public WebElement clkMenu ;

@FindBy(xpath="//button[contains(text(),'Deals')]")
public WebElement clkDeals ;


@FindBy(xpath="//a[contains(text(),'Top Deals')]")
public WebElement clkTopDeals ;

@FindBy(xpath="//div[@id='widget-32b09cfe-ccac-4de4-9822-38f4337709ac']//a[1]")
public WebElement clkShopNow ;
}
