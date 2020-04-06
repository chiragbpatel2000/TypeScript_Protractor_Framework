import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'AmazonMouseHover.js','AmazonDropDown.js','AmazonBestSellers.js','AmazonAssertRate.js','AmazonWeddingList.js' ],
 // seleniumAddress: 'http://localhost:4444/wd/hub',
 directConnect:true

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  
};