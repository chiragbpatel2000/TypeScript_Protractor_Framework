import {browser,element,by} from 'protractor';
describe("Amazon Mouse Hover ", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover", function(){
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(element(by.id("nav-link-accountList"))).perform();

        browser.sleep(3000);

        element(by.id("nav_prefetch_yourorders")).getText().then(function(textprint){
            console.log(textprint);
            element(by.id("nav_prefetch_yourorders")).click();
        })

        browser.sleep(3000);


        
    })
})