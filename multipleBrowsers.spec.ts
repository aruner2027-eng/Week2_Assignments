import {test,expect,chromium,webkit} from "@playwright/test" 
test ('Launch multiple browsers',async() => {

const browser1 = await chromium.launch({
    channel: 'msedge',
    headless: false
})

const context1 = await browser1.newContext();
const page1 = await context1.newPage();
await page1.goto("https://www.redbus.in/");
const title1 = await page1.title(); 

console.log("Title of the page in edge browser is : " + title1);
const url1 = page1.url(); 
console.log("RedBus URL: " + url1);

const browser2 = await webkit.launch({
headless:false 
})

const context2 = await browser2.newContext(); 
const page2 = await context2.newPage(); 
await page2.goto ("https://www.flipkart.com/") ; 
const title2 = await page2.title(); 
console.log ("webkit browser title is " + title2 ); 

const url2 = page2.url();
console.log("webkit url is "+ url2)


// expect(url1).toEqual("https://www.redbus.in/");
// expect(url2).toEqual("https://www.flipkart.com/");

// // expect(title1.toLowerCase()).toContain("redbus");
// // expect(title2.toLowerCase()).toContain("flipkart");

await expect(page1).toHaveURL("https://www.redbus.in/");
await expect(page2).toHaveURL("https://www.flipkart.com/");

await expect(page1).toHaveTitle(/redbus/i);
await expect(page2).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

await browser1.close();
await browser2.close();

}
) 