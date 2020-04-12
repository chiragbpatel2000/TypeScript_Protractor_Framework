import { ElementFinder,by,element } from "protractor";

export class amazonWedding 
{

accountListSection:ElementFinder;
subMenutextWeddingList:ElementFinder;



constructor()
{

this.accountListSection=element(by.id("nav-link-accountList"));
this.subMenutextWeddingList=element(by.xpath("//span[text()='Wedding List']"));



}


}