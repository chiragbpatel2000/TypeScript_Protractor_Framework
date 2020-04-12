"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class amazonAssertRate {
    constructor() {
        this.mainSearchBox = protractor_1.element(protractor_1.by.xpath("//input[@id='twotabsearchtextbox']"));
        this.searchBoxButton = protractor_1.element(protractor_1.by.xpath("//input[@value='Go']"));
        this.itemSelected = protractor_1.element(protractor_1.by.partialLinkText("Apple MacBook Pro (15-inch, Previous Model, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Grey"));
        this.availablePrice = protractor_1.element(protractor_1.by.xpath("//span[@id='priceblock_ourprice']"));
    }
}
exports.amazonAssertRate = amazonAssertRate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uQXNzZXJ0UmF0ZS5wby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2FtYXpvbkFzc2VydFJhdGUucG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0Q7QUFHdEQsTUFBYSxnQkFBZ0I7SUFPN0I7UUFFQSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLGVBQWUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsZUFBZSxDQUFDLHlHQUF5RyxDQUFDLENBQUMsQ0FBQztRQUMxSixJQUFJLENBQUMsY0FBYyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUdBO0FBaEJELDRDQWdCQyJ9