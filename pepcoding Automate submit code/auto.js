// node auto.js --url="https://www.pepcoding.com/login#" --pass=pass.json


let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.pass,"utf-8");
let pass = JSON.parse(configJSON);


(async function()  {
    let browser = await puppeteer.launch({
        headless:false,
        defaultViewport:null,
        args:['--start-maximized']
    });
    let pages = await browser.pages();
    let page = pages[0];

    await page.goto(args.url);
    for(let i =0;i<4;i++){
        await page.keyboard.press("Tab",{
            delay:500
        });
    }
    await page.keyboard.type(pass.userid,{
        delay:100
    });
   await page.keyboard.press("Tab",{
       delay:100
   });
   await page.keyboard.type(pass.password,{
    delay:300
   });
    
    await page.keyboard.press('Enter');
    
     
    let pageTarget = page.target();
     
     await page.waitForSelector("a[href='/resources']");
     await page.click("a[href='/resources']");
      let newTarget = await browser.waitForTarget(target => target.opener() === pageTarget);
     
      let newpage = await newTarget.page();
      newpage.waitForSelector("a[href='/resources/online-java-foundation']");
      newpage.click("a[href='/resources/online-java-foundation']");
       
      await newpage.waitForSelector("a[href='/resources/online-java-foundation/getting-started']")
      await newpage.click("a[href='/resources/online-java-foundation/getting-started']")

      await newpage.waitForSelector('a[href="/resources/online-java-foundation/getting-started/grading-system-official/ojquestion"]');
      await newpage.click('a[href="/resources/online-java-foundation/getting-started/grading-system-official/ojquestion"]');
      
     await newpage.waitForSelector("div[id='codeEditor1637']");
     await newpage.click("div[id='codeEditor1637']");
     await newpage.keyboard.down("Control");
     await newpage.keyboard.down("A");
     await newpage.keyboard.down("Backspace");
     await newpage.keyboard.up("Control");
     let codes = fs.readFileSync("pepcodes.txt","utf-8");
``
     await newpage.keyboard.type(codes,{delay:10});
     for(let i=0;i<52;i++) {
       await newpage.keyboard.down('Shift');
        await newpage.keyboard.down('ArrowRight');
     }
     await newpage.keyboard.down("Backspace");
     await newpage.click('.btn.btn-submit.center.red.white-text.bolder');

     

  })();