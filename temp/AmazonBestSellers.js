"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const amazonBestSellers_po_1 = require("./pageObjects/amazonBestSellers.po");
describe("Amazon Best seller page", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    it("Amazon Best seller page verifying the link", function () {
        let amazonBestSellerPage = new amazonBestSellers_po_1.amazonBestSellers();
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
        //browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();
        amazonBestSellerPage.bestSellersLink.click();
        protractor_1.browser.sleep(3000);
        amazonBestSellerPage.amazonAlltheLinksBestSeller.getText().then(function (textprint) {
            console.log(textprint);
            //element(by.id("nav_prefetch_yourorders")).click();
        });
        amazonBestSellerPage.amazonDeviceLink.click();
        expect(protractor_1.browser.driver.getCurrentUrl()).toEqual("https://www.amazon.co.uk/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0");
        protractor_1.browser.sleep(3000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uQmVzdFNlbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbWF6b25CZXN0U2VsbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUM5Qyw2RUFBdUU7QUFDdkUsUUFBUSxDQUFDLHlCQUF5QixFQUFFO0lBRWhDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0lBRXJDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFeEMsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO1FBRTFDLElBQUksb0JBQW9CLEdBQUUsSUFBSSx3Q0FBaUIsRUFBRSxDQUFDO1FBQ3hELHVCQUF1QjtRQUNqQixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXpDLGdGQUFnRjtRQUNoRixvQkFBb0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFN0Msb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEIsb0JBQW9CLENBQUMsMkJBQTJCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsU0FBUztZQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLG9EQUFvRDtRQUN4RCxDQUFDLENBQUMsQ0FBQTtRQUVGLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1FBSTVILG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBR3hCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==