// node githubautomate.js --url="https://github.com/login" --pass=pass.json


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

    //enter userid
    await page.waitForSelector("input[type='text']");
    await page.type("input[type='text']", pass.userid, { delay: 20 });
     // type password
     await page.waitForSelector("input[type='password']");
     await page.type("input[type='password']", pass.password, { delay: 20 });

     //click signin button
     await page.waitForSelector("input[type='submit']");
    await page.click("input[type='submit']");

    //click file repogetry
    await page.waitForSelector('a[href="/manish1822510059/Java"]');
    await page.click('a[href="/manish1822510059/Java"]');

    await page.waitForSelector('a[href="/manish1822510059/Java/tree/main/Recursion"]');
    await page.click('a[href="/manish1822510059/Java/tree/main/Recursion"]');


    await page.waitForSelector('span.btn.d-none.d-md-flex.flex-items-center');
    await page.click('span.btn.d-none.d-md-flex.flex-items-center');

    await page.waitForSelector('button.dropdown-item.btn-link');
    await page.click('button.dropdown-item.btn-link');
    //type filename
    await page.waitForSelector("input[name='filename']");
    await page.type("input[name='filename']", pass.filename, { delay: 20 });

          
     await page.waitForSelector("pre.CodeMirror-line ");
     await page.click("pre.CodeMirror-line ");

    let codes = fs.readFileSync("powerlinear.txt","utf-8");

    await page.keyboard.type(codes,{delay:1});

    await page.waitForSelector("button[id='submit-file']");
    await page.click("button[id='submit-file']");
        
  })();