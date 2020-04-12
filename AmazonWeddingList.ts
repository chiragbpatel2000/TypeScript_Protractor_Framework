import {browser,by,element} from 'protractor';
import { amazonWedding } from './pageObjects/amazonWeddingList.po';


describe("Mouse Hover", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();
	
	it("Amazon Mouse Hover with Action class", function(){
        
        let amazonWeddingPage = new amazonWedding();
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        browser.actions().mouseMove(amazonWeddingPage.accountListSection).perform();

        browser.sleep(3000);

        //var subMenutextWeddingList = element(by.xpath("//span[text()='Wedding List']"));

        // // to fetch the value from submenu and print it

        amazonWeddingPage.subMenutextWeddingList.getText().then(function(textprint){
            console.log(textprint);
            amazonWeddingPage.subMenutextWeddingList.click();

        })
        
        browser.sleep(3000);
        
              
    })
})