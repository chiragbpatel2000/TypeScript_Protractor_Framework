import {browser,element,by} from 'protractor';
describe("Amazon Best seller page", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Best seller page verifying the link", function(){
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        //browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();
        element(by.xpath("//a[contains(text(),'Best Sellers')]")).click();

        browser.sleep(3000);

        element(by.id("zg_col1")).getText().then(function(textprint){
            console.log(textprint);
            //element(by.id("nav_prefetch_yourorders")).click();
        })
        
        element(by.xpath("//a[contains(text(),'Amazon Devices & Accessories')]")).click();
        
        expect(browser.driver.getCurrentUrl()).toEqual("https://www.amazon.co.uk/Best-Sellers/zgbs/amazon-devices/ref=zg_bs_nav_0");
    

                
        browser.sleep(3000);
        
              
    })
})