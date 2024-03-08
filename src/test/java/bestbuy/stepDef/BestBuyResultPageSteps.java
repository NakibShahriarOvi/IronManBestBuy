package bestbuy.stepDef;

import bestbuy.pageAction.BestBuyResultPageActions;
import cucumber.api.java.en.Then;

public class BestBuyResultPageSteps {
	BestBuyResultPageActions BestBuyResultPageActionsobj = new BestBuyResultPageActions();
	@Then("^User should be able to click on Featured Deals$")
	public void user_should_be_able_to_click_on_Featured_Deals() throws Throwable {
		BestBuyResultPageActionsobj.selectFeaturedDeals();
	}
	
	@Then("^User should be able to click on Exclusive Member Deals$")
	public void user_should_be_able_to_click_on_Exclusive_Member_Deals() throws Throwable {
		BestBuyResultPageActionsobj.selectMemberDeals();
	}
}
