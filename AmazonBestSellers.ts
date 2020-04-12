import {browser,element,by} from 'protractor';
import { amazonBestSellers } from './pageObjects/amazonBestSellers.po';
describe("Amazon Best seller page", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Best seller page verifying the link", function(){
        
        let amazonBestSellerPage =new amazonBestSellers();
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        //browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();
        amazonBestSellerPage.bestSellersLink.click();

        browser.sleep(3000);

        amazonBestSellerPage.amazonAlltheLinksBestSeller.getText().then(function(textprint){
            console.log(textprint);
            //element(by.id("nav_prefetch_yourorders")).click();
        })
        
        amazonBestSellerPage.amazonDeviceLink.click();
        
        expect(browser.driver.getCurrentUrl()).toEqual("https://www.amazon.co.uk/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0");
    

                
        browser.sleep(3000);
        
              
    })
})