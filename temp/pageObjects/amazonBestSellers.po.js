"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class amazonBestSellers {
    constructor() {
        this.bestSellersLink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Best Sellers')]"));
        this.amazonDeviceLink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'Amazon Devices & Accessories')]"));
        this.amazonAlltheLinksBestSeller = protractor_1.element(protractor_1.by.id("zg_col1"));
    }
}
exports.amazonBestSellers = amazonBestSellers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1hem9uQmVzdFNlbGxlcnMucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9hbWF6b25CZXN0U2VsbGVycy5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRDtBQUd0RCxNQUFhLGlCQUFpQjtJQVE5QjtRQUVFLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsMkJBQTJCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztDQU1BO0FBcEJELDhDQW9CQyJ9