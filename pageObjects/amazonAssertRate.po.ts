import { ElementFinder,by,element } from "protractor";


export class amazonAssertRate
{
mainSearchBox:ElementFinder;
searchBoxButton:ElementFinder;
itemSelected:ElementFinder;
availablePrice:ElementFinder;

constructor()
{
this.mainSearchBox = element(by.xpath("//input[@id='twotabsearchtextbox']"));
this.searchBoxButton=element(by.xpath("//input[@value='Go']"));
this.itemSelected= element(by.partialLinkText("Apple MacBook Pro (15-inch, Previous Model, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Grey"));
this.availablePrice=element(by.xpath("//span[@id='priceblock_ourprice']"));
}


}