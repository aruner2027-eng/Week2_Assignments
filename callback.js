
let browser = "Chrome";


function checkBrowserVersion(callback) {

    setTimeout(function() {

        callback(browser);

    }, 2000);

}

function displayBrowser(browserName) {

    console.log("Browser version using callback: " + browserName);

}


checkBrowserVersion(displayBrowser);