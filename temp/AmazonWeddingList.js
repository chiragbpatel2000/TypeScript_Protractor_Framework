"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const amazonWeddingList_po_1 = require("./pageObjects/amazonWeddingList.po");
describe("Mouse Hover", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    it("Amazon Mouse Hover with Action class", function () {
        let amazonWeddingPage = new amazonWeddingList_po_1.amazonWedding();
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        protractor_1.browser.actions().mouseMove(amazonWeddingPage.accountListSection).perform();
        protractor_1.browser.sleep(3000);
        //var subMenutextWeddingList = element(by.xpath("//span[text()='Wedding List']"));
        // // to fetch the value from submenu and print it
        amazonWeddingPage.subMenutextWeddingList.getText().then(function (textprint) {
            console.log(textprint);
            amazonWeddingPage.subMenutextWeddingList.click();
        });
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uV2VkZGluZ0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbWF6b25XZWRkaW5nTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5Qyw2RUFBbUU7QUFHbkUsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUVwQixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUVyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXhDLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtRQUVwQyxJQUFJLGlCQUFpQixHQUFHLElBQUksb0NBQWEsRUFBRSxDQUFDO1FBQ2xELHVCQUF1QjtRQUNqQixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXpDLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsa0ZBQWtGO1FBRWxGLGtEQUFrRDtRQUVsRCxpQkFBaUIsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO1lBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsaUJBQWlCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckQsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUd4QixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=