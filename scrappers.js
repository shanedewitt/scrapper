const puppeteer = require('puppeteer');
async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //const el = await page.$x('//*[@id="mw-content-text"]/div/table[1]/thead');
    const el = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('table tr td'))
        //return tds.map(td => td.innerHTML)
        return tds.map(td => td.textContent)
      });

    //console.log(el);
    // ["Quest/preload\n","\n","\n","\n","\n","\n","Free to Play\n","[[]]\n","\n","The Bugbear Bandits\n","1\n","240\n","400\n","430\n","460\n","Keep on the Borderlands\n","The Gatekeepers\n","2\n","Heyton's Rest\n","1\n","188\n","313\n","334\n","356\n","Free to Play\n","The Coin Lords\n","2\n","The Hobgoblin Horde\n","1\n","396\n","660\n","716\n","772\n","Keep on the Borderlands\n","The Gatekeepers\n","3\n"
    
    debug(el);

    //process.stdout.write(JSON.stringify(el) + '\n');
    //process.stdout.write(el + '\n');

    browser.close();
}
function debug(x) {

  console.log("quest name:" + x[0] + "\n");
  console.log("quest level:" + x[1] + "\n");
  console.log("casual/solo exp:" + x[2] + "\n");
  console.log("normal exp:" + x[3] + "\n");
  console.log("hard exp:" + x[4] + "\n");
  console.log("elite exp:" + x[5] + "\n");
  console.log("adventure pack:" + x[6] + "\n");
  console.log("patron:" + x[7] + "\n");
  console.log("favor:" + x[8] + "\n");

  console.log("quest name:" + x[9+0] + "\n");
  console.log("quest level:" + x[9+1] + "\n");
  console.log("casual/solo exp:" + x[9+2] + "\n");
  console.log("normal exp:" + x[9+3] + "\n");
  console.log("hard exp:" + x[9+4] + "\n");
  console.log("elite exp:" + x[9+5] + "\n");
  console.log("adventure pack:" + x[9+6] + "\n");
  console.log("patron:" + x[9+7] + "\n");
  console.log("favor:" + x[9+8] + "\n");

}
scrapeProduct('https://ddowiki.com/page/Quests_by_level_and_XP');
