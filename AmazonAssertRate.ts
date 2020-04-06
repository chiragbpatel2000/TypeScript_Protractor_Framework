import {browser,element,by} from 'protractor';
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
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        DDValue("Computers & Accessories");
        var searchBox = element(by.xpath("//input[@id='twotabsearchtextbox']")); 
        searchBox.sendKeys("macbook pro 13 2019");
        var searchBoxButton = element(by.xpath("//input[@value='Go']"));
        searchBoxButton.click();
        browser.sleep(3000);
        
        var itemSelected = element(by.partialLinkText("Apple MacBook Pro (15-inch, Previous Model, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Grey"));
        itemSelected.click();
        
        var availablePrice =element(by.xpath("//span[@id='priceblock_ourprice']"))
        expect(availablePrice.getText()).toEqual("£2,606.69");      
    })
})