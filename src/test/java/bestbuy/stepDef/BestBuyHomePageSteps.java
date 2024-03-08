package bestbuy.stepDef;

import bestbuy.pageAction.BestBuyHomePageActions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class BestBuyHomePageSteps {
	BestBuyHomePageActions BestBuyHomePageActionsobj = new BestBuyHomePageActions();
	@Given("^Open BestBuy page$")
	public void open_BestBuy_page() throws Throwable {
	
	}

	@When("^Click on Menu$")
	public void click_on_Menu() throws Throwable {
		BestBuyHomePageActionsobj.selectMenu();
	}

	@When("^Click on Deals$")
	public void click_on_Deals() throws Throwable {
		BestBuyHomePageActionsobj.selectDeals();
	}

	@When("^Click on Top Deals$")
	public void click_on_Top_Deals() throws Throwable {
		BestBuyHomePageActionsobj.selectTopDeals();
	}
	@When("^Click on Shop Now$")
	public void click_on_Shop_Now() throws Throwable {
		BestBuyHomePageActionsobj.selectShopNow();
	}
}
