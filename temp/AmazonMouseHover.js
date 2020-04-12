"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const amazonMouseHover_po_1 = require("./pageObjects/amazonMouseHover.po");
describe("Amazon Mouse Hover ", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    it("Amazon Mouse Hover", function () {
        let amazonMouseHoverpage = new amazonMouseHover_po_1.amazonMouseHover();
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        protractor_1.browser.actions().mouseMove(amazonMouseHoverpage.accountListSection).perform();
        protractor_1.browser.sleep(3000);
        amazonMouseHoverpage.yourOrderLink.getText().then(function (textprint) {
            console.log(textprint);
            amazonMouseHoverpage.yourOrderLink.click();
        });
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uTW91c2VIb3Zlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0FtYXpvbk1vdXNlSG92ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEM7QUFDOUMsMkVBQXFFO0FBRXJFLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUVyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXhDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTtRQUVsQixJQUFJLG9CQUFvQixHQUFHLElBQUksc0NBQWdCLEVBQUUsQ0FBQztRQUV4RCx1QkFBdUI7UUFDakIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUV6QyxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRS9FLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxTQUFTO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFBO1FBRUYsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFJeEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9