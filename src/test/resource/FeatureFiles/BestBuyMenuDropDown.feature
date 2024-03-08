@regression
Feature: BestBuy Automation 

	Scenario: Menu DropDown
		Given Open BestBuy page
		When Click on Menu
		And Click on Deals
		And Click on Top Deals
		Then User should be able to click on Featured Deals