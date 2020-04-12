import {browser,element,by} from 'protractor';
import { amazonAssertRate} from './pageObjects/amazonAssertRate.po';
describe("Amazon asssert test", function(){

    browser.ignoreSynchronization = true;

    browser.manage().window().maximize();

    function DDValue(dropDownLists: any){

        element.all(by.tagName("option")).each(function(DropDownValue:any)
        {
            DropDownValue.getText().then(function(listdown:string)
            {    
                console.log(listdown);
                if(listdown==dropDownLists)
                {
                   DropDownValue.click(); 
                }
            })
        })

        //element(by.id("searchDropdownBox")).click();
    }
	
	
	it("Amazon verifying items price using exepect", function(){
        
        let amazonAssertRatePage = new amazonAssertRate();
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        DDValue("Computers & Accessories");
        amazonAssertRatePage.mainSearchBox.sendKeys("macbook pro 13 2019");
        amazonAssertRatePage.searchBoxButton.click();
        
        browser.sleep(3000);
        amazonAssertRatePage.itemSelected.click();
        
        amazonAssertRatePage.availablePrice
        expect(amazonAssertRatePage.availablePrice.getText()).toEqual("£2,596.25");      
    })
})