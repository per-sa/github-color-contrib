

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      var activeTab = tabs[0];
      var activeTabId = activeTab.id; // or do whatever you need

});

document.addEventListener('DOMContentLoaded', function() {
    var mode = document.getElementById('HalloweenMode');
    // onClick's logic below:
    mode.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            localStorage.setItem("halloweenMode", "true");

            var activeTab = tabs[0];
            var activeTabId = activeTab.id; // or do whatever you need
            chrome.scripting.insertCSS({
                files: ["halloween-mode.css"],
                target: { tabId: activeTabId },
            });

        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mode = document.getElementById('WinterMode');
    // onClick's logic below:
    mode.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            localStorage.setItem("winterMode", "true");

            var activeTab = tabs[0];
            var activeTabId = activeTab.id; // or do whatever you need
            chrome.scripting.insertCSS({
                files: ["winter-mode.css"],
                target: { tabId: activeTabId },
            });

        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var mode = document.getElementById('disableMode');
    // onClick's logic below:
    mode.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            localStorage.setItem("halloweenMode", "false");
            localStorage.setItem("winterMode", "false");

            var activeTab = tabs[0];
            var activeTabId = activeTab.id; // or do whatever you need

            chrome.scripting.removeCSS({
                files: ["halloween-mode.css"],
                target: { tabId: activeTabId },
            });

            chrome.scripting.removeCSS({
                files: ["winter-mode.css"],
                target: { tabId: activeTabId },
            });



        });
    });
});
    