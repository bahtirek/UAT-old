//browser.action.onClicked.addListener(buttonClicked);

if (typeof browser === "undefined") {
  var browser = chrome;
}

let lastWindowId;
let activeTab;
let extensionStatus = {
  open: false,
  location: '',
  obj: {}
};

//save last focused window to get the screenshots
browser.windows.getLastFocused(
  null, (window)=>{
    console.log('lastfoc', window);
    lastWindowId = window.id
  }
)

// save active tab, needed to inject the extension to active tab
browser.tabs.onActivated.addListener((activeInfo) => {
  browser.tabs.get(activeInfo.tabId, function (tab) {
      activeTab = tab;
  });
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
  }
}

// Cleanup when extension tab is closed
browser.tabs.onRemoved.addListener(onTabRemoved);
function onTabRemoved(tabId){
  if(!extensionStatus.open && !extensionStatus.location =='openedInNewTab') return false;
  if(tabId == extensionStatus.obj.id) {
    extensionStatus = {
      open: false,
      location: '',
      obj: {}
    };
    //browser.tabs.onRemoved.removeListener(onWindowRemoved);
  }
}

browser.runtime.onMessage.addListener(async function (request, sender, sendResponse) {

  if (request.todo == 'openedInNewWindow') {
    console.log(request);
    extensionStatus = {
      open: true,
      location: 'openedInNewWindow',
      obj: request.window
    }
  }

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

  if (request.todo == 'openInPage') {
    console.log(extensionStatus.open);
    //change to promise
    if(activeTab && !extensionStatus.open) {
      buttonClicked(activeTab);
      sendResponse(true);
    }
  }

  if (request.todo == 'getImage') {
    console.log(request.todo);
    browser.tabs.captureVisibleTab(null, {format: 'png'}, (dataUrl) => {
      sendResponse({imgSrc:dataUrl});
    });
 
    return true;
  }
})


async function buttonClicked(tab) { //change to promise
  await browser.tabs.sendMessage(tab.id, "inject");
  await browser.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['runtime.js']
  });
  await browser.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['polyfills.js']
  });
  await browser.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['main.js']
  });
  console.log('inject background');
}

browser.commands.onCommand.addListener((command) => {

  //Cntr-Shift-S
  if (command === 'trigger_select') {
    //browser.tabs.executeScript(null, {file: 'component.js'});
    browser.tabs.query({active: true, currentWindow: true}, function(tabs){
      browser.tabs.sendMessage(tabs[0].id, "trigger_select");  
    });
  }
  
  //Cntr-Shift-U
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