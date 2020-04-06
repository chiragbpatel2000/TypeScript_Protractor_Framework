"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const protractor_3 = require("protractor");
describe("Amazon DropDown lits handling", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
    function DDValue(dropDownLists) {
        protractor_2.element.all(protractor_3.by.tagName("option")).each(function (DropDownValue) {
            DropDownValue.getText().then(function (listdown) {
                console.log(listdown);
                if (listdown == dropDownLists) {
                    DropDownValue.click();
                }
            });
        });
        //element(by.id("searchDropdownBox")).click();
    }
    it("Amazon dropdown list clicking ", function () {
        protractor_1.browser.manage().timeouts().implicitlyWait(3000);
        // navigate to website 
        protractor_1.browser.get("https://www.amazon.co.uk/");
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW1hem9uRHJvcERvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9BbWF6b25Ecm9wRG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrQztBQUNsQywyQ0FBa0M7QUFDbEMsMkNBQTZCO0FBRzdCLFFBQVEsQ0FBQywrQkFBK0IsRUFBRTtJQUV0QyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUVyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXJDLFNBQVMsT0FBTyxDQUFDLGFBQWtCO1FBRS9CLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxhQUFpQjtZQUU3RCxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsUUFBZTtnQkFFakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsSUFBRyxRQUFRLElBQUUsYUFBYSxFQUMxQjtvQkFDRyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUVGLDhDQUE4QztJQUNsRCxDQUFDO0lBRUosRUFBRSxDQUFDLGdDQUFnQyxFQUFFO1FBRTlCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZELHVCQUF1QjtRQUNqQixvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBSXpDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUV4QixPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEIsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFL0IsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZCLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV6QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBSXhCLENBQUMsQ0FBQyxDQUFBO0FBV04sQ0FBQyxDQUFDLENBQUEifQ==