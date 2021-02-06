const { time } = require('console');
const puppet = require('puppeteer');

async function scrapeWeb(url, xpath_Name, xpath_Points ) {

    //init process and go to URL
    const browser = await puppet.launch();
    const page = await browser.newPage();
    await page.goto(url);


    //pull name and set it to a variable
    const [el_Name] = await page.$x(`${xpath_Name}`);
    const _nameTxt = await el_Name.getProperty('textContent');
    const nameTxt = await _nameTxt.jsonValue();
    const playerName = nameTxt;

    


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //pull placement and set it to a variable
    // const [el_Placement] = await page.$x(`${xpath_Placement}`);
    // const _placementTxt = await el_Placement.getProperty('textContent');
    // const placementTxt = await _placementTxt.jsonValue();
    // const playerPlacement = placementTxt;

    // ^^^^^^^^^ They need to refactor their shit. It looks like garbage lmfao, just going to manually have something create their placements because you can find out there placements by calling the specific rows. Thank fuck.


    // make sure that if you use this section of code again, that you pull xpath_Placement again in your function call!
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //pull kills and set it to a variable
    const [el_Points] = await page.$x(`${xpath_Points}`);
    const _pointsTxt = await el_Points.getProperty('textContent');
    const pointsTxt = await _pointsTxt.jsonValue();
    const playerPoints = pointsTxt;




    // converting the data to an object
    const placeData = [
        {
            name: playerName,
            // placement: manualPlaceData
            points: playerPoints

        }
    ];


    console.log(placeData);


    //close process
    browser.close();
}

// scrapeWeb('https://fortnitetracker.com/events/epicgames_S15_SoloCashCup_BR','//*[@id="row0"]/td[2]/div/div[2]/div[1]','//*[@id="row0"]/td[3]' );
scrapeWeb('https://fortnitetracker.com/events/epicgames_S15_SoloCashCup_BR','//*[@id="row0"]/td[2]/div/div[2]/div[1]','//*[@id="row0"]/td[3]' );

//*[@id="row0"]/td[2]/div
//*[@id="row86"]/td[2]/div/div[2]/div

//*[@id="row0"]/td[2]/div/div[2]/div[1] == CURRENT

// These below are for people without images, so I need to write a statement checking if they have a photo...
// //*[@id="row87"]/td[2]/div/div/div == name
// //*[@id="row87"]/td[3] == points

async function Compile100List (url) {
    var i;
    for (i = 0; i < 100; i++) {
        await scrapeWeb(url,`//*[@id="row${i}"]/td[2]/div/div[2]/div[1]`,`//*[@id="row${i}"]/td[3]`)
    }
}

// Compile100List('https://fortnitetracker.com/events/epicgames_S15_SoloCashCup_BR')