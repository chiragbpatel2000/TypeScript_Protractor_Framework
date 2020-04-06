import{browser} from 'protractor';
import{element} from 'protractor';
import{by} from 'protractor';


describe("Amazon DropDown lits handling", function(){

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
	
	it("Amazon dropdown list clicking ", function(){

        browser.manage().timeouts().implicitlyWait(3000);
		
		// navigate to website 
        browser.get("https://www.amazon.co.uk/");

        

        DDValue("Amazon Fresh");
        
        DDValue("Alexa Skills");
        
        DDValue("Amazon Global Store");
       
        DDValue("Amazon Pantry");
        
        DDValue("Baby");
        
        DDValue("Beauty");
       
        DDValue("DIY & Tools");
      
        DDValue("Digital Music");
       
        DDValue("Books");
       
        DDValue("Clothing");
      
        

    })

        


        
        
        
              
              
    
})