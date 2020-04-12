import {browser,element,by} from 'protractor';
import { amazonMouseHover } from './pageObjects/amazonMouseHover.po';

describe("Amazon Mouse Hover ", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover", function(){

        let amazonMouseHoverpage = new amazonMouseHover();
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(amazonMouseHoverpage.accountListSection).perform();

        browser.sleep(3000);

    amazonMouseHoverpage.yourOrderLink.getText().then(function(textprint){
            console.log(textprint);
            amazonMouseHoverpage.yourOrderLink.click();
        })

        browser.sleep(3000);


        
    })
})