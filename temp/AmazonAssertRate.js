"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const amazonAssertRate_po_1 = require("./pageObjects/amazonAssertRate.po");
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
        let amazonAssertRatePage = new amazonAssertRate_po_1.amazonAssertRate();
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        DDValue("Computers & Accessories");
        amazonAssertRatePage.mainSearchBox.sendKeys("macbook pro 13 2019");
        amazonAssertRatePage.searchBoxButton.click();
        protractor_1.browser.sleep(3000);
        amazonAssertRatePage.itemSelected.click();
        amazonAssertRatePage.availablePrice;
        expect(amazonAssertRatePage.availablePrice.getText()).toEqual("£2,596.25");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uQXNzZXJ0UmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0FtYXpvbkFzc2VydFJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUFDOUMsMkVBQW9FO0FBQ3BFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUVyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJDLFNBQVMsT0FBTyxDQUFDLGFBQWtCO1FBRS9CLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxhQUFpQjtZQUU3RCxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBZTtnQkFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsSUFBRyxRQUFRLElBQUUsYUFBYSxFQUMxQjtvQkFDRyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUVGLDhDQUE4QztJQUNsRCxDQUFDO0lBR0osRUFBRSxDQUFDLDRDQUE0QyxFQUFFO1FBRTFDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxzQ0FBZ0IsRUFBRSxDQUFDO1FBQ3hELHVCQUF1QjtRQUNqQixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ25DLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuRSxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0Msb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQTtRQUNuQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==