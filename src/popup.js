if (typeof browser === "undefined") {
    var browser = chrome;
}

document.addEventListener('DOMContentLoaded', function(){
    const openInWindow = document.getElementById('openInWindow');
    const openInTab = document.getElementById('openInTab');
    const openInPage = document.getElementById('openInPage');
    openInWindow.addEventListener('click', async ()=>{
        const response = await browser.runtime.sendMessage({todo: "openInNewWindow"});
        if(response) {
            var newURL = "./index.html";
            browser.windows.onCreated.addListener(windowCreatedListener)
            const windowCreated = browser.windows.create({ url: newURL });
            if(windowCreated) window.close();
        }
    })
    openInTab.addEventListener('click', async ()=>{
        const response = await browser.runtime.sendMessage({todo: "openInTab"});
        if(response) window.close();
    })
    openInPage.addEventListener('click', async ()=>{
        const response = await browser.runtime.sendMessage({todo: "openInPage"});
        if(response) window.close();
    })
})

async function windowCreatedListener(window) {
    const response = await browser.runtime.sendMessage({todo: "openedInNewWindow", window: window});
    if(response) {
        browser.windows.onCreated.removeListener(windowCreatedListener);
    }
}