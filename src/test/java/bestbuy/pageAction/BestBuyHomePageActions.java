package bestbuy.pageAction;

import org.openqa.selenium.support.PageFactory;

import bestbuy.pageElements.BestBuyHomePageLocators;
import bestbuy.utilities.SetupDrivers;

public class BestBuyHomePageActions {
	
	BestBuyHomePageLocators BestBuyHomePageLocatorsobj;
public BestBuyHomePageActions(){
	BestBuyHomePageLocatorsobj = new BestBuyHomePageLocators();
PageFactory.initElements(SetupDrivers.driver, BestBuyHomePageLocatorsobj);	
}
public void selectMenu(){
	BestBuyHomePageLocatorsobj.clkMenu.click();
}
public void selectDeals(){
	BestBuyHomePageLocatorsobj.clkDeals.click();
}
public void selectTopDeals(){
	BestBuyHomePageLocatorsobj.clkTopDeals.click();
}
public void selectShopNow() throws Exception{
	//SetupDrivers.driver.switchTo().frame("1");
	Thread.sleep(10000);
	BestBuyHomePageLocatorsobj.clkShopNow.click();
}

}

