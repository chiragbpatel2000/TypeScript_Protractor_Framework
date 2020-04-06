"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Amazon Best seller page", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    it("Amazon Best seller page verifying the link", function () {
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        //browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();
        protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Best Sellers')]")).click();
        protractor_1.browser.sleep(3000);
        protractor_1.element(protractor_1.by.id("zg_col1")).getText().then(function (textprint) {
            console.log(textprint);
            //element(by.id("nav_prefetch_yourorders")).click();
        });
        protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Amazon Devices & Accessories')]")).click();
        expect(protractor_1.browser.driver.getCurrentUrl()).toEqual("https://www.amazon.co.uk/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0");
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uQmVzdFNlbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbWF6b25CZXN0U2VsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5QyxRQUFRLENBQUMseUJBQXlCLEVBQUU7SUFFaEMsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7SUFFckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV4QyxFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFFaEQsdUJBQXVCO1FBQ2pCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFekMsZ0ZBQWdGO1FBQ2hGLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEUsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLG9EQUFvRDtRQUN4RCxDQUFDLENBQUMsQ0FBQTtRQUVGLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEYsTUFBTSxDQUFDLG9CQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDJFQUEyRSxDQUFDLENBQUM7UUFJNUgsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHeEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9