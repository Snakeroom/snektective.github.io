(function() {
    // function detectBrowser() {
    //     if (window.chrome) { return "chrome"; }
    //     if (window.InstallTrigger) { return "firefox"; }
    //     return "other";
    // }

    // window.dlChrome = function() {
    //     var extUrl = "https://chrome.google.com/webstore/detail/ejabfblfddjecbkhadpdhcabmjlaomdm";

    //     if (window.chrome) {
    //         window.chrome.webstore.install(extUrl);
    //     } else {
    //         // redirect directly to chrome web store
    //         window.location.href = extUrl;
    //     }
    // }

    // window.dlFirefox = function() {
    //     var extUrl = "https://addons.mozilla.org/firefox/downloads/file/912035/sneknet-0.3.0-an+fx.xpi?src=sneknet.com"

    //     if (window.InstallTrigger) {
    //         window.InstallTrigger.install({"sneknet": extUrl});
    //     } else {
    //         window.location.href = "https://addons.mozilla.org/en-US/firefox/addon/sneknet/";
    //     }
    // }

    // window.showAll = function() {
    //     document.querySelector(".buttons").classList.add("other");
    //     document.querySelector(".button-show-all").classList.add("hidden");
    // }

    // var browser = detectBrowser();
    // var classes = document.querySelector(".buttons").classList;
    // classes.add(browser);
    // classes.add("detected");

    // reddit links
    document.querySelectorAll(".reddit-user").forEach(function(lnk) {
        var username = lnk.getAttribute("data-user");

        lnk.href = "http://reddit.com/u/" + username;
        lnk.innerHTML = "/u/" + username;
        lnk.target = "_blank";
    });
})();
