"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Amazon asssert test", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    function DDValue(dropDownLists) {
        protractor_1.element.all(protractor_1.by.tagName("option")).each(function (DropDownValue) {
            DropDownValue.getText().then(function (listdown) {
                console.log(listdown);
                if (listdown == dropDownLists) {
                    DropDownValue.click();
                }
            });
        });
        //element(by.id("searchDropdownBox")).click();
    }
    it("Amazon verifying items price using exepect", function () {
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        DDValue("Computers & Accessories");
        var searchBox = protractor_1.element(protractor_1.by.xpath("//input[@id='twotabsearchtextbox']"));
        searchBox.sendKeys("macbook pro 13 2019");
        var searchBoxButton = protractor_1.element(protractor_1.by.xpath("//input[@value='Go']"));
        searchBoxButton.click();
        protractor_1.browser.sleep(3000);
        var itemSelected = protractor_1.element(protractor_1.by.partialLinkText("Apple MacBook Pro (15-inch, Previous Model, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Grey"));
        itemSelected.click();
        var availablePrice = protractor_1.element(protractor_1.by.xpath("//span[@id='priceblock_ourprice']"));
        expect(availablePrice.getText()).toEqual("£2,606.69");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uQXNzZXJ0UmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0FtYXpvbkFzc2VydFJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUFDOUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBRTVCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBRXJDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFckMsU0FBUyxPQUFPLENBQUMsYUFBa0I7UUFFL0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLGFBQWlCO1lBRTdELGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxRQUFlO2dCQUVqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixJQUFHLFFBQVEsSUFBRSxhQUFhLEVBQzFCO29CQUNHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBRUYsOENBQThDO0lBQ2xELENBQUM7SUFHSixFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFFaEQsdUJBQXVCO1FBQ2pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDMUMsSUFBSSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNoRSxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLHlHQUF5RyxDQUFDLENBQUMsQ0FBQztRQUMxSixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckIsSUFBSSxjQUFjLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUMxRSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==