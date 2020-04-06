"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Mouse Hover", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    it("Amazon Mouse Hover with Action class", function () {
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.id("nav-link-accountList"))).perform();
        protractor_1.browser.sleep(3000);
        var subMenutextWeddingList = protractor_1.element(protractor_1.by.xpath("//span[text()='Wedding List']"));
        // // to fetch the value from submenu and print it
        subMenutextWeddingList.getText().then(function (textprint) {
            console.log(textprint);
            subMenutextWeddingList.click();
        });
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uV2VkZGluZ0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbWF6b25XZWRkaW5nTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUU5QyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBRXBCLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBRXJDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFeEMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFO1FBRTFDLHVCQUF1QjtRQUNqQixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXpDLG9CQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU5RSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQixJQUFJLHNCQUFzQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUM7UUFFaEYsa0RBQWtEO1FBRWxELHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFNBQVM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxDQUFDLENBQUMsQ0FBQTtRQUVGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3hCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==