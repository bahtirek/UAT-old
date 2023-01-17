//browser.action.onClicked.addListener(buttonClicked);

if (typeof browser === "undefined") {
  var browser = chrome;
}

let lastWindowId;
let activeTab = {};
let previousTab = {};
let extensionStatus = {
  open: false,
  location: '',
  obj: {}
};

//save last focused window to get the screenshots
browser.windows.getLastFocused(
  null, (window)=>{
    console.log('last focused window', window);
    lastWindowId = window.id
  }
)

// When new window opened active tab is change, for that reason on new window open we need to save current activeTab as previous, will update activeTab back on window close
browser.windows.onCreated.addListener((window) => {
  previousTab = {...activeTab};
  console.log(activeTab);
});

// Cleanup when extension window is closed
browser.windows.onRemoved.addListener(onWindowRemoved);
function onWindowRemoved(windowId){
  if(!extensionStatus.open && !extensionStatus.location =='openedInNewWindow') return false;
  if(windowId == extensionStatus.obj.id) {
    extensionStatus = {
      open: false,
      location: '',
      obj: {}
    };
    activeTab = {...previousTab}
  }
}


// save active tab, needed to inject the extension to active tab
browser.tabs.onActivated.addListener((tab) => {
  activeTab = tab;
  console.log(activeTab);
});

// Cleanup when page with extension tab is reloaded 
browser.tabs.onUpdated.addListener(onTabReload);
function onTabReload(tabId){
  if(extensionStatus.open && extensionStatus.location =='openedInPage') {
    if(tabId == extensionStatus.obj.id) {
      extensionStatus = {
        open: false,
        location: '',
        obj: {}
      };
    }
  }
}


// Cleanup when extension tab is closed
browser.tabs.onRemoved.addListener(onTabRemoved);
function onTabRemoved(tabId){
  if(extensionStatus.open) {
    if (extensionStatus.location =='openedInPage' || extensionStatus.location =='openedInNewTab') {
      if(tabId == extensionStatus.obj.id) {
        console.log(extensionStatus);
        extensionStatus = {
          open: false,
          location: '',
          obj: {}
        };
      }
    }
  }
}

browser.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

  // Request if extension is opened
  if (request.todo == 'openInNewWindow') {
    if(!extensionStatus.open) {
      sendResponse(true);
    }
  }

  // Change extensionSttaus after opening extension in new window
  if (request.todo == 'openedInNewWindow') {
    extensionStatus = {
      open: true,
      location: 'openedInNewWindow',
      obj: request.window
    }
  }

  // Open extension in new tab and change extensionStatus
  if (request.todo == 'openInTab') {
    const newURL = "./index.html";
    if(!extensionStatus.open) {
      const response = await browser.tabs.create({ url: newURL });
      if(response) {
        extensionStatus = {
          open: true,
          location: 'openedInNewTab',
          obj: response
        };
        sendResponse(true);
      }
    }
  }

  // Open extension in active tab and change extensionStatus
  if (request.todo == 'openInPage') {
    const tabs = await browser.tabs.query({active: true, lastFocusedWindow: true});
    if(tabs.length == 0 || tabs[0].url.includes('chrome://')) return false; // If browser tab is empty or it's a browser service page then return false
    if(activeTab.tabId && !extensionStatus.open) {
      buttonClicked(activeTab);
      sendResponse(true);
      extensionStatus = {
        open: true,
        location: 'openedInPage',
        obj: {...tabs[0]}
      };
    }
  }

  // Close extension in active tab and change extensionStatus
  if (request.todo == 'closeExtensionInPage') {
    if(activeTab.tabId && extensionStatus.open) {
      sendResponse(true);
      extensionStatus = {
        open: false,
        location: '',
        obj: {}
      };
    }
  }


  // Capture screenshot
  if (request.todo == 'getImage') {
    console.log(request.todo);
    browser.tabs.captureVisibleTab(null, {format: 'png'}, (dataUrl) => {
      sendResponse({imgSrc:dataUrl});
    });
  }
  //return true;
})


async function buttonClicked(tab) { //change to promise
  browser.tabs.sendMessage(tab.tabId, "inject");
  browser.scripting.executeScript({
    target: {tabId: tab.tabId},
    files: ['runtime.js']
  });
  browser.scripting.executeScript({
    target: {tabId: tab.tabId},
    files: ['polyfills.js']
  });
  browser.scripting.executeScript({
    target: {tabId: tab.tabId},
    files: ['main.js']
  });
  console.log('inject background');
}

browser.commands.onCommand.addListener((command) => {

  //Ctrl-Shift-S
  if (command === 'trigger_select') {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
      browser.tabs.sendMessage(tabs[0].id, "trigger_select");  
    });
  }
  
  //Ctrl-Shift-U
  if (command === 'get_screenshot') {
    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
      browser.tabs.sendMessage(tabs[0].id, "get_screenshot");  
    });
  }
});

browser.alarms.onAlarm.addListener(() => {
  browser.tabs.query({active: true, currentWindow: true}, function(tabs){
    browser.tabs.sendMessage(tabs[0].id, "stop-video-recording");  
  });
})