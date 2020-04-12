import { ElementFinder,by,element } from 'protractor';



export class amazonMouseHover
{

accountListSection:ElementFinder;
yourOrderLink:ElementFinder;



constructor()
{
this.accountListSection=element(by.id("nav-link-accountList"));
this.yourOrderLink = element(by.id("nav_prefetch_yourorders"));

}





}