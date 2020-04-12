import { ElementFinder,by,element } from 'protractor';


export class amazonBestSellers
{

bestSellersLink:ElementFinder;
amazonDeviceLink:ElementFinder;
amazonAlltheLinksBestSeller:ElementFinder;


constructor()
{
  this.bestSellersLink=element(by.xpath("//a[contains(text(),'Best Sellers')]")); 
  this.amazonDeviceLink=element(by.xpath("//a[contains(text(),'Amazon Devices & Accessories')]")); 
  this.amazonAlltheLinksBestSeller=element(by.id("zg_col1"));

}





}