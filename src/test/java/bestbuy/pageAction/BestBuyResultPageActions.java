package bestbuy.pageAction;

import org.openqa.selenium.support.PageFactory;

import bestbuy.pageElements.BestBuyResultPageLocators;
import bestbuy.utilities.SetupDrivers;

public class BestBuyResultPageActions {
	BestBuyResultPageLocators BestBuyResultPageLocatorsobj;
	
	public BestBuyResultPageActions(){
		BestBuyResultPageLocatorsobj = new BestBuyResultPageLocators();
		PageFactory.initElements(SetupDrivers.driver, BestBuyResultPageLocatorsobj);	
	}
	public void selectFeaturedDeals(){
		BestBuyResultPageLocatorsobj.clkFetreddls.click();
	}
	public void selectMemberDeals() throws Exception{
		Thread.sleep(5000);
		BestBuyResultPageLocatorsobj.clkMbrDls.click();
	}
}
