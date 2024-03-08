package bestbuy.pageElements;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BestBuyResultPageLocators {
	@FindBy(xpath="//p[contains(text(),'Featured Deals')]")
	public WebElement clkFetreddls ;
	
	@FindBy(xpath="//a[contains(text(),'Shop Now')]")
	public WebElement clkMbrDls ;
}
